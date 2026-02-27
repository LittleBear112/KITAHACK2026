// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue, push, set, remove, get } from "firebase/database";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";
import { uploadAvatar, uploadPortfolio } from "../lib/uploadHelper";

/* ===========================
   工具函数：头像环颜色
   =========================== */
function avatarRing(role) {
  return {
    width: 150,
    height: 150,
    padding: 4,
    borderRadius: "50%",
    background:
      role === "employer"
        ? "conic-gradient(#f97316, #fb923c, #f97316)"
        : "conic-gradient(#0ea5e9, #22c55e, #0ea5e9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

function getInitial(name) {
  if (!name) return "U";
  return name.trim()[0].toUpperCase();
}

/* ===========================
   Profile 主组件
   =========================== */
export default function Profile() {
  const { user } = useAuthState();

  // Profile 数据
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [form, setForm] = useState({});

  // Posts（作品集 / 工作照）
  const [posts, setPosts] = useState([]);
  const [postForm, setPostForm] = useState({ imageUrl: "", caption: "" });

  // 大图预览
  const [viewer, setViewer] = useState(null);

  // 🆕 文件上传状态
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingPost, setUploadingPost] = useState(false);
  const [postImageFile, setPostImageFile] = useState(null);

  /* ===========================
      读取 Profile 数据
     =========================== */
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const pRef = ref(db, "profiles/" + user.uid);

    onValue(
      pRef,
      (snap) => {
        const val = snap.val() || {};
        setProfile(val);
        setForm(val);
        setLoading(false);
      },
      () => setLoading(false)
    );
  }, [user]);

  /* ===========================
      读取 Posts
     =========================== */
  useEffect(() => {
    if (!user) return;
    const postsRef = ref(db, "profile_posts/" + user.uid);

    onValue(postsRef, (snap) => {
      if (!snap.exists()) {
        setPosts([]);
        return;
      }
      const arr = Object.entries(snap.val()).map(([id, v]) => ({
        id,
        ...v,
      }));
      arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setPosts(arr);
    });
  }, [user]);

  /* ===========================
      Profile 保存
     =========================== */
  async function saveProfile(e) {
    e.preventDefault();
    if (!user) return;

    try {
      await set(ref(db, "profiles/" + user.uid), {
        ...form,
        ratingScore: profile.ratingScore || 5.0,
        ratingCount: profile.ratingCount || 0,
        attendanceRate: profile.attendanceRate || 100,
        attendanceCount: profile.attendanceCount || 0,
      });

      alert("资料已更新！");
    } catch (err) {
      alert("保存失败，请稍后再试");
    }
  }

  /* ===========================
      🆕 上传头像
     =========================== */
  async function handleAvatarUpload(e) {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploadingAvatar(true);
    try {
      // 上传到 Firebase Storage
      const avatarUrl = await uploadAvatar(file, user.uid);
      
      // 更新到 Realtime Database
      await set(ref(db, `profiles/${user.uid}/photoURL`), avatarUrl);
      
      alert("头像上传成功！");
    } catch (error) {
      alert(error.message || "上传失败，请重试");
    } finally {
      setUploadingAvatar(false);
    }
  }

  /* ===========================
      🆕 添加作品图（支持文件上传）
     =========================== */
  async function addPost(e) {
    e.preventDefault();
    if (!user) return;

    // 如果选择了文件，先上传
    let imageUrl = postForm.imageUrl;
    
    if (postImageFile) {
      if (!postImageFile.type.startsWith('image/')) {
        alert("请选择图片文件");
        return;
      }

      setUploadingPost(true);
      try {
        imageUrl = await uploadPortfolio(postImageFile, user.uid);
      } catch (error) {
        alert(error.message || "图片上传失败");
        setUploadingPost(false);
        return;
      }
    }

    if (!imageUrl.trim()) {
      alert("请选择图片或填写图片链接");
      setUploadingPost(false);
      return;
    }

    try {
      const newPost = {
        imageUrl: imageUrl.trim(),
        caption: postForm.caption.trim() || "",
        createdAt: Date.now(),
      };

      await push(ref(db, `profile_posts/${user.uid}`), newPost);

      // 重置表单
      setPostForm({ imageUrl: "", caption: "" });
      setPostImageFile(null);
      
      alert("作品添加成功！");
    } catch (err) {
      alert("添加失败，请重试");
    } finally {
      setUploadingPost(false);
    }
  }

  /* ===========================
      删除作品图
     =========================== */
  async function deletePost(id) {
    if (!window.confirm("确定删除这张图？")) return;
    try {
      await remove(ref(db, "profile_posts/" + user.uid + "/" + id));
    } catch (err) {
      alert("删除失败");
    }
  }

  if (!user)
    return (
      <div className="card">
        <p>请先登录。</p>
      </div>
    );

  if (loading)
    return (
      <div className="card">
        <p>加载中...</p>
      </div>
    );

  const name = form.name || user.displayName || "用户";
  const initial = getInitial(name);

  const rating = profile.ratingScore?.toFixed(1) || "5.0";
  const attendance = profile.attendanceRate?.toFixed(0) || "100";

  /* ===========================
      页面开始渲染
     =========================== */
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 16px" }}>
      {/* 顶部个人区 */}
      <div
        className="card"
        style={{
          padding: 24,
          borderRadius: 24,
          marginBottom: 24,
          display: "flex",
          gap: 24,
        }}
      >
        {/* 🆕 头像（可上传） */}
        <div style={{ textAlign: "center" }}>
          <div style={avatarRing(profile.role || "worker")}>
            <div
              style={{
                width: 142,
                height: 142,
                borderRadius: "50%",
                background: profile.photoURL
                  ? `url(${profile.photoURL}) center/cover`
                  : "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                fontWeight: "bold",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {!profile.photoURL && initial}
              
              {/* 上传按钮覆盖层 */}
              <label
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: uploadingAvatar ? "not-allowed" : "pointer",
                  opacity: 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  disabled={uploadingAvatar}
                  style={{ display: "none" }}
                />
                <span style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
                  {uploadingAvatar ? "上传中..." : "更换头像"}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* 信息 */}
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: "0 0 6px", fontSize: 26 }}>{name}</h2>

          <p style={{ margin: "0 0 12px", color: "var(--muted)" }}>
            @{form.username || user.uid.slice(0, 6)} ·{" "}
            {form.city || "城市未填写"}
          </p>

          {/* 三项数据 */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Chip label={`⭐ ${rating}`} sub="评分" />
            <Chip label={`⏱ ${attendance}%`} sub="出勤率" />
            <Chip label={form.role || "求职者"} sub="身份" />
          </div>
        </div>
      </div>

      {/* 主体：左侧编辑、右侧作品集 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: 24,
        }}
      >
        {/* ========== 左：资料编辑 ========== */}
        <div className="card" style={{ padding: 20, borderRadius: 20 }}>
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>编辑个人资料</h3>

          <form onSubmit={saveProfile}>
            <Field label="显示名称">
              <input
                value={form.name || ""}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>

            <Field label="用户名">
              <input
                value={form.username || ""}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />
            </Field>

            <Field label="城市">
              <input
                value={form.city || ""}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </Field>

            <Field label="一句话简介">
              <input
                value={form.headline || ""}
                onChange={(e) =>
                  setForm({ ...form, headline: e.target.value })
                }
              />
            </Field>

            <Field label="详细介绍">
              <textarea
                rows={4}
                value={form.about || ""}
                onChange={(e) =>
                  setForm({ ...form, about: e.target.value })
                }
              />
            </Field>

            <h4 style={{ marginTop: 20 }}>社交链接（可选）</h4>

            <Field label="LinkedIn">
              <input
                value={form.linkedin || ""}
                onChange={(e) =>
                  setForm({ ...form, linkedin: e.target.value })
                }
              />
            </Field>

            <Field label="Instagram">
              <input
                value={form.instagram || ""}
                onChange={(e) =>
                  setForm({ ...form, instagram: e.target.value })
                }
              />
            </Field>

            <Field label="Website / 作品集链接">
              <input
                value={form.website || ""}
                onChange={(e) =>
                  setForm({ ...form, website: e.target.value })
                }
              />
            </Field>

            <button className="btn" style={{ marginTop: 20, width: "100%" }}>
              保存资料
            </button>
          </form>
        </div>

        {/* ========== 右：作品集 / 工作照 ========== */}
        <div className="card" style={{ padding: 20, borderRadius: 20 }}>
          <h3 style={{ marginTop: 0 }}>工作照 / 作品集</h3>

          <form onSubmit={addPost} style={{ marginBottom: 20 }}>
            <div style={{ marginBottom: 12 }}>
              <label
                style={{
                  display: "block",
                  marginBottom: 6,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                作品图片
              </label>
              
              {/* 🆕 文件上传按钮 - 美化版 */}
              <div style={{ marginBottom: 8 }}>
                <label
                  htmlFor="portfolio-upload"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    border: "2px dashed var(--border)",
                    borderRadius: "12px",
                    background: "rgba(249,115,22,0.05)",
                    cursor: uploadingPost ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!uploadingPost) {
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.background = "rgba(249,115,22,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "rgba(249,115,22,0.05)";
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 6 }}>🖼️</div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>
                    点击选择图片
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    支持 JPG、PNG、WebP，最大 5MB
                  </div>
                </label>
                <input
                  id="portfolio-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setPostImageFile(file);
                      // 清空 URL 输入框
                      setPostForm((prev) => ({ ...prev, imageUrl: "" }));
                    }
                  }}
                  disabled={uploadingPost}
                  style={{ display: "none" }}
                />
                {postImageFile && (
                  <div
                    style={{
                      marginTop: 6,
                      padding: "6px 10px",
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      borderRadius: 6,
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      ✅ {postImageFile.name} ({(postImageFile.size / 1024).toFixed(1)} KB)
                    </span>
                    <button
                      type="button"
                      onClick={() => setPostImageFile(null)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--danger)",
                        cursor: "pointer",
                        padding: "0 4px",
                        fontSize: 16,
                      }}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* 或者输入 URL */}
              <div style={{ textAlign: "center", margin: "8px 0", color: "var(--muted)", fontSize: 12 }}>
                或
              </div>
              
              <input
                className="input-glass"
                value={postForm.imageUrl}
                onChange={(e) => {
                  setPostForm({ ...postForm, imageUrl: e.target.value });
                  // 清空文件选择
                  setPostImageFile(null);
                }}
                placeholder="粘贴图片链接 (https://...)"
                disabled={uploadingPost || !!postImageFile}
                style={{
                  padding: "10px",
                  fontSize: "13px",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  width: "100%",
                  background: "var(--card)",
                  color: "var(--text)",
                }}
              />
            </div>

            <Field label="说明（可选）">
              <textarea
                rows={2}
                value={postForm.caption}
                onChange={(e) =>
                  setPostForm({ ...postForm, caption: e.target.value })
                }
                disabled={uploadingPost}
              />
            </Field>

            <button 
              className="btn" 
              style={{ width: "100%" }}
              disabled={uploadingPost || (!postImageFile && !postForm.imageUrl.trim())}
            >
              {uploadingPost ? "上传中..." : "添加图片"}
            </button>
          </form>

          {/* 图片网格 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: 10,
            }}
          >
            {posts.map((p) => (
              <div
                key={p.id}
                style={{
                  position: "relative",
                  paddingBottom: "100%",
                  borderRadius: 12,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={p.imageUrl}
                  onClick={() => setViewer(p)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <button
                  type="button"
                  onClick={() => deletePost(p.id)}
                  style={{
                    position: "absolute",
                    right: 6,
                    top: 6,
                    fontSize: 11,
                    padding: "3px 7px",
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  删除
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 大图预览 Modal ========== */}
      {viewer && (
        <div
          onClick={() => setViewer(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <img
            src={viewer.imageUrl}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: 16,
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ===========================
   小组件：字段容器
   =========================== */
function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ fontSize: 14, marginBottom: 4, display: "block" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

/* ===========================
   小组件：Chip 统计标签
   =========================== */
function Chip({ label, sub }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        padding: "6px 12px",
        borderRadius: 999,
      }}
    >
      <div>{label}</div>
      <div style={{ fontSize: 11, color: "var(--muted)" }}>{sub}</div>
    </div>
  );
}