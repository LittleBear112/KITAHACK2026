// src/pages/PeopleSearch.jsx
import React, { useEffect, useMemo, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebase";
import { Link } from "react-router-dom";
import { useLanguage } from "../lib/i18n";
import { useAuthState } from "../lib/useAuthState";

export default function PeopleSearch() {
  const { user } = useAuthState();
  const { t } = useLanguage();

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

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
        const val = snap.val();
        const list = Object.entries(val).map(([uid, data]) => ({
          uid,
          ...data,
        }));
        // 让自己也在列表里（雇主可以搜索自己确认信息），如果不想可以 filter 掉 uid === user.uid
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
    const kw = keyword.trim().toLowerCase();
    if (!kw) return profiles;
    return profiles.filter((p) => {
      const text = [
        p.name || "",
        p.city || "",
        p.headline || "",
        p.role || "",
      ]
        .join(" ")
        .toLowerCase();
      return text.includes(kw);
    });
  }, [profiles, keyword]);

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>
          {t("people_title")}
        </h2>
        <p
          style={{
            marginTop: 0,
            marginBottom: 16,
            fontSize: 14,
            color: "var(--muted)",
          }}
        >
          {t("people_subtitle")}
        </p>

        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={t("people_search_placeholder")}
          style={{ width: "100%", marginTop: 4 }}
        />
      </div>

      <div className="card">
        {loading && <p>{t("profile.loading")}</p>}

        {!loading && filtered.length === 0 && (
          <p style={{ color: "var(--muted)" }}>{t("people_empty")}</p>
        )}

        {!loading && filtered.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {filtered.map((p) => {
              const displayName = p.name || p.headline || "User";
              const emailName =
                (p.email && p.email.split("@")[0]) ||
                displayName ||
                "user";

              const initials =
                displayName
                  .split(/[.\s-_]+/)
                  .filter(Boolean)
                  .map((s) => s[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2) || "U";

              const roleLabel =
                p.role === "employer"
                  ? t("profile.role.employer")
                  : p.role === "employee"
                  ? t("profile.role.employee")
                  : t("profile.role.user");

              return (
                <Link
                  key={p.uid}
                  to={`/u/${p.uid}`}
                  className="card"
                  style={{
                    textDecoration: "none",
                    padding: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "999px",
                      background:
                        "radial-gradient(circle at 0 0,#f97316,#4f46e5)",
                      padding: 3,
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "999px",
                        background: "#020617",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#e5e7eb",
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      {initials}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          color: "var(--text)",
                          fontSize: 15,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: 140,
                        }}
                      >
                        {displayName}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          padding: "2px 6px",
                          borderRadius: 999,
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {roleLabel}
                      </span>
                    </div>
                    {p.headline && (
                      <div
                        style={{
                          fontSize: 13,
                          color: "var(--muted)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          marginBottom: 2,
                        }}
                      >
                        {p.headline}
                      </div>
                    )}
                    {p.city && (
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--muted)",
                        }}
                      >
                        {p.city}
                      </div>
                    )}
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
