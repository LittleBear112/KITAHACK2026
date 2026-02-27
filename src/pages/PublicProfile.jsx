// src/pages/PublicProfile.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebase";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../lib/i18n";
import { useAuthState } from "../lib/useAuthState";

// ----- helpers: avatar ring + role badge -----
function getAvatarRingStyle(role) {
  const gradientEmployer =
    "conic-gradient(from 180deg at 50% 50%, #f97316, #fb923c, #f97316)";
  const gradientEmployee =
    "conic-gradient(from 180deg at 50% 50%, #0ea5e9, #22c55e, #0ea5e9)";

  return {
    width: 160,
    height: 160,
    borderRadius: "999px",
    padding: 4,
    background:
      role === "employer" ? gradientEmployer : gradientEmployee,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

function getRoleBadge(role, t) {
  if (role === "employer") {
    return {
      label: t("profile.role.employer") || "雇主",
      bg: "rgba(248,113,113,0.15)",
      color: "#fb923c",
    };
  }
  if (role === "employee") {
    return {
      label: t("profile.role.employee") || "求职者",
      bg: "rgba(56,189,248,0.18)",
      color: "#38bdf8",
    };
  }
  return {
    label: t("profile.role.user") || "用户",
    bg: "rgba(148,163,184,0.15)",
    color: "#e5e7eb",
  };
}

export default function PublicProfile() {
  const { uid } = useParams();
  const { user } = useAuthState();
  const { t } = useLanguage();

  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);

  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  const [viewerIndex, setViewerIndex] = useState(null);

  // ------- load profile -------
  useEffect(() => {
    if (!uid) return;
    const profileRef = ref(db, "profiles/" + uid);
    const unsub = onValue(
      profileRef,
      (snap) => {
        setProfile(snap.val() || null);
        setProfileLoading(false);
      },
      () => {
        setProfile(null);
        setProfileLoading(false);
      }
    );
    return () => unsub();
  }, [uid]);

  // ------- load posts (作品 / 工作照) -------
  useEffect(() => {
    if (!uid) return;
    const postsRef = ref(db, "profile_posts/" + uid);
    const unsub = onValue(
      postsRef,
      (snap) => {
        if (!snap.exists()) {
          setPosts([]);
          setPostsLoading(false);
          setViewerIndex(null);
          return;
        }
        const list = Object.entries(snap.val())
          .map(([id, v]) => ({ id, ...v }))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setPosts(list);
        setPostsLoading(false);
        if (viewerIndex != null && viewerIndex >= list.length) {
          setViewerIndex(list.length - 1);
        }
      },
      () => {
        setPosts([]);
        setPostsLoading(false);
      }
    );
    return () => unsub();
  }, [uid, viewerIndex]);

  // ------- basic derived info -------
  const uidStr = uid || "";
  const shortUid =
    uidStr.length > 8
      ? `${uidStr.slice(0, 4)}…${uidStr.slice(-4)}`
      : uidStr || "user";

  const username =
    profile?.username?.trim() || shortUid; // 显示 @username
  const displayName = profile?.name?.trim() || username;

  const initials =
    displayName
      .split(/[.\s-_]+/)
      .filter(Boolean)
      .map((s) => s[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

  const role = profile?.role || "user";
  const roleBadge = getRoleBadge(role, t);

  const isOwn = user && user.uid === uid;

  // 作品查看器
  const hasViewer =
    viewerIndex != null && viewerIndex >= 0 && viewerIndex < posts.length;
  const viewerPost = hasViewer ? posts[viewerIndex] : null;

  function openViewer(idx) {
    if (idx < 0 || idx >= posts.length) return;
    setViewerIndex(idx);
  }
  function closeViewer() {
    setViewerIndex(null);
  }
  function goPrev() {
    if (!hasViewer) return;
    if (viewerIndex > 0) setViewerIndex(viewerIndex - 1);
  }
  function goNext() {
    if (!hasViewer) return;
    if (viewerIndex < posts.length - 1) setViewerIndex(viewerIndex + 1);
  }

  // ------- 联系与分享 -------
  function openWhatsApp() {
    if (!profile || !profile.phone) {
      alert("对方还没有填写联系电话。");
      return;
    }
    const raw = profile.phone.replace(/\D/g, "");
    const phoneNumber = raw.startsWith("6") ? raw : "60" + raw; // 简单处理成 +60…
    const text =
      role === "employer"
        ? "你好，我是在 FastJob 看到你的招聘信息，想了解一下岗位详情。"
        : "你好，我是在 FastJob 看到你的个人资料，想和你聊聊工作机会。";

    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      encodeURIComponent(text);

    window.open(url, "_blank", "noopener");
  }

  async function shareProfile() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: displayName + " - FastJob",
          text: "这是我的 FastJob 名片，欢迎联系我。",
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("链接已复制，可以发给朋友或老板啦。");
      } else {
        alert("当前浏览器不支持一键分享，你可以手动复制地址栏链接。");
      }
    } catch {
      // 用户取消分享就忽略
    }
  }

  // 占位：评分 / 出勤率
  const ratingScore = 5.0;
  const attendanceRate = "98%";

  return (
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "24px 16px 40px",
      }}
    >
      {/* top bar */}
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <Link
          to="/people"
          style={{
            fontSize: 13,
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          ← {t("publicProfile_back") || "返回用户列表"}
        </Link>

        {isOwn && (
          <Link
            to="/profile"
            style={{
              fontSize: 13,
              color: "var(--primary)",
              textDecoration: "none",
            }}
          >
            {t("publicProfile_editOwn") || "编辑我的资料"}
          </Link>
        )}
      </div>

      {/* header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          gap: 24,
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        {/* Avatar */}
        <div style={getAvatarRingStyle(role)}>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "999px",
              backgroundColor: "#020617",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            {initials}
          </div>
        </div>

        {/* Info + stats + actions */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>@{username}</h2>

            <span
              style={{
                padding: "4px 10px",
                borderRadius: 999,
                fontSize: 12,
                background: roleBadge.bg,
                color: roleBadge.color,
                border: `1px solid ${roleBadge.color}33`,
              }}
            >
              {roleBadge.label}
            </span>

            {isOwn && (
              <span
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                }}
              >
                这是别人看到的你的公开名片。
              </span>
            )}
          </div>

          {/* 职业化的三个指标 */}
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 13,
              marginBottom: 8,
              flexWrap: "wrap",
            }}
          >
            <span>
              ⭐ <strong>{ratingScore.toFixed(1)}</strong> 信誉评分
            </span>
            <span>
              ⏱ <strong>{attendanceRate}</strong> 准时出勤率
            </span>
            <span>📍 {profile?.city || "城市未填写"}</span>
          </div>

          {/* description */}
          <div style={{ fontSize: 14, lineHeight: 1.4, marginBottom: 12 }}>
            {profileLoading && <span>{t("profile.loading")}</span>}
            {!profileLoading && !profile && (
              <span style={{ color: "var(--muted)" }}>
                {t("publicProfile_noProfile") ||
                  "这个用户还没有填写个人资料。"}
              </span>
            )}

            {!profileLoading && profile && (
              <>
                {displayName && (
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>
                    {displayName}
                  </div>
                )}
                {profile.headline && (
                  <div style={{ marginBottom: 2 }}>
                    {profile.headline}
                  </div>
                )}
                {profile.about && (
                  <div style={{ whiteSpace: "pre-line" }}>
                    {profile.about}
                  </div>
                )}
              </>
            )}
          </div>

          {/* 行动按钮：WhatsApp 联系 + 分享名片 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <button type="button" className="btn" onClick={openWhatsApp}>
              💬 WhatsApp 联系
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={shareProfile}
              style={{ fontSize: 13 }}
            >
              📄 分享名片
            </button>
          </div>
        </div>
      </div>

      {/* posts / 工作照 */}
      <div className="card">
        <h3 style={{ marginTop: 0, marginBottom: 8 }}>作品 / 工作照</h3>

        {postsLoading && (
          <p className="muted">
            {t("publicProfile_loadingPosts") || "载入中…"}
          </p>
        )}

        {!postsLoading && posts.length === 0 && (
          <p className="muted">
            {t("publicProfile_noPosts") || "还没有上传任何作品或工作照。"}
          </p>
        )}

        {!postsLoading && posts.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {posts.map((post, idx) => (
              <button
                key={post.id}
                type="button"
                onClick={() => openViewer(idx)}
                style={{
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "transparent",
                }}
              >
                <img
                  src={post.imageUrl || post.url}
                  alt={post.caption || ""}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 大图查看器 */}
      {hasViewer && viewerPost && (
        <div
          onClick={closeViewer}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 40,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 18,
              overflow: "hidden",
              background: "#020617",
              position: "relative",
            }}
          >
            <img
              src={viewerPost.imageUrl || viewerPost.url}
              alt={viewerPost.caption || ""}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "block",
                objectFit: "contain",
              }}
            />

            {/* 左右切换 */}
            {posts.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    border: "none",
                    background: "rgba(15,23,42,0.75)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    border: "none",
                    background: "rgba(15,23,42,0.75)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  ›
                </button>
              </>
            )}

            {/* 关闭按钮 */}
            <button
              type="button"
              onClick={closeViewer}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 28,
                height: 28,
                borderRadius: 999,
                border: "none",
                background: "rgba(15,23,42,0.8)",
                color: "#fff",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
