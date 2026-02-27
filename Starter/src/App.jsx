// src/App.jsx
import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuthState } from "./lib/useAuthState";
import { auth } from "./lib/firebase";
import { useLanguage } from "./lib/i18n";

export default function App() {
  const { user, loading } = useAuthState();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  // 主题（light / dark）
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("fastjob-theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("fastjob-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function toggleLang() {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  }

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      <header
        className="card"
        style={{
          margin: 24,
          marginBottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 16,
        }}
      >
        {/* 左侧：Logo + 导航 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link
            to="/"
            style={{
              fontWeight: 900,
              fontSize: 24,
              color: "var(--primary)",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            {t("nav_brand")}
          </Link>

          <nav className="nav">
            <NavLink to="/jobs" label={t("nav_jobs")} active={isActive("/jobs")} />
            <NavLink
              to="/employer"
              label={t("nav_employer")}
              active={isActive("/employer")}
            />
            <NavLink
              to="/employer/post"
              label={t("nav_postJob")}
              active={isActive("/employer/post")}
            />
            <NavLink
              to="/dashboard"
              label={t("nav_dashboard")}
              active={isActive("/dashboard")}
            />
            <NavLink
              to="/profile"
              label={t("nav_profile")}
              active={isActive("/profile")}
            />
          </nav>
        </div>

        {/* 右侧：语言切换 + 主题切换 + 登录状态 */}
        <div className="nav">
          {/* 语言切换按钮 */}
          <button
            type="button"
            onClick={toggleLang}
            style={{
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "transparent",
              padding: "6px 12px",
              fontSize: 13,
              cursor: "pointer",
              color: "var(--muted)",
            }}
          >
            {lang === "zh" ? "中文" : "English"}
          </button>

          {/* 深浅色切换 */}
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              borderRadius: 999,
              border: "none",
              padding: "6px 12px",
              cursor: "pointer",
              background:
                theme === "light" ? "var(--primary-light)" : "#020617",
              color: theme === "light" ? "var(--primary-on-light)" : "#f9fafb",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "999px",
                background:
                  theme === "light" ? "var(--primary)" : "#facc15",
              }}
            />
            {theme === "light" ? t("theme_light") : t("theme_dark")}
          </button>

          {/* 登录状态 */}
          {loading ? (
            <span style={{ fontSize: 14 }}>Loading...</span>
          ) : user ? (
            <>
              <span style={{ fontSize: 14 }}>
                {t("nav_hi")},{" "}
                <span style={{ fontWeight: 500 }}>{user.email}</span>
              </span>
              <button
                className="btn"
                onClick={() => auth.signOut()}
                style={{ paddingInline: 18 }}
              >
                {t("nav_signOut")}
              </button>
            </>
          ) : (
            <Link to="/login" className="btn">
              {t("nav_signIn")}
            </Link>
          )}
        </div>
      </header>

      <main style={{ paddingBottom: 40 }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

/** 小的 NavLink 组件，纯粹为了让上面的 header 更干净一点 */
function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 14,
        color: active ? "var(--primary)" : "var(--muted)",
        fontWeight: active ? 600 : 400,
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );
}
