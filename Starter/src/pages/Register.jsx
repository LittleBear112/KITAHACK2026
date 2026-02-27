// src/pages/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { ref, set as dbSet } from "firebase/database";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState(null); // { type: "error" | "info", message: string }
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function withPersistence(fn) {
    const persistence = remember
      ? browserLocalPersistence
      : browserSessionPersistence;

    await setPersistence(auth, persistence);
    return fn();
  }

  async function createProfile(user, extra = {}) {
    const profileRef = ref(db, "profiles/" + user.uid);
    // 新用户默认是 “employee”
    await dbSet(profileRef, {
      role: "employee",
      displayName: form.name || "",
      email: user.email || "",
      createdAt: Date.now(),
      ...extra,
    });
  }

  async function handleEmailRegister(e) {
    e.preventDefault();
    setStatus(null);

    if (form.password.length < 6) {
      setStatus({
        type: "error",
        message: "密码至少需要 6 位字符。",
      });
      return;
    }
    if (form.password !== form.confirm) {
      setStatus({
        type: "error",
        message: "两次输入的密码不一致，请重新检查。",
      });
      return;
    }

    setLoading(true);
    try {
      const cred = await withPersistence(() =>
        createUserWithEmailAndPassword(auth, form.email, form.password)
      );

      await createProfile(cred.user);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      let msg = "注册失败，请稍后再试。";
      if (err.code === "auth/email-already-in-use") {
        msg = "该邮箱已注册，请直接登录。";
      } else if (err.code === "auth/invalid-email") {
        msg = "邮箱格式不正确，请检查。";
      } else if (err.code === "auth/weak-password") {
        msg = "密码太弱，请设置更复杂一点。";
      }
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleRegister() {
    setStatus(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const cred = await withPersistence(() => signInWithPopup(auth, provider));

      // 第一次用 Google 登录也当注册，用 /profiles 记录下来
      await createProfile(cred.user);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "使用 Google 注册失败，请稍后重试。",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
      }}
    >
      <div
        className="card login-card-grid"
        style={{
          width: "100%",
          maxWidth: 960,
          borderRadius: 22,
          boxShadow: "var(--shadow-soft, 0 18px 45px rgba(15,23,42,0.18))",
          padding: 0,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
        }}
      >
        {/* 左侧介绍 / 插画 */}
        <div
          className="login-hero"
          style={{
            position: "relative",
            padding: 32,
            paddingRight: 24,
            borderRight: "1px solid var(--border)",
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.12,
              background:
                "radial-gradient(circle at 0 0, rgba(249,115,22,0.65), transparent 55%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.6), transparent 55%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 999,
                padding: "4px 10px",
                fontSize: 12,
                background: "var(--primary-light)",
                color: "var(--primary-on-light)",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              🚀 新用户 3 次免费体验发布职位
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 30,
                lineHeight: 1.3,
              }}
            >
              两种身份，<span style={{ color: "var(--primary)" }}>自由切换</span>。
            </h1>

            <p
              style={{
                marginTop: 12,
                marginBottom: 22,
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              现在注册 FastJob，你可以先作为求职者浏览职位，
              之后如果需要招聘，只要联系管理员把角色修改为雇主即可。
            </p>

            <div
              style={{
                marginTop: 12,
                padding: 14,
                borderRadius: 16,
                background: "rgba(15,23,42,0.65)",
                color: "#e5e7eb",
                fontSize: 13,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "rgba(249,115,22,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                ✅
              </div>
              <div>
                <strong>注册后记得：</strong>
                <div style={{ marginTop: 4 }}>
                  先去 <span style={{ color: "var(--primary-light)" }}>Profile</span>{" "}
                  填写你的姓名、城市和技能标签，这样雇主更容易找到你。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧注册表单 */}
        <div
          style={{
            padding: 32,
            paddingLeft: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 4,
              fontSize: 22,
            }}
          >
            创建 FastJob 帐号
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 10,
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            使用邮箱注册，一个帐号即可同时用于找工作和发职位。
          </p>

          {/* 状态提示 */}
          {status && (
            <div
              style={{
                padding: 10,
                borderRadius: 12,
                marginBottom: 4,
                fontSize: 13,
                color:
                  status.type === "error" ? "var(--danger)" : "var(--text)",
                background:
                  status.type === "error"
                    ? "rgba(239,68,68,0.12)"
                    : "rgba(59,130,246,0.08)",
                border:
                  status.type === "error"
                    ? "1px solid rgba(239,68,68,0.4)"
                    : "1px solid rgba(59,130,246,0.35)",
              }}
            >
              {status.message}
            </div>
          )}

          {/* Google 注册（其实就是 Google 登录 + 创建 profile） */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            disabled={loading}
            style={{
              width: "100%",
              background: "#ffffff",
              border: "1px solid var(--border)",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontSize: 14,
            }}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={{ width: 22, height: 22 }}
            />
            使用 Google 快速注册
          </button>

          {/* 分隔线 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 4,
              marginBottom: 4,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "var(--border)",
                opacity: 0.7,
              }}
            />
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              或使用邮箱注册
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "var(--border)",
                opacity: 0.7,
              }}
            />
          </div>

          {/* 注册表单 */}
          <form
            onSubmit={handleEmailRegister}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                姓名 / 昵称
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="例如：Nevan"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                邮箱
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div style={{ marginTop: 4 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                密码
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="至少 6 位"
                required
              />
            </div>

            <div style={{ marginTop: 4 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                确认密码
              </label>
              <input
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                placeholder="再次输入密码"
                required
              />
            </div>

            <div
              style={{
                marginTop: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                fontSize: 13,
              }}
            >
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ width: 16, height: 16 }}
                />
                记住我（在这台设备上保持登录）
              </label>
            </div>

            <button
              type="submit"
              className="btn"
              disabled={loading}
              style={{
                width: "100%",
                marginTop: 10,
                background: "var(--primary)",
              }}
            >
              {loading ? "正在创建帐号…" : "注册并登录"}
            </button>
          </form>

          <p
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            已经有帐号了？{" "}
            <Link to="/login" style={{ color: "var(--primary)" }}>
              直接登录
            </Link>
            。
          </p>
        </div>
      </div>

      {/* 小屏幕：只显示右侧表单 */}
      <style>{`
        @media (max-width: 900px) {
          .login-card-grid {
            grid-template-columns: 1fr !important;
          }
          .login-hero {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
