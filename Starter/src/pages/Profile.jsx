// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db, auth } from "../lib/firebase";
import { useLanguage } from "../lib/i18n";

export default function Profile() {
  const user = auth.currentUser;
  const { t } = useLanguage();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  const [form, setForm] = useState({
    role: "employee",
    name: "",
    phone: "",
    city: "",
    headline: "",
    about: "",
    linkedin: "",
    instagram: "",
    website: "",
  });

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const profileRef = ref(db, "profiles/" + user.uid);
    const unsub = onValue(
      profileRef,
      (snap) => {
        const val = snap.val();
        if (val) {
          setForm((prev) => ({
            ...prev,
            ...val,
          }));
        }
        setLoading(false);
      },
      () => setLoading(false)
    );

    return () => unsub();
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSave(e) {
    e.preventDefault();
    setStatus(null);

    if (!auth.currentUser) {
      setStatus({ type: "error", message: t("profile.needLogin") });
      return;
    }

    setSaving(true);
    try {
      const profileRef = ref(db, "profiles/" + auth.currentUser.uid);
      await set(profileRef, {
        role: form.role,
        name: form.name.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        headline: form.headline.trim(),
        about: form.about.trim(),
        linkedin: form.linkedin.trim(),
        instagram: form.instagram.trim(),
        website: form.website.trim(),
      });

      setStatus({ type: "success", message: t("profile.saved") });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: t("profile.saveError") });
    } finally {
      setSaving(false);
    }
  }

  const roleLabel =
    form.role === "employer"
      ? t("profile.role.employer")
      : form.role === "employee"
      ? t("profile.role.employee")
      : t("profile.role.user");

  return (
    <div className="card">
      <h2 style={{ marginTop: 0, marginBottom: 4 }}>{t("profile.title")}</h2>
      <p style={{ marginTop: 0, marginBottom: 20, color: "var(--muted)" }}>
        {t("profile.currentRole")}：<strong>{roleLabel}</strong>
      </p>

      {loading && <p>{t("profile.loading")}</p>}
      {!loading && !user && (
        <p style={{ color: "var(--danger)" }}>{t("profile.needLogin")}</p>
      )}

      {!loading && user && (
        <form onSubmit={handleSave}>
          {/* 角色切换 */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 8 }}>
              {t("profile.roleLabel")}
            </label>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({ ...prev, role: "employee" }))
                }
                className="btn"
                style={{
                  background:
                    form.role === "employee" ? "var(--primary)" : "#020617",
                  border:
                    form.role === "employee"
                      ? "none"
                      : "1px solid rgba(148,163,184,0.5)",
                }}
              >
                {t("profile.role.employee")}
              </button>
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({ ...prev, role: "employer" }))
                }
                className="btn"
                style={{
                  background:
                    form.role === "employer" ? "var(--primary)" : "#020617",
                  border:
                    form.role === "employer"
                      ? "none"
                      : "1px solid rgba(148,163,184,0.5)",
                }}
              >
                {t("profile.role.employer")}
              </button>
            </div>
          </div>

          {status && (
            <div
              style={{
                marginBottom: 16,
                padding: 12,
                borderRadius: 12,
                fontSize: 14,
                background:
                  status.type === "success"
                    ? "rgba(16,185,129,0.1)"
                    : "rgba(239,68,68,0.1)",
                color:
                  status.type === "success"
                    ? "var(--success)"
                    : "var(--danger)",
              }}
            >
              {status.message}
            </div>
          )}

          {/* 姓名 + 电话 */}
          <div className="form-grid-2">
            <div className="form-field">
              <label>{t("profile.name")}</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("profile.name")}
              />
            </div>

            <div className="form-field">
              <label>{t("profile.phone")}</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="012-3456789"
              />
            </div>
          </div>

          {/* 城市 + 一句话简介 */}
          <div className="form-grid-2" style={{ marginTop: 18 }}>
            <div className="form-field">
              <label>{t("profile.city")}</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Ipoh / KL / Penang..."
              />
            </div>

            <div className="form-field">
              <label>{t("profile.headline")}</label>
              <input
                name="headline"
                value={form.headline}
                onChange={handleChange}
                placeholder="CS Student / Frontend Dev / Part-time waiter"
              />
            </div>
          </div>

          {/* 关于我 */}
          <div className="form-field" style={{ marginTop: 24 }}>
            <label>{t("profile.about")}</label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleChange}
              placeholder={t("profile.about.placeholder")}
            />
          </div>

          {/* 社交链接 */}
          <h3 style={{ marginTop: 28, marginBottom: 12 }}>
            {t("profile.socialTitle")}
          </h3>

          <div className="form-grid-2">
            <div className="form-field">
              <label>{t("profile.linkedin")}</label>
              <input
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="https://www.linkedin.com/in/..."
              />
            </div>

            <div className="form-field">
              <label>{t("profile.instagram")}</label>
              <input
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="https://instagram.com/..."
              />
            </div>
          </div>

          <div className="form-field" style={{ marginTop: 18 }}>
            <label>{t("profile.website")}</label>
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder={t("profile.website.placeholder")}
            />
          </div>

          <div style={{ marginTop: 28 }}>
            <button
              type="submit"
              className="btn"
              disabled={saving}
              style={{ minWidth: 120 }}
            >
              {saving ? "…" : t("profile.save")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
