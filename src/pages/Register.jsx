// src/pages/Register.jsx - COMPLETE FILE with Terms Agreement
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
import { useLanguage } from "../lib/i18n";

export default function Register() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

  async function createProfile(user) {
    const profileRef = ref(db, "profiles/" + user.uid);
    await dbSet(profileRef, {
      role: "employee",
      displayName: form.name || "",
      email: user.email || "",
      createdAt: Date.now(),
    });
  }

  async function handleEmailRegister(e) {
    e.preventDefault();
    setStatus(null);

    if (form.password.length < 6) {
      setStatus({ 
        type: "error", 
        message: isChinese ? "密码至少需要 6 位字符。" : "Password must be at least 6 characters." 
      });
      return;
    }
    if (form.password !== form.confirm) {
      setStatus({ 
        type: "error", 
        message: isChinese ? "两次输入的密码不一致。" : "Passwords don't match." 
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
      let msg = isChinese ? "注册失败，请稍后再试。" : "Registration failed, please try again.";
      if (err.code === "auth/email-already-in-use") {
        msg = isChinese ? "该邮箱已注册，请直接登录。" : "Email already registered, please login.";
      } else if (err.code === "auth/invalid-email") {
        msg = isChinese ? "邮箱格式不正确，请检查。" : "Invalid email format.";
      } else if (err.code === "auth/weak-password") {
        msg = isChinese ? "密码太弱，请设置更复杂一点。" : "Password is too weak.";
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
      const cred = await withPersistence(() =>
        signInWithPopup(auth, provider)
      );
      await createProfile(cred.user);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: isChinese ? "Google 注册失败，请稍后再试。" : "Google signup failed.",
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
        {/* 左侧介绍 */}
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
              {isChinese ? '✨ 一次注册，同时支持找工 & 招人' : '✨ Register once, find or post jobs'}
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 30,
                lineHeight: 1.3,
              }}
            >
              {isChinese ? (
                <>创建你的 <span style={{ color: "var(--primary)" }}>OneJob</span> 帐号。</>
              ) : (
                <>Create your <span style={{ color: "var(--primary)" }}>OneJob</span> account.</>
              )}
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
              {isChinese 
                ? '用同一个帐号，你可以浏览附近的兼职与小时工职位，也可以在需要人手时快速发布招聘信息，管理候选人。'
                : 'With one account, browse nearby hourly jobs or quickly post job listings when you need help.'}
            </p>
          </div>
        </div>

        {/* 右侧表单 */}
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
            {isChinese ? '创建帐号，开始搞钱 💰' : 'Create account, start earning 💰'}
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 10,
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            {isChinese 
              ? '使用 Google 或邮箱注册，一个帐号即可同时用于找工作和发职位。'
              : 'Sign up with Google or email. One account for finding and posting jobs.'}
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

          {/* Google 注册按钮 */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            disabled={loading}
            className="oauth-btn"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={{ width: 22, height: 22 }}
            />
            {isChinese ? '使用 Google 快速注册' : 'Sign up with Google'}
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
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              {isChinese ? '或使用邮箱注册' : 'or sign up with email'}
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          {/* 邮箱注册表单 */}
          <form
            onSubmit={handleEmailRegister}
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
                {isChinese ? '姓名 / 昵称' : 'Name / Nickname'}
              </label>
              <input
                className="input-glass"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={isChinese ? "例如：Nevan" : "e.g. Nevan"}
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
                {isChinese ? '邮箱' : 'Email'}
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
                {isChinese ? '密码' : 'Password'}
              </label>
              <div style={{ position: "relative" }}>
                <input
                  className="input-glass"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder={isChinese ? "至少 6 位字母或数字" : "At least 6 characters"}
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

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                {isChinese ? '确认密码' : 'Confirm Password'}
              </label>
              <div style={{ position: "relative" }}>
                <input
                  className="input-glass"
                  name="confirm"
                  type={showConfirm ? "text" : "password"}
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder={isChinese ? "再次输入密码" : "Re-enter password"}
                  required
                  style={{ paddingRight: 40 }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  style={eyeButtonStyle}
                  aria-label={showConfirm ? "隐藏确认密码" : "显示确认密码"}
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* 记住我 */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="remember-checkbox"
              />
              {isChinese ? '在这台设备上保持登录' : 'Keep me logged in on this device'}
            </label>

            {/* Terms Agreement */}
            <div style={{ 
              fontSize: 12, 
              color: 'var(--muted)', 
              textAlign: 'center',
              lineHeight: 1.5,
              marginTop: 4,
            }}>
              {isChinese ? (
                <>
                  注册即表示您同意我们的{' '}
                  <Link to="/terms" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    用户协议
                  </Link>
                  {' '}和{' '}
                  <Link to="/disclaimer" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    免责声明
                  </Link>
                </>
              ) : (
                <>
                  By registering, you agree to our{' '}
                  <Link to="/terms" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/disclaimer" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    Disclaimer
                  </Link>
                </>
              )}
            </div>

            <button
              type="submit"
              className="btn"
              disabled={loading}
              style={{ width: "100%", marginTop: 4 }}
            >
              {loading 
                ? (isChinese ? "正在注册…" : "Signing up...") 
                : (isChinese ? "注册" : "Sign Up")}
            </button>
          </form>

          <p
            style={{
              margin: 0,
              marginTop: 10,
              fontSize: 12,
              color: "var(--muted)",
              textAlign: "center",
            }}
          >
            {isChinese ? '已经有帐号？' : 'Already have an account?'}{' '}
            <Link to="/login" style={{ color: "var(--primary)", fontWeight: 500 }}>
              {isChinese ? '直接登录' : 'Login'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}