// src/components/PostJobGate.jsx
import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuthState } from "../lib/useAuthState";
import { useRole } from "../lib/useRole";
import { canPostJob } from "../lib/usePlan";
import { useLanguage } from "../lib/i18n";

/**
 * PostJobGate - 发布职位权限门卫
 * 检查：
 * 1. 是否登录
 * 2. 是否是雇主角色
 * 3. 是否有发布职位的权限（套餐检查）
 */
export default function PostJobGate({ children }) {
  const { user, loading: authLoading } = useAuthState();
  const { role, loaded: roleLoaded } = useRole();
  const { lang } = useLanguage();
  
  const [checkingPlan, setCheckingPlan] = useState(true);
  const [planCheck, setPlanCheck] = useState(null);

  const tf = (zh, en) => (lang === "zh" ? zh : en);

  // 检查套餐权限
  useEffect(() => {
    async function checkPlan() {
      if (!user) {
        setCheckingPlan(false);
        return;
      }

      const result = await canPostJob(user.uid);
      setPlanCheck(result);
      setCheckingPlan(false);
    }

    if (user && roleLoaded && role === "employer") {
      checkPlan();
    } else if (!authLoading && !user) {
      setCheckingPlan(false);
    }
  }, [user, role, roleLoaded, authLoading]);

  // 加载中
  if (authLoading || !roleLoaded || checkingPlan) {
    return (
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="card" style={{ padding: 48, textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⏳</div>
          <p style={{ fontSize: 16, color: "var(--muted)" }}>
            {tf("检查权限中...", "Checking permissions...")}
          </p>
        </div>
      </div>
    );
  }

  // 未登录 -> 去登录页
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 不是雇主 -> 先去选角色
  if (role !== "employer") {
    return <Navigate to="/choose-role" replace />;
  }

  // 没有发布权限 -> 显示升级提示
  if (planCheck && !planCheck.canPost) {
    return <UpgradePrompt reason={planCheck.reason} currentPlan={planCheck.currentPlan} lang={lang} />;
  }

  // 通过所有检查，渲染子组件
  return <>{children}</>;
}

// 升级提示页面
function UpgradePrompt({ reason, currentPlan, lang }) {
  const tf = (zh, en) => (lang === "zh" ? zh : en);

  return (
    <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="card" style={{ 
        padding: 64, 
        textAlign: "center",
        maxWidth: 700,
        margin: "0 auto"
      }}>
        {/* 图标 */}
        <div style={{ fontSize: 80, marginBottom: 24 }}>🔒</div>
        
        {/* 标题 */}
        <h1 style={{ fontSize: 32, marginBottom: 16, fontWeight: 800 }}>
          {tf("需要升级套餐", "Upgrade Required")}
        </h1>
        
        {/* 原因 */}
        <p style={{ fontSize: 18, color: "var(--muted)", marginBottom: 32 }}>
          {reason}
        </p>

        {/* 功能说明 */}
        <div style={{ 
          background: "var(--bg)",
          padding: 32,
          borderRadius: 16,
          marginBottom: 32,
          textAlign: "left"
        }}>
          <h3 style={{ fontSize: 18, marginBottom: 16 }}>
            {tf("升级后您可以：", "After upgrading, you can:")}
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "8px 0", fontSize: 16 }}>
              ✅ {tf("无限发布职位", "Post unlimited jobs")}
            </li>
            <li style={{ padding: "8px 0", fontSize: 16 }}>
              ✅ {tf("管理所有职位", "Manage all your jobs")}
            </li>
            <li style={{ padding: "8px 0", fontSize: 16 }}>
              ✅ {tf("查看申请者资料", "View applicant profiles")}
            </li>
            <li style={{ padding: "8px 0", fontSize: 16 }}>
              ✅ {tf("与求职者沟通", "Communicate with candidates")}
            </li>
          </ul>
        </div>

        {/* 套餐对比 */}
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 16,
          marginBottom: 32
        }}>
          {/* 基础雇主 */}
          <div style={{
            padding: 24,
            border: "1px solid var(--border)",
            borderRadius: 12,
            textAlign: "center"
          }}>
            <h4 style={{ fontSize: 18, marginBottom: 8 }}>
              {tf("基础雇主", "Basic Employer")}
            </h4>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#f97316", marginBottom: 8 }}>
              RM 20
            </div>
            <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 16 }}>
              {tf("/ 30天", "/ 30 days")}
            </div>
            <Link to="/employer/plan">
              <button className="btn" style={{ width: "100%" }}>
                {tf("选择套餐", "Choose Plan")}
              </button>
            </Link>
          </div>

          {/* 高级雇主 */}
          <div style={{
            padding: 24,
            border: "2px solid #f97316",
            borderRadius: 12,
            textAlign: "center",
            background: "linear-gradient(145deg, rgba(249,115,22,0.05), rgba(59,130,246,0.05))"
          }}>
            <div style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "#f97316",
              color: "white",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 8
            }}>
              {tf("推荐", "Recommended")}
            </div>
            <h4 style={{ fontSize: 18, marginBottom: 8 }}>
              {tf("高级雇主", "Premium Employer")}
            </h4>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#f97316", marginBottom: 8 }}>
              RM 200
            </div>
            <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 4 }}>
              {tf("/ 365天", "/ 365 days")}
            </div>
            <div style={{ fontSize: 12, color: "#10b981", marginBottom: 16 }}>
              {tf("+ 搜索人才功能", "+ Search talents")}
            </div>
            <Link to="/employer/plan">
              <button className="btn" style={{ width: "100%" }}>
                {tf("选择套餐", "Choose Plan")}
              </button>
            </Link>
          </div>
        </div>

        {/* 返回按钮 */}
        <Link to="/employer/dashboard">
          <button className="btn-ghost" style={{ marginTop: 16 }}>
            {tf("← 返回控制台", "← Back to Dashboard")}
          </button>
        </Link>
      </div>
    </div>
  );
}