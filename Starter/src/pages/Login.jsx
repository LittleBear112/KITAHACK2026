// src/pages/Login.jsx
// （与之前版本几乎一样，只在最底部文案里加了去 /register 的链接）
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState(null);
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

  async function handleEmailLogin(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await withPersistence(() =>
        signInWithEmailAndPassword(auth, form.email, form.password)
      );
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "邮箱或密码错误，请检查后重试。",
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setStatus(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await withPersistence(() => signInWithPopup(auth, provider));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Google 登录失败，请稍后再试。",
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword() {
    if (!form.email) {
      setStatus({
        type: "info",
        message: "请先在上方输入你要找回密码的邮箱。",
      });
      return;
    }
    setStatus(null);
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, form.email);
      setStatus({
        type: "info",
        message: "重置密码邮件已发送，请检查邮箱收件箱或垃圾箱。",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "无法发送重置邮件，请确认邮箱是否正确。",
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
        {/* 左侧插画 */}
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
              ⚡ 马来西亚最快的小时工平台
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 30,
                lineHeight: 1.3,
              }}
            >
              找工作、发招聘，
              <span style={{ color: "var(--primary)" }}> 一站搞定</span>。
            </h1>

            <p
              style={{
                marginTop: 12,
                marginBottom: 22,
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              FastJob 帮你在 3 分钟内找到合适的小时工机会，
              或者快速发布职位，管理你的候选人。
            </p>
          </div>
        </div>

        {/* 右侧登录表单 */}
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
            登录 FastJob
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 10,
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            使用 Google 或邮箱登录你的账号。
          </p>

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

          <button
            type="button"
            onClick={handleGoogleLogin}
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
            使用 Google 一键登录
          </button>

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
              或使用邮箱登录
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

          <form
            onSubmit={handleEmailLogin}
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
                placeholder="请输入密码"
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

              <button
                type="button"
                onClick={handleResetPassword}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--primary)",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                忘记密码？
              </button>
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
              {loading ? "处理中…" : "登录"}
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
            还没有帐号？{" "}
            <Link to="/register" style={{ color: "var(--primary)" }}>
              立即注册
            </Link>
            。
          </p>
        </div>
      </div>

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
