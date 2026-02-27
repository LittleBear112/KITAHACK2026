// src/pages/PostJob.jsx
import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db, auth } from "../lib/firebase";
import { useLanguage } from "../lib/i18n";

export default function PostJob() {
  const user = auth.currentUser;
  const { t } = useLanguage();

  const [form, setForm] = useState({
    title: "",
    companyName: "",
    location: "",
    mapLocation: "",
    employmentType: "parttime",
    salaryMin: "",
    salaryMax: "",
    description: "",
    skillsText: "",
  });

  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!auth.currentUser) {
      setStatus({ type: "error", message: t("post.notLoggedIn") });
      return;
    }

    if (!form.title.trim() || !form.companyName.trim()) {
      setStatus({ type: "error", message: t("post.validation.titleCompany") });
      return;
    }

    setSubmitting(true);
    try {
      const skills = form.skillsText
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const job = {
        title: form.title.trim(),
        companyName: form.companyName.trim(),
        location: form.location.trim(),
        mapLocation: form.mapLocation.trim(),
        employmentType: form.employmentType,
        salaryMin: form.salaryMin ? Number(form.salaryMin) : null,
        salaryMax: form.salaryMax ? Number(form.salaryMax) : null,
        description: form.description.trim(),
        skills,
        ownerId: auth.currentUser.uid,
        isActive: true,
        postedAt: Date.now(),
      };

      await push(ref(db, "jobs"), job);

      setStatus({ type: "success", message: t("post.success") });

      setForm((prev) => ({
        ...prev,
        title: "",
        location: "",
        mapLocation: "",
        salaryMin: "",
        salaryMax: "",
        description: "",
        skillsText: "",
      }));
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: t("post.error") });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>{t("post.title")}</h2>
      <p style={{ marginTop: 0, marginBottom: 24, color: "var(--muted)" }}>
        {t("post.subtitle")}
      </p>

      {!user && (
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            borderRadius: 12,
            background: "var(--primary-light)",
            color: "var(--primary-on-light)",
            fontSize: 14,
          }}
        >
          {t("post.notLoggedIn")}
        </div>
      )}

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
              status.type === "success" ? "var(--success)" : "var(--danger)",
          }}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="jobs-form">
        {/* 第一行：标题 + 公司 */}
        <div className="form-grid-2">
          <div className="form-field">
            <label>{t("post.field.title")}</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder={t("post.field.title.placeholder")}
            />
          </div>

          <div className="form-field">
            <label>{t("post.field.company")}</label>
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder={t("post.field.company.placeholder")}
            />
          </div>
        </div>

        {/* 第二行：地点 + 地图地址 */}
        <div className="form-grid-2" style={{ marginTop: 18 }}>
          <div className="form-field">
            <label>{t("post.field.location")}</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder={t("post.field.location.placeholder")}
            />
          </div>

          <div className="form-field">
            <label>{t("post.field.mapLocation")}</label>
            <input
              name="mapLocation"
              value={form.mapLocation}
              onChange={handleChange}
              placeholder={t("post.field.mapLocation.placeholder")}
            />
          </div>
        </div>

        {/* 第三行：类型 + 薪水 */}
        <div className="form-grid-2" style={{ marginTop: 18 }}>
          <div className="form-field">
            <label>{t("post.field.type")}</label>
            <select
              name="employmentType"
              value={form.employmentType}
              onChange={handleChange}
            >
              <option value="parttime">
                {t("post.field.type.parttime")}
              </option>
              <option value="fulltime">
                {t("post.field.type.fulltime")}
              </option>
              <option value="intern">{t("post.field.type.intern")}</option>
            </select>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label>{t("post.field.salaryMin")}</label>
              <input
                type="number"
                name="salaryMin"
                value={form.salaryMin}
                onChange={handleChange}
                placeholder="12"
                min="0"
              />
            </div>

            <div className="form-field">
              <label>{t("post.field.salaryMax")}</label>
              <input
                type="number"
                name="salaryMax"
                value={form.salaryMax}
                onChange={handleChange}
                placeholder="20"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* 描述 */}
        <div className="form-field" style={{ marginTop: 24 }}>
          <label>{t("post.field.description")}</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder={t("post.field.description.placeholder")}
          />
        </div>

        {/* 技能 */}
        <div className="form-field" style={{ marginTop: 18 }}>
          <label>{t("post.field.skills")}</label>
          <input
            name="skillsText"
            value={form.skillsText}
            onChange={handleChange}
            placeholder={t("post.field.skills.placeholder")}
          />
        </div>

        <div style={{ marginTop: 28 }}>
          <button
            type="submit"
            className="btn"
            disabled={submitting}
            style={{ minWidth: 120 }}
          >
            {submitting ? t("post.submitting") : t("post.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
