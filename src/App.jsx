// src/App.jsx - ORIGINAL VERSION (NO CENTERED MODE)
import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuthState } from "./lib/useAuthState";
import { auth } from "./lib/firebase";
import { useLanguage } from "./lib/i18n";
import Footer from "./components/Footer";

export default function App() {
  const { user, loading } = useAuthState();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const tf = (key, zh, en) => {
    const v = t(key);
    if (v && v !== key) return v;
    return lang === "zh" ? zh : en;
  };

  // Theme (light / dark)
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("fastjob-theme");
    return saved === "dark" ? "dark" : "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("fastjob-theme", theme);
    }
  }, [theme]);

  function toggleLang() {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const isActive = (pathPrefix) => location.pathname.startsWith(pathPrefix);

  const initials = user?.email?.[0]?.toUpperCase() || "U";

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(16px)",
          background:
            "linear-gradient(to bottom,rgba(15,23,42,0.95),rgba(15,23,42,0.85))",
          borderBottom: "1px solid rgba(148,163,184,0.35)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 12,
            paddingBottom: 12,
            gap: 12,
          }}
        >
          {/* Left: logo + nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              style={{
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--primary)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {t("nav_brand")}
            </Link>

            <nav
              className="nav"
              style={{
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <NavLink
                to="/jobs"
                label={t("nav_jobs")}
                active={isActive("/jobs")}
              />
              <NavLink
                to="/people"
                label={t("nav_people")}
                active={isActive("/people")}
              />
              {user && (
                <NavLink
                  to="/dashboard"
                  label={t("nav_dashboard")}
                  active={isActive("/dashboard")}
                />
              )}
            </nav>
          </div>

          {/* Right: lang / theme / user menu */}
          <div
            className="nav"
            style={{
              gap: 8,
              alignItems: "center",
            }}
          >
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLang}
              className="nav-pill-btn"
            >
              <span style={{ fontSize: 12 }}>
                🌐 {lang === "zh" ? "中文" : "English"}
              </span>
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-pill-btn"
              aria-label={
                theme === "light" ? "切换到深色模式" : "切换到浅色模式"
              }
              style={{
                width: 40,
                justifyContent: "center",
                padding: "6px 0",
              }}
            >
              {theme === "light" ? "🌙" : "🌞"}
            </button>

            {user ? (
              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => setMenuOpen((o) => !o)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    padding: "4px 8px 4px 4px",
                    cursor: "pointer",
                    background: "var(--card)",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "999px",
                      background:
                        "radial-gradient(circle at 0 0,#f97316,#4f46e5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#0b1020",
                    }}
                  >
                    {initials}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      maxWidth: 120,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      color: "var(--muted)",
                    }}
                  >
                    {user.email}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: "var(--muted)",
                    }}
                  >
                    ▾
                  </span>
                </button>

                {menuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "110%",
                      marginTop: 8,
                      minWidth: 220,
                      background: "var(--card)",
                      borderRadius: 16,
                      boxShadow: "var(--shadow-soft)",
                      border: "1px solid var(--border)",
                      padding: 8,
                      zIndex: 50,
                    }}
                  >
                    <MenuItem
                      to="/dashboard"
                      label={t("nav_dashboard")}
                      onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                      to="/profile"
                      label={t("nav_profile")}
                      onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                      to="/my-applications"
                      label={tf(
                        "nav_myApplications",
                        "我的申请",
                        "My applications"
                      )}
                      onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                      to="/employer"
                      label={t("nav_employer")}
                      onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                      to="/employer/plan"
                      label={tf(
                        "nav_employerPlan",
                        "我的套餐 / 升级",
                        "My plan / Upgrade"
                      )}
                      onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                      to="/employer/post"
                      label={t("nav_postJob")}
                      onClick={() => setMenuOpen(false)}
                    />

                    <div
                      style={{
                        borderTop: "1px solid var(--border)",
                        marginTop: 6,
                        paddingTop: 6,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpen(false);
                          auth.signOut();
                        }}
                        style={{
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          padding: "8px 10px",
                          borderRadius: 12,
                          textAlign: "left",
                          fontSize: 14,
                          cursor: "pointer",
                          color: "var(--danger)",
                        }}
                      >
                        {t("nav_signOut")}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn">
                {t("nav_signIn")}
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container" style={{ 
        flex: 1,
        paddingTop: 16, 
        paddingBottom: 24 
      }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 14,
        padding: "6px 10px",
        borderRadius: 999,
        textDecoration: "none",
        color: active ? "var(--primary)" : "var(--muted)",
        background: active ? "rgba(249,115,22,0.12)" : "transparent",
      }}
    >
      {label}
    </Link>
  );
}

function MenuItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        display: "block",
        padding: "8px 10px",
        borderRadius: 12,
        fontSize: 14,
        color: "var(--text)",
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );
}