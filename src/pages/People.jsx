// src/pages/People.jsx
import React, { useEffect, useState, useMemo } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebase";
import { Link } from "react-router-dom";
import { useLanguage } from "../lib/i18n";
import { useAuthState } from "../lib/useAuthState";

function getInitials(name, fallback) {
  const src = name && name.trim() ? name : fallback || "U";
  return src
    .split(/[.\s-_]+/)
    .filter(Boolean)
    .map((s) => s[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarRingStyle(role) {
  const gradientEmployer =
    "conic-gradient(from 180deg at 50% 50%, #f97316, #fb923c, #f97316)";
  const gradientEmployee =
    "conic-gradient(from 180deg at 50% 50%, #0ea5e9, #22c55e, #0ea5e9)";

  return {
    width: 56,
    height: 56,
    borderRadius: "999px",
    padding: 3,
    background: role === "employer" ? gradientEmployer : gradientEmployee,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };
}

function getRoleBadge(role) {
  if (role === "employer") {
    return {
      label: "雇主",
      bg: "rgba(248,113,113,0.15)",
      color: "#fb923c",
    };
  }
  return {
    label: "求职者",
    bg: "rgba(56,189,248,0.18)",
    color: "#38bdf8",
  };
}

export default function People() {
  const { user } = useAuthState();
  const { lang, t } = useLanguage();

  const tf = (key, zh, en) => {
    const v = t(key);
    return v && v !== key ? v : lang === "zh" ? zh : en;
  };

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all"); // all | employer | employee

  useEffect(() => {
    const profilesRef = ref(db, "profiles");
    const unsub = onValue(
      profilesRef,
      (snap) => {
        if (!snap.exists()) {
          setProfiles([]);
          setLoading(false);
          return;
        }
        const obj = snap.val() || {};
        const list = Object.entries(obj).map(([uid, v]) => ({
          uid,
          ...v,
        }));
        setProfiles(list);
        setLoading(false);
      },
      () => {
        setProfiles([]);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profiles
      .filter((p) => {
        if (!p) return false;

        if (roleFilter !== "all" && p.role !== roleFilter) {
          return false;
        }

        if (!q) return true;

        const text =
          [
            p.username,
            p.name,
            p.headline,
            p.about,
            p.city,
            p.role,
            // 只用 uid 做搜索，不在 UI 里显示
            p.uid,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase() || "";

        return text.includes(q);
      })
      .sort((a, b) => {
        if (user) {
          if (a.uid === user.uid) return -1;
          if (b.uid === user.uid) return 1;
        }
        return 0;
      });
  }, [profiles, query, roleFilter, user]);

  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 32 }}>
      {/* 顶部说明卡片 */}
      <div className="card" style={{ marginBottom: 16, borderRadius: 22 }}>
        <h2 style={{ marginTop: 0, marginBottom: 6, fontSize: 20 }}>
          {tf("people_title_talent", "人才库 / Find Talent", "Talent Pool")}
        </h2>
        <p
          style={{
            marginTop: 0,
            marginBottom: 12,
            fontSize: 14,
            color: "var(--muted)",
          }}
        >
          {tf(
            "people_subtitle_talent",
            "帮你快速找到靠谱的小时工、实习生和兼职人才。",
            "Browse talent looking for part-time, internship or full-time work."
          )}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tf(
              "people_search_placeholder",
              "按姓名 / 城市 / 技能搜索…",
              "Search by name / city / skills…"
            )}
            style={{
              flex: "1 1 220px",
              minWidth: 0,
              marginTop: 4,
            }}
          />

          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              fontSize: 12,
            }}
          >
            <button
              type="button"
              className="chip"
              onClick={() => setRoleFilter("all")}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border:
                  roleFilter === "all"
                    ? "1px solid var(--primary)"
                    : "1px solid var(--border)",
                backgroundColor:
                  roleFilter === "all"
                    ? "rgba(249,115,22,0.12)"
                    : "transparent",
              }}
            >
              {tf("people_filter_all", "全部", "All")}
            </button>
            <button
              type="button"
              className="chip"
              onClick={() => setRoleFilter("employee")}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border:
                  roleFilter === "employee"
                    ? "1px solid #38bdf8"
                    : "1px solid var(--border)",
                backgroundColor:
                  roleFilter === "employee"
                    ? "rgba(56,189,248,0.15)"
                    : "transparent",
              }}
            >
              {tf("people_filter_employee", "求职者", "Job seekers")}
            </button>
            <button
              type="button"
              className="chip"
              onClick={() => setRoleFilter("employer")}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border:
                  roleFilter === "employer"
                    ? "1px solid #fb923c"
                    : "1px solid var(--border)",
                backgroundColor:
                  roleFilter === "employer"
                    ? "rgba(248,113,113,0.15)"
                    : "transparent",
              }}
            >
              {tf("people_filter_employer", "雇主", "Employers")}
            </button>
          </div>
        </div>
      </div>

      {/* 列表 */}
      <div className="card" style={{ borderRadius: 22 }}>
        {loading && <p>{t("profile.loading")}</p>}

        {!loading && filtered.length === 0 && (
          <p style={{ color: "var(--muted)", margin: 0 }}>
            {tf("people_empty", "暂时没有符合条件的用户。", "No matching users yet.")}
          </p>
        )}

        {!loading && filtered.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {filtered.map((p) => {
              const name = p.name || p.username || "用户";
              const initials = getInitials(name, "U");
              const roleBadge = getRoleBadge(p.role);
              const headline =
                p.headline ||
                (p.role === "employer"
                  ? tf("people_headline_employer", "正在招聘", "Hiring now")
                  : tf(
                      "people_headline_employee",
                      "正在找工作",
                      "Looking for job"
                    ));

              return (
                <Link
                  key={p.uid}
                  to={`/people/${p.uid}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 10px",
                    borderRadius: 14,
                    textDecoration: "none",
                    color: "inherit",
                    border: "1px solid rgba(148,163,184,0.18)",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
                  }}
                >
                  <div style={getAvatarRingStyle(p.role)}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "999px",
                        backgroundColor: "#020617",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        fontWeight: 700,
                      }}
                    >
                      {initials}
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: 15,
                        }}
                      >
                        {name}
                      </span>
                      {p.city && (
                        <span
                          style={{
                            fontSize: 11,
                            color: "var(--muted)",
                          }}
                        >
                          {p.city}
                        </span>
                      )}
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: 999,
                          fontSize: 11,
                          background: roleBadge.bg,
                          color: roleBadge.color,
                          border: `1px solid ${roleBadge.color}33`,
                        }}
                      >
                        {roleBadge.label}
                      </span>
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: "#e5e7eb",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {headline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
