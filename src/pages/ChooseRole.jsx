// src/pages/ChooseRole.jsx
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { ref, update } from "firebase/database";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";

function RoleCard({
  emoji,
  title,
  description,
  accentColor,
  buttonLabel,
  onClick,
  disabled,
}) {
  const buttonBg = disabled ? "#9ca3af" : accentColor;
  const buttonShadow = disabled
    ? "none"
    : "0 10px 25px rgba(15,23,42,0.35)";

  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: 24,
        padding: 24,
        boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
        border: "1px solid rgba(148,163,184,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 999,
          background: `${accentColor}1A`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
          boxShadow: "0 15px 30px rgba(15,23,42,0.16)",
        }}
      >
        <span aria-hidden>{emoji}</span>
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          {description}
        </p>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        style={{
          marginTop: 8,
          width: "100%",
          height: 50,
          borderRadius: 14,
          border: "none",
          background: buttonBg,
          color: "#ffffff",
          fontSize: 16,
          fontWeight: 600,
          cursor: disabled ? "default" : "pointer",
          transition:
            "transform 0.05s ease, box-shadow 0.1s ease, background 0.15s ease",
          boxShadow: buttonShadow,
        }}
        onMouseDown={(e) => {
          if (disabled) return;
          e.currentTarget.style.transform = "scale(0.97)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default function ChooseRole() {
  const { user, loading } = useAuthState();
  const navigate = useNavigate();
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState(null);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
        }}
      >
        <p style={{ color: "var(--muted)" }}>Loading…</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  async function handleSelect(role) {
    if (saving) return;
    setSaving(true);
    setError(null);

    try {
      const profileRef = ref(db, "profiles/" + user.uid);
      await update(profileRef, {
        role,
        updatedAt: Date.now(),
      });
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error(err);
      setError("保存失败，请稍后再试。");
    } finally {
      setSaving(false);
    }
  }

  const username =
    user.email?.split("@")[0] || user.displayName || "FastJob 用户";

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left,#ffe4c7 0,#fff7ed 35%,#f9fafb 70%,#eef2ff 100%)",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "#f97316",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              F
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: 0.4,
                color: "#111827",
              }}
            >
              FastJob
            </span>
          </div>

          <span
            style={{
              fontSize: 12,
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(15,23,42,0.04)",
              color: "#6b7280",
            }}
          >
            欢迎回来，{username}
          </span>
        </header>

        {/* Main copy */}
        <section>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#f97316",
              fontWeight: 600,
              margin: "0 0 8px",
            }}
          >
            CHOOSE YOUR ROLE
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 30,
              lineHeight: 1.25,
              color: "#111827",
              fontWeight: 800,
            }}
          >
            连接机会与人才之前，
            <br />
            先告诉我们你是谁。
          </h1>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: 14,
              color: "#6b7280",
              lineHeight: 1.6,
              maxWidth: 480,
            }}
          >
            请选择你在 FastJob 的主要身份。
            之后你仍然可以在「个人资料」中切换，但我们会先按照你的身份优化默认体验。
          </p>
        </section>

        {/* Card row */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          <RoleCard
            emoji="🚀"
            title="我要找工作"
            description="浏览你附近的兼职、小时工和全职职位，一键申请，快速上岗。适合学生、自由职业者和想多一份收入的你。"
            accentColor="#f97316"
            buttonLabel={saving ? "处理中…" : "开始求职"}
            onClick={() => handleSelect("employee")}
            disabled={saving}
          />

          <RoleCard
            emoji="🤝"
            title="我要招人"
            description="发布职位、管理投递、查看候选人资料，一站式搞定招聘流程。适合餐饮、零售、活动公司等需要快速补人的老板。"
            accentColor="#111827"
            buttonLabel={saving ? "处理中…" : "开始招人"}
            onClick={() => handleSelect("employer")}
            disabled={saving}
          />
        </section>

        {error && (
          <p style={{ color: "#b91c1c", fontSize: 13, margin: 0 }}>
            {error}
          </p>
        )}

        {/* Footer */}
        <footer
          style={{
            marginTop: 4,
            fontSize: 13,
            color: "#6b7280",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>已经选择过？可以随时在「个人资料」中修改身份。</span>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            style={{
              border: "none",
              background: "transparent",
              color: "#f97316",
              cursor: "pointer",
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: 2,
              padding: 0,
            }}
          >
            先去逛一逛平台 →
          </button>
        </footer>
      </div>
    </div>
  );
}
