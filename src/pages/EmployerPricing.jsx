// src/pages/EmployerPricing.jsx - 移动端优化版
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../lib/useAuthState";
import { useLanguage } from "../lib/i18n";
import { usePlan, purchasePlan, getPlanDisplayName } from "../lib/usePlan";

export default function EmployerPricing() {
  const { user } = useAuthState();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const { plan, loading } = usePlan(user?.uid);
  
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [purchasing, setPurchasing] = useState(false);

  const tf = (zh, en) => (lang === "zh" ? zh : en);

  const handlePurchase = (planType) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setSelectedPlan(planType);
    setShowPaymentModal(true);
  };

  const confirmPayment = async () => {
    if (!selectedPlan) return;
    setPurchasing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const result = await purchasePlan(user.uid, selectedPlan);
    setPurchasing(false);
    
    if (result.success) {
      alert(tf("✅ 购买成功！", "✅ Purchase successful!"));
      setShowPaymentModal(false);
      setSelectedPlan(null);
    } else {
      alert(tf(`❌ 购买失败：${result.error}`, `❌ Purchase failed: ${result.error}`));
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>{tf("加载中...", "Loading...")}</p>
        </div>
      </div>
    );
  }

  const currentPlanType = plan?.type || 'free';

  const getDaysLeft = () => {
    if (!plan?.expiryDate) return null;
    const now = Date.now();
    const daysLeft = Math.ceil((plan.expiryDate - now) / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  const daysLeft = getDaysLeft();

  return (
    <div style={{ paddingTop: 24 }}>
      {/* 当前套餐状态卡片 - 移动端优化 */}
      {plan && currentPlanType !== 'free' && (
        <div className="card" style={{ 
          padding: "16px",
          marginBottom: 24,
          borderRadius: 16,
          border: "2px solid #f97316",
          background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(59,130,246,0.1))"
        }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            gap: 12
          }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 4 }}>
                {tf("当前套餐", "Current Plan")}
              </div>
              <div style={{ 
                fontSize: window.innerWidth < 768 ? 20 : 24, 
                fontWeight: 700, 
                marginBottom: 4,
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap"
              }}>
                <span>{getPlanDisplayName(currentPlanType, lang)}</span>
                {daysLeft !== null && (
                  <span style={{ 
                    fontSize: 12, 
                    fontWeight: 500,
                    padding: "2px 8px",
                    borderRadius: 999,
                    background: daysLeft < 7 ? "rgba(239,68,68,0.15)" : "rgba(16,185,129,0.15)",
                    color: daysLeft < 7 ? "#ef4444" : "#10b981"
                  }}>
                    {tf(`剩余 ${daysLeft} 天`, `${daysLeft} days left`)}
                  </span>
                )}
              </div>
            </div>
            {plan.expiryDate && (
              <div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  {tf("到期时间", "Expires on")}
                </div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>
                  {new Date(plan.expiryDate).toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US")}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 页面主体卡片 - 移动端优化 */}
      <div className="card" style={{ 
        padding: window.innerWidth < 768 ? "20px 16px" : 32, 
        borderRadius: window.innerWidth < 768 ? 16 : 24 
      }}>
        {/* 标题 - 移动端优化 */}
        <h1 style={{ 
          fontSize: window.innerWidth < 768 ? 22 : 28, 
          marginBottom: 8,
          lineHeight: 1.3
        }}>
          {tf("选择适合您的套餐", "Choose Your Plan")}
        </h1>
        <p style={{ 
          color: "var(--muted)", 
          marginBottom: window.innerWidth < 768 ? 24 : 32,
          fontSize: window.innerWidth < 768 ? 14 : 16
        }}>
          {tf(
            "从免费开始，随时升级到更高级的功能",
            "Start free, upgrade anytime"
          )}
        </p>

        {/* 套餐卡片 - 响应式网格 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 768 
              ? "1fr" 
              : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: window.innerWidth < 768 ? 16 : 24,
          }}
        >
          {/* 免费会员 */}
          <PlanCard
            tag={currentPlanType === "free" ? tf("当前套餐", "Current") : null}
            title={tf("免费会员", "Free Member")}
            price="RM 0"
            subtitle={tf("永久免费使用", "Free forever")}
            features={[
              tf("浏览所有职位", "Browse all jobs"),
              tf("申请职位", "Apply for jobs"),
              tf("创建个人资料", "Create profile"),
              tf("不能发布职位", "Cannot post jobs"),
              tf("不能搜索人才", "Cannot search talents"),
            ]}
            buttonLabel={currentPlanType === "free" ? tf("当前套餐", "Current") : tf("免费注册", "Sign up")}
            buttonVariant={currentPlanType === "free" ? "ghost" : "solid"}
            onPurchase={() => {}}
            isCurrent={currentPlanType === "free"}
          />

          {/* 基础雇主 */}
          <PlanCard
            tag={currentPlanType === "monthly" ? tf("当前套餐", "Current") : null}
            title={tf("基础雇主", "Basic Employer")}
            price={tf("RM 20", "RM 20")}
            period={tf("/30天", "/30 days")}
            subtitle={tf("适合偶尔招人", "For occasional hiring")}
            features={[
              tf("无限发布职位", "Unlimited job posts"),
              tf("30天有效期", "Valid for 30 days"),
              tf("职位管理", "Job management"),
              tf("查看申请者资料", "View applicants"),
              tf("不能搜索人才", "Cannot search talents"),
            ]}
            buttonLabel={currentPlanType === "monthly" ? tf("当前套餐", "Current") : tf("订阅月卡", "Subscribe")}
            buttonVariant={currentPlanType === "monthly" ? "ghost" : "solid"}
            onPurchase={() => handlePurchase("monthly")}
            isCurrent={currentPlanType === "monthly"}
          />

          {/* 高级雇主 */}
          <PlanCard
            highlight
            tag={currentPlanType === "yearly" ? tf("当前套餐", "Current") : tf("推荐", "Best Value")}
            title={tf("高级雇主", "Premium Employer")}
            price={tf("RM 200", "RM 200")}
            period={tf("/365天", "/365 days")}
            subtitle={tf("适合长期招聘", "For active hiring")}
            originalPrice={tf("RM 240", "RM 240")}
            savings={tf("节省 RM 40", "Save RM 40")}
            features={[
              tf("无限发布职位", "Unlimited job posts"),
              tf("365天有效期", "Valid for 365 days"),
              tf("职位管理", "Job management"),
              tf("查看申请者", "View applicants"),
              tf("主动搜索人才 🎯", "Search talents 🎯"),
              tf("优先展示", "Priority listing"),
            ]}
            buttonLabel={currentPlanType === "yearly" ? tf("当前套餐", "Current") : tf("订阅年卡", "Subscribe Yearly")}
            onPurchase={() => handlePurchase("yearly")}
            isCurrent={currentPlanType === "yearly"}
          />
        </div>

        {/* 底部说明 */}
        <p style={{
          marginTop: 24,
          fontSize: 11,
          color: "var(--muted)",
          lineHeight: 1.5
        }}>
          * {tf("后续版本会逐步开放智能推荐等高级功能。", "Advanced features will be rolled out in future versions.")}
        </p>
      </div>

      {/* 支付弹窗 - 移动端优化 */}
      {showPaymentModal && (
        <PaymentModal
          planType={selectedPlan}
          onConfirm={confirmPayment}
          onCancel={() => {
            setShowPaymentModal(false);
            setSelectedPlan(null);
          }}
          purchasing={purchasing}
          lang={lang}
        />
      )}
    </div>
  );
}

// 套餐卡片组件 - 移动端优化
function PlanCard({
  title,
  price,
  period,
  subtitle,
  features,
  buttonLabel,
  buttonVariant = "solid",
  tag,
  highlight,
  onPurchase,
  isCurrent,
  originalPrice,
  savings,
}) {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        position: "relative",
        borderRadius: isMobile ? 16 : 24,
        padding: isMobile ? "20px 16px" : 24,
        border: highlight ? "2px solid #f97316" : "1px solid var(--border)",
        background: highlight
          ? "linear-gradient(145deg, rgba(15,23,42,1), rgba(30,64,175,1))"
          : "var(--card)",
        boxShadow: highlight ? "0 20px 50px rgba(15,23,42,0.6)" : "none",
      }}
    >
      {/* 标签 */}
      {tag && (
        <div
          style={{
            position: "absolute",
            top: -10,
            right: isMobile ? 12 : 24,
            padding: "4px 10px",
            borderRadius: 999,
            background: "#f97316",
            color: "#0b1020",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {tag}
        </div>
      )}

      {/* 标题 */}
      <h2 style={{ 
        margin: 0, 
        marginBottom: 8, 
        fontSize: isMobile ? 18 : 20 
      }}>
        {title}
      </h2>
      
      {/* 价格 */}
      <div style={{ marginBottom: 4 }}>
        <span style={{ fontSize: isMobile ? 28 : 32, fontWeight: 700 }}>
          {price}
        </span>
        {period && (
          <span style={{ fontSize: isMobile ? 14 : 16, color: "var(--muted)" }}>
            {period}
          </span>
        )}
      </div>

      {/* 原价和节省 */}
      {originalPrice && savings && (
        <div style={{ marginBottom: 8 }}>
          <span style={{ 
            fontSize: 13, 
            color: "var(--muted)", 
            textDecoration: "line-through",
            marginRight: 8
          }}>
            {originalPrice}
          </span>
          <span style={{ fontSize: 13, color: "#10b981", fontWeight: 600 }}>
            {savings}
          </span>
        </div>
      )}
      
      {/* 副标题 */}
      <p style={{
        marginTop: 0,
        marginBottom: 16,
        fontSize: 12,
        color: "var(--muted)",
      }}>
        {subtitle}
      </p>

      {/* 功能列表 */}
      <ul style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        marginBottom: 18,
        fontSize: isMobile ? 12 : 13,
      }}>
        {features.map((f, i) => (
          <li key={i} style={{ 
            marginBottom: 6,
            paddingLeft: 0,
            color: f.includes("不能") || f.includes("Cannot") ? "var(--muted)" : "inherit",
            lineHeight: 1.4
          }}>
            {f.includes("不能") || f.includes("Cannot") ? "❌" : "✅"} {f}
          </li>
        ))}
      </ul>

      {/* 按钮 */}
      <button
        type="button"
        className={buttonVariant === "ghost" ? "btn-ghost" : "btn"}
        style={{
          width: "100%",
          marginTop: 8,
          opacity: isCurrent ? 0.7 : 1,
          cursor: isCurrent ? "default" : "pointer",
          fontSize: isMobile ? 13 : 14,
          padding: isMobile ? "10px 14px" : "10px 16px"
        }}
        onClick={!isCurrent ? onPurchase : undefined}
        disabled={isCurrent}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

// 支付弹窗 - 移动端优化
function PaymentModal({ planType, onConfirm, onCancel, purchasing, lang }) {
  const tf = (zh, en) => (lang === "zh" ? zh : en);
  const isMobile = window.innerWidth < 768;
  
  const planInfo = {
    monthly: {
      name: tf("基础雇主", "Basic Employer"),
      price: "RM 20",
      period: tf("30天", "30 days"),
    },
    yearly: {
      name: tf("高级雇主", "Premium Employer"),
      price: "RM 200",
      period: tf("365天", "365 days"),
    },
  };

  const info = planInfo[planType];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: isMobile ? 0 : 16
      }}
      onClick={onCancel}
    >
      <div
        className="card"
        style={{
          padding: isMobile ? "24px 20px" : 32,
          maxWidth: 500,
          width: isMobile ? "100%" : "90%",
          borderRadius: isMobile ? "20px 20px 0 0" : 16,
          maxHeight: isMobile ? "90vh" : "auto",
          overflowY: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ 
          fontSize: isMobile ? 20 : 24, 
          marginBottom: 8 
        }}>
          {tf("确认购买", "Confirm Purchase")}
        </h2>
        <p style={{ 
          color: "var(--muted)", 
          marginBottom: 20,
          fontSize: isMobile ? 13 : 14
        }}>
          {tf("这是模拟支付，实际不会扣款", "This is a simulated payment")}
        </p>

        <div style={{
          background: "var(--bg)",
          padding: isMobile ? 20 : 24,
          borderRadius: 12,
          marginBottom: 20,
        }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              {tf("套餐", "Plan")}
            </div>
            <div style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700 }}>
              {info.name}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              {tf("有效期", "Duration")}
            </div>
            <div style={{ fontSize: 15 }}>{info.period}</div>
          </div>
          <div style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 16,
            marginTop: 16,
          }}>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              {tf("总计", "Total")}
            </div>
            <div style={{ 
              fontSize: isMobile ? 28 : 32, 
              fontWeight: 800, 
              color: "#f97316" 
            }}>
              {info.price}
            </div>
          </div>
        </div>

        <div style={{ 
          display: "flex", 
          gap: 12,
          flexDirection: isMobile ? "column" : "row"
        }}>
          <button
            className="btn-ghost"
            style={{ 
              flex: 1,
              width: "100%"
            }}
            onClick={onCancel}
            disabled={purchasing}
          >
            {tf("取消", "Cancel")}
          </button>
          <button
            className="btn"
            style={{ 
              flex: 1,
              width: "100%"
            }}
            onClick={onConfirm}
            disabled={purchasing}
          >
            {purchasing
              ? tf("处理中...", "Processing...")
              : tf("确认支付", "Confirm Payment")}
          </button>
        </div>
      </div>
    </div>
  );
}