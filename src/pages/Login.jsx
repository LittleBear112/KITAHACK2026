// src/pages/Login.jsx
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
  const [status, setStatus] = useState(null); // { type, message }
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const eyeButtonStyle = {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 16,
    opacity: 0.8,
  };

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
        className="card auth-card-grid"
        style={{
          width: "100%",
          maxWidth: 960,
          overflow: "hidden",
        }}
      >
        {/* 左侧介绍区 */}
        <div
          className="auth-hero"
          style={{
            position: "relative",
            padding: 32,
            paddingRight: 24,
            borderRight: "1px solid var(--border)",
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.16), rgba(37,99,235,0.2))",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              background:
                "radial-gradient(circle at 0 0, rgba(249,115,22,0.7), transparent 55%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.7), transparent 55%)",
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
              ⚡ 马来西亚本地小时工平台
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 30,
                lineHeight: 1.3,
              }}
            >
              回来继续搞钱吧，
              <span style={{ color: "var(--primary)" }}> 一起接更多好工</span>。
            </h1>

            <p
              style={{
                marginTop: 12,
                marginBottom: 22,
                color: "var(--muted)",
                fontSize: 14,
                maxWidth: 380,
              }}
            >
              使用一个帐号，就能浏览附近的小时工与兼职职位，
              也可以在需要时快速发布招聘信息。
            </p>
          </div>
        </div>

        {/* 右侧表单区 */}
        <div
          className="auth-form-panel"
          style={{
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
            欢迎回来 👋
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 10,
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            使用 Google 或邮箱登录你的 FastJob 帐号。
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

          {/* Google 登录按钮（玻璃风格） */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="oauth-btn"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={{ width: 22, height: 22 }}
            />
            使用 Google 一键登录
          </button>

          {/* 分隔线 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 8,
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

          {/* 邮箱 + 密码表单 */}
          <form
            onSubmit={handleEmailLogin}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
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
                className="input-glass"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
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
                密码
              </label>
              <div style={{ position: "relative" }}>
                <input
                  className="input-glass"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="请输入密码"
                  required
                  style={{ paddingRight: 40 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  style={eyeButtonStyle}
                  aria-label={showPassword ? "隐藏密码" : "显示密码"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* 记住我 + 忘记密码 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 12,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                  color: "var(--muted)",
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="remember-checkbox"
                />
                <span>记住我（在这台设备上保持登录）</span>
              </label>

              <button
                type="button"
                onClick={handleResetPassword}
                disabled={loading}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "var(--primary)",
                  cursor: "pointer",
                }}
              >
                忘记密码？
              </button>
            </div>

            <button
              type="submit"
              className="btn"
              disabled={loading}
              style={{ width: "100%", marginTop: 4 }}
            >
              {loading ? "正在登录…" : "登录"}
            </button>
          </form>

          <p
            style={{
              margin: 0,
              marginTop: 10,
              fontSize: 12,
              color: "var(--muted)",
            }}
          >
            还没有帐号？{" "}
            <Link to="/register" style={{ color: "var(--primary)" }}>
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
