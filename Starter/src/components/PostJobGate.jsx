// src/components/PostJobGate.jsx
import React, { useEffect, useState } from "react";
import { useAuthState } from "../lib/useAuthState";
import { useRole } from "../lib/useRole";
import { db, auth } from "../lib/firebase";
import { ref, onValue, set } from "firebase/database";
import { Link } from "react-router-dom";

export default function PostJobGate({ children }) {
  const { user, loading: authLoading } = useAuthState();
  const { employer, loaded: roleLoaded } = useRole();
  const [plan, setPlan] = useState(null);
  const [planLoading, setPlanLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user || !employer) {
      setPlan(null);
      setPlanLoading(false);
      return;
    }

    const planRef = ref(db, "plans/" + user.uid);
    const unsub = onValue(
      planRef,
      (snap) => {
        setPlan(snap.val() || null);
        setPlanLoading(false);
      },
      () => {
        setPlan(null);
        setPlanLoading(false);
      }
    );
    return () => unsub();
  }, [user, employer]);

  async function startFreeTrial() {
    if (!user) return;
    setSaving(true);
    try {
      const planRef = ref(db, "plans/" + user.uid);
      await set(planRef, {
        planType: "trial",
        credits: 3,
        subscriptionActive: false,
        subscriptionUntil: null,
        createdAt: Date.now()
      });
    } catch (err) {
      console.error(err);
      alert("无法开通试用，请稍后再试");
    } finally {
      setSaving(false);
    }
  }

  if (authLoading || !roleLoaded || (employer && planLoading)) {
    return (
      <div className="container">
        <div className="card">
          <p>Checking access...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container">
        <div className="card">
          <h2>请先登录</h2>
          <p>发布职位需要先登录账号。</p>
          <Link className="btn" to="/login">
            去登录
          </Link>
        </div>
      </div>
    );
  }

  if (!employer) {
    return (
      <div className="container">
        <div className="card">
          <h2>雇主权限需要开通</h2>
          <p style={{ marginTop: 8 }}>
            当前账号是 <strong>求职者</strong> 身份，不能发布职位。
          </p>
          <p style={{ marginTop: 8 }}>
            管理员可以在数据库 <code>/profiles/{auth.currentUser.uid}</code> 中
            把你的 <code>role</code> 改成 <code>"employer"</code>。
          </p>
          <Link to="/dashboard" className="btn" style={{ marginTop: 16 }}>
            返回仪表盘
          </Link>
        </div>
      </div>
    );
  }

  // Employer but no plan yet -> explain free trial
  if (!plan) {
    return (
      <div className="container">
        <div className="card">
          <h2>开通雇主套餐</h2>
          <p style={{ marginTop: 8 }}>
            新雇主可获得 <strong>3 次免费发布职位</strong>（试用期）。
          </p>
          <p style={{ marginTop: 8 }}>
            之后你可以选择：
          </p>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            <li>💠 每帖付费（Per Post）– 例如 RM X / 帖</li>
            <li>💠 每月套餐（Monthly）– 例如 RM Y / 月，不限发布</li>
          </ul>
          <p style={{ marginTop: 8, fontSize: 13, color: "var(--muted)" }}>
            当前 Demo 版本不接真正支付，只是模拟计费逻辑。
          </p>

          <button
            className="btn"
            onClick={startFreeTrial}
            disabled={saving}
            style={{ marginTop: 16 }}
          >
            {saving ? "开通中..." : "开始 3 次免费试用"}
          </button>
        </div>
      </div>
    );
  }

  // Plan exists – show summary and allow posting
  const now = Date.now();
  const hasSub =
    plan.subscriptionActive &&
    (!plan.subscriptionUntil || plan.subscriptionUntil > now);

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <h3>雇主套餐状态</h3>
        <p style={{ marginTop: 6 }}>
          当前套餐：{" "}
          <strong>
            {plan.planType === "trial"
              ? "试用（3 次免费发布）"
              : plan.planType === "per_post"
              ? "按帖计费"
              : plan.planType === "monthly"
              ? "月度套餐"
              : "未设置"}
          </strong>
        </p>
        <p style={{ marginTop: 4 }}>
          剩余发布次数（credits）：{" "}
          <strong>{plan.credits != null ? plan.credits : 0}</strong>
        </p>
        {hasSub && (
          <p style={{ marginTop: 4 }}>
            月度套餐：<strong>已激活</strong>
          </p>
        )}
      </div>

      {/* 真正的发布表单在 children 里 */}
      {children}
    </div>
  );
}
