// src/pages/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../lib/useAuthState";

function FeatureCard({ icon, title, text }) {
  return (
    <div
      style={{
        borderRadius: 22,
        padding: 18,
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
      <h3
        style={{
          margin: "0 0 4px",
          fontSize: 16,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.6,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function Landing() {
  const { user } = useAuthState();
  const isLoggedIn = !!user;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 0 0, rgba(249,115,22,0.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.18), transparent 55%), var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* ===== 顶部导航 ===== */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.4), rgba(15,23,42,0))",
          borderBottom: "1px solid rgba(148,163,184,0.18)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                background:
                  "radial-gradient(circle at 0 0,#fed7aa,#f97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0b1020",
                fontWeight: 800,
                fontSize: 18,
                boxShadow: "0 10px 28px rgba(249,115,22,0.75)",
              }}
            >
              F
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: 0.04,
              }}
            >
              FastJob
            </div>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 14,
            }}
          >
            <Link
              to="/jobs"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              找工作
            </Link>
            <Link
              to={isLoggedIn ? "/employer" : "/login"}
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              招人才
            </Link>

            <div
              style={{
                width: 1,
                height: 20,
                background: "rgba(148,163,184,0.35)",
              }}
            />

            {/* 右侧按钮 */}
            <Link to={isLoggedIn ? "/employer/post" : "/login"}>
              <button
                type="button"
                className="btn-ghost"
                style={{
                  padding: "7px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  border: "1px solid var(--border)",
                  background: "rgba(15,23,42,0.75)",
                }}
              >
                + 发布职位
              </button>
            </Link>

            <Link to={isLoggedIn ? "/dashboard" : "/login"}>
              <button
                className="btn"
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 14,
                }}
              >
                {isLoggedIn ? "进入平台" : "登录 / 注册"}
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== 主体 ===== */}
      <main>
        {/* ===== HERO 区 ===== */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "40px 16px 64px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* 左侧文案 */}
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              MALAYSIA HOURLY JOBS
            </p>
            <h1
              style={{
                margin: "10px 0 0",
                fontSize: 40,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              连接{" "}
              <span style={{ color: "var(--primary)" }}>机会</span> 与{" "}
              <span style={{ color: "var(--primary)" }}>人才</span>
              ，专注小时工与兼职。
            </h1>
            <p
              style={{
                marginTop: 18,
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 520,
                color: "var(--muted)",
              }}
            >
              FastJob 为学生、打工族和中小商家打造本地用工平台。
              以「按小时薪资 + 附近距离」为核心，一键 WhatsApp 沟通，
              让找工和招人都更直接、更省时间。
            </p>

            {/* 关键卖点 */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                fontSize: 12,
              }}
            >
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(34,197,94,0.1)",
                  color: "#bbf7d0",
                  border: "1px solid rgba(34,197,94,0.35)",
                }}
              >
                ⚡ 极速上岗 · 简历免填
              </span>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(59,130,246,0.12)",
                  color: "#bfdbfe",
                  border: "1px solid rgba(59,130,246,0.45)",
                }}
              >
                📍 就近推荐 · 节省路费
              </span>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(248,250,252,0.05)",
                  color: "var(--muted)",
                  border: "1px solid rgba(148,163,184,0.4)",
                }}
              >
                💬 老板直联 · 一键联系
              </span>
            </div>

            {/* 主 CTA 按钮 */}
            <div
              style={{
                marginTop: 26,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Link to="/jobs">
                <button
                  className="btn"
                  style={{
                    padding: "12px 20px",
                    borderRadius: 999,
                    fontSize: 15,
                  }}
                >
                  🔍 立即找工作
                </button>
              </Link>

              <Link to={isLoggedIn ? "/employer" : "/login"}>
                <button
                  type="button"
                  style={{
                    padding: "11px 18px",
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    fontSize: 14,
                    cursor: "pointer",
                    color: "var(--text)",
                  }}
                >
                  💼 我是雇主
                </button>
              </Link>
            </div>

            <p
              style={{
                marginTop: 14,
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              不收取求职者费用 · 对雇主提供灵活套餐，适合餐饮、零售、补习中心等场景。
            </p>
          </div>

          {/* 右侧：双模式玻璃卡片 */}
          <div
            style={{
              position: "relative",
              padding: 22,
              borderRadius: 32,
              background:
                "linear-gradient(135deg, rgba(15,23,42,1), rgba(30,64,175,0.96))",
              boxShadow: "0 28px 70px rgba(15,23,42,0.9)",
              color: "#e5e7eb",
              overflow: "hidden",
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "#93c5fd",
                }}
              >
                DUAL EXPERIENCE
              </p>
              <h2
                style={{
                  margin: "6px 0 0",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                为求职者 & 雇主设计的双轨体验
              </h2>
              <p
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  color: "#cbd5f5",
                }}
              >
                选择你的模式，系统会自动优化推荐与工具。
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 12,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* 求职者模式 */}
              <Link
                to="/jobs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    borderRadius: 18,
                    padding: 12,
                    background:
                      "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(248,250,252,0.02))",
                    border: "1px solid rgba(248,250,252,0.12)",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background:
                        "radial-gradient(circle at 0 0,#fed7aa,#f97316)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    👩‍🎓
                  </div>
                  <div style={{ fontSize: 13, flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>求职者模式</div>
                    <div style={{ color: "#d1d5db", marginTop: 2 }}>
                      推荐附近兼职、小时工、实习岗位，支持手机一键申请。
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 12,
                        color: "#fde68a",
                      }}
                    >
                      立即进入职位列表 →
                    </div>
                  </div>
                </div>
              </Link>

              {/* 雇主模式 */}
              <Link
                to={isLoggedIn ? "/employer/post" : "/login"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    borderRadius: 18,
                    padding: 12,
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(15,23,42,0.9))",
                    border: "1px solid rgba(148,163,184,0.55)",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background:
                        "radial-gradient(circle at 0 0,#bfdbfe,#1d4ed8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    🧑‍💼
                  </div>
                  <div style={{ fontSize: 13, flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>雇主模式</div>
                    <div style={{ color: "#d1d5db", marginTop: 2 }}>
                      发布职位、查看申请、标记已录用，让你的兼职招聘像看
                      Kanban 一样清晰。
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 12,
                        color: "#bfdbfe",
                      }}
                    >
                      {isLoggedIn ? "立即发布新职位 →" : "登录后开始发布 →"}
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 背景光晕 */}
            <div
              style={{
                position: "absolute",
                right: -40,
                bottom: -40,
                width: 160,
                height: 160,
                borderRadius: "999px",
                background:
                  "radial-gradient(circle,#f97316,transparent)",
                opacity: 0.45,
              }}
            />
          </div>
        </section>

        {/* ===== 核心卖点区 ===== */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 16px 64px",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: 22,
            }}
          >
            为什么选择 FastJob？
          </h2>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: 14,
              color: "var(--muted)",
            }}
          >
            针对马来西亚本地的学生、打工人和中小商家打造，真正适合小时工与兼职的招聘平台。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <FeatureCard
              icon="⚡"
              title="极速上岗"
              text="没有复杂的长篇简历。求职者只需姓名和手机号码即可申请，老板可以直接电话或 WhatsApp 联系，最快当天上岗。"
            />
            <FeatureCard
              icon="📍"
              title="就在你附近"
              text="基于地点与区域推荐职位，优先显示离你最近的机会。餐饮、零售、补习班等本地工作一目了然。"
            />
            <FeatureCard
              icon="💬"
              title="老板直聘"
              text="告别投简历石沉大海。雇主可以在后台快速查看申请人信息，使用自己的 WhatsApp 或电话直接约面试。"
            />
          </div>
        </section>

        {/* ===== 底部 CTA ===== */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 16px 72px",
          }}
        >
          <div
            className="card"
            style={{
              borderRadius: 24,
              padding: 24,
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(37,99,235,0.9))",
              border: "1px solid rgba(191,219,254,0.5)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 22,
                  color: "#f9fafb",
                }}
              >
                准备好开始你的下一份工作了吗？
              </h2>
              <p
                style={{
                  marginTop: 6,
                  marginBottom: 0,
                  fontSize: 14,
                  color: "#e5e7eb",
                  maxWidth: 480,
                }}
              >
                立即创建帐号，浏览海量本地兼职与小时工职位；
                如果你是老板，也可以在几分钟内发布第一个职位。
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <Link to={isLoggedIn ? "/jobs" : "/register"}>
                <button
                  className="btn"
                  style={{
                    padding: "10px 18px",
                    borderRadius: 999,
                    fontSize: 14,
                    background: "#f97316",
                    border: "none",
                  }}
                >
                  {isLoggedIn ? "继续浏览职位" : "免费注册帐号"}
                </button>
              </Link>
              <Link to={isLoggedIn ? "/employer" : "/login"}>
                <button
                  type="button"
                  className="btn-ghost"
                  style={{
                    padding: "9px 16px",
                    borderRadius: 999,
                    fontSize: 13,
                    border: "1px solid rgba(248,250,252,0.6)",
                    background: "transparent",
                    color: "#e5e7eb",
                  }}
                >
                  我是雇主，要招人
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
