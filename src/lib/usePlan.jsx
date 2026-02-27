// src/lib/usePlan.jsx - 调试版本
import { useState, useEffect } from "react";
import { ref, onValue, set, get } from "firebase/database";
import { db } from "./firebase";

export function usePlan(userId) {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const planRef = ref(db, `plans/${userId}`);
    
    const unsubscribe = onValue(planRef, async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('📦 用户套餐数据：', data); // 调试日志
        
        // 检查订阅是否过期
        if ((data.type === "monthly" || data.type === "yearly") && data.expiryDate) {
          const now = Date.now();
          console.log('⏰ 当前时间：', now);
          console.log('⏰ 过期时间：', data.expiryDate);
          console.log('⏰ 是否过期：', now > data.expiryDate);
          
          if (now > data.expiryDate) {
            console.log('❌ 套餐已过期，降级为 free');
            await set(planRef, {
              type: "free",
              expiryDate: null,
              createdAt: data.createdAt || now,
              downgraded: true,
              downgradedAt: now,
              previousType: data.type,
            });
            setPlan({ type: "free", expiryDate: null, downgraded: true });
            setLoading(false);
            return;
          }
        }
        
        setPlan(data);
      } else {
        console.log('🆕 新用户，创建免费套餐');
        const defaultPlan = {
          type: "free",
          expiryDate: null,
          createdAt: Date.now(),
        };
        await set(planRef, defaultPlan);
        setPlan(defaultPlan);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  return { plan, loading };
}

export async function canPostJob(userId) {
  console.log('🔍 检查发布权限，用户ID：', userId);
  
  if (!userId) {
    console.log('❌ 未登录');
    return { canPost: false, reason: "请先登录" };
  }

  try {
    const planRef = ref(db, `plans/${userId}`);
    const snapshot = await get(planRef);

    if (!snapshot.exists()) {
      console.log('🆕 用户没有套餐，创建免费套餐');
      await set(planRef, {
        type: "free",
        expiryDate: null,
        createdAt: Date.now(),
      });
      return { 
        canPost: false, 
        reason: "免费会员不能发布职位",
        needUpgrade: true,
        currentPlan: "free"
      };
    }

    const plan = snapshot.val();
    console.log('📦 套餐数据：', plan);
    console.log('📦 套餐类型：', plan.type);

    // 免费会员：不能发布
    if (plan.type === "free") {
      console.log('❌ 免费会员不能发布');
      return { 
        canPost: false, 
        reason: "免费会员不能发布职位，请升级到基础或高级雇主",
        needUpgrade: true,
        currentPlan: "free"
      };
    }

    // 基础雇主或高级雇主：检查是否过期
    if (plan.type === "monthly" || plan.type === "yearly") {
      console.log('✅ 付费用户：', plan.type);
      
      if (plan.expiryDate) {
        const now = Date.now();
        console.log('⏰ 当前时间：', now);
        console.log('⏰ 过期时间：', plan.expiryDate);
        console.log('⏰ 是否过期：', now > plan.expiryDate);
        
        if (now > plan.expiryDate) {
          console.log('❌ 订阅已过期');
          await set(planRef, {
            type: "free",
            expiryDate: null,
            createdAt: plan.createdAt || Date.now(),
            downgraded: true,
            downgradedAt: Date.now(),
            previousType: plan.type,
          });
          return { 
            canPost: false, 
            reason: "订阅已过期，请续费",
            needUpgrade: true,
            currentPlan: "free"
          };
        }
      }
      
      console.log('✅✅ 权限检查通过，可以发布！');
      return { canPost: true, plan };
    }

    console.log('❌ 未知套餐类型：', plan.type);
    return { 
      canPost: false, 
      reason: "套餐类型无效",
      needUpgrade: true 
    };
  } catch (error) {
    console.error('❌ 检查套餐失败：', error);
    return { canPost: false, reason: "检查套餐失败" };
  }
}

export async function canSearchPeople(userId) {
  if (!userId) return { canSearch: false, reason: "请先登录" };

  try {
    const planRef = ref(db, `plans/${userId}`);
    const snapshot = await get(planRef);

    if (!snapshot.exists()) {
      await set(planRef, {
        type: "free",
        expiryDate: null,
        createdAt: Date.now(),
      });
      return { 
        canSearch: false, 
        reason: "搜索人才功能仅限高级雇主使用",
        needUpgrade: true,
        currentPlan: "free"
      };
    }

    const plan = snapshot.val();

    if (plan.type === "yearly") {
      if (plan.expiryDate && Date.now() > plan.expiryDate) {
        await set(planRef, {
          type: "free",
          expiryDate: null,
          createdAt: plan.createdAt || Date.now(),
          downgraded: true,
          downgradedAt: Date.now(),
          previousType: plan.type,
        });
        return { 
          canSearch: false, 
          reason: "订阅已过期，请续费高级雇主套餐",
          needUpgrade: true,
          currentPlan: "free"
        };
      }
      return { canSearch: true, plan };
    }

    return { 
      canSearch: false, 
      reason: "搜索人才功能仅限高级雇主（年度订阅）使用",
      needUpgrade: true,
      currentPlan: plan.type
    };
  } catch (error) {
    console.error("Check search permission error:", error);
    return { canSearch: false, reason: "检查权限失败" };
  }
}

export async function purchasePlan(userId, planType) {
  if (!userId) return { success: false, error: "请先登录" };

  try {
    const planRef = ref(db, `plans/${userId}`);
    const now = Date.now();

    let newPlan;
    let amount;

    switch (planType) {
      case "monthly":
        newPlan = {
          type: "monthly",
          expiryDate: now + (30 * 24 * 60 * 60 * 1000),
          purchasedAt: now,
          createdAt: now,
        };
        amount = 20;
        break;

      case "yearly":
        newPlan = {
          type: "yearly",
          expiryDate: now + (365 * 24 * 60 * 60 * 1000),
          purchasedAt: now,
          createdAt: now,
        };
        amount = 200;
        break;

      default:
        return { success: false, error: "无效的套餐类型" };
    }

    await set(planRef, newPlan);

    const historyRef = ref(db, `purchase_history/${userId}/${now}`);
    await set(historyRef, {
      planType,
      amount,
      timestamp: now,
      expiryDate: newPlan.expiryDate,
    });

    return { success: true, plan: newPlan };
  } catch (error) {
    console.error("Purchase plan error:", error);
    return { success: false, error: "购买失败，请重试" };
  }
}

export function getPlanDisplayName(planType, lang = "zh") {
  const names = {
    free: { zh: "免费会员", en: "Free Member" },
    monthly: { zh: "基础雇主", en: "Basic Employer" },
    yearly: { zh: "高级雇主", en: "Premium Employer" },
  };
  return names[planType]?.[lang] || planType;
}

export function getPlanFeatures(planType, lang = "zh") {
  const features = {
    free: {
      zh: ["浏览所有职位", "申请职位", "创建个人资料"],
      en: ["Browse all jobs", "Apply for jobs", "Create profile"],
    },
    monthly: {
      zh: ["无限发布职位", "30天有效期", "职位管理", "查看申请者"],
      en: ["Unlimited job posts", "30 days validity", "Job management", "View applicants"],
    },
    yearly: {
      zh: ["无限发布职位", "365天有效期", "职位管理", "查看申请者", "主动搜索人才", "优先展示"],
      en: ["Unlimited job posts", "365 days validity", "Job management", "View applicants", "Search talents", "Priority listing"],
    },
  };
  return features[planType]?.[lang] || [];
}