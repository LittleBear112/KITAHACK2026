// src/pages/EditJob.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, get, update } from "firebase/database";
import { db, auth } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";

export default function EditJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuthState();

  const [form, setForm] = useState({
    title: "",
    companyName: "",
    location: "",
    mapLocation: "",
    employmentType: "parttime",
    salaryMin: "",
    salaryMax: "",
    description: "",
    skillsText: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  // 载入现有职位数据
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setStatus({ type: "error", message: "请先登录账号。" });
      setLoading(false);
      return;
    }

    async function loadJob() {
      try {
        const snap = await get(ref(db, "jobs/" + jobId));
        if (!snap.exists()) {
          setStatus({ type: "error", message: "职位不存在或已被删除。" });
          setLoading(false);
          return;
        }

        const job = snap.val();

        // 只允许 owner 编辑
        if (job.ownerId !== user.uid) {
          setStatus({ type: "error", message: "你没有权限编辑这个职位。" });
          setLoading(false);
          return;
        }

        setForm({
          title: job.title || "",
          companyName: job.companyName || "",
          location: job.location || "",
          mapLocation: job.mapLocation || "",
          employmentType: job.employmentType || "parttime",
          salaryMin:
            typeof job.salaryMin === "number" ? String(job.salaryMin) : "",
          salaryMax:
            typeof job.salaryMax === "number" ? String(job.salaryMax) : "",
          description: job.description || "",
          skillsText: (job.skills || []).join(", ")
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setStatus({ type: "error", message: "载入职位失败，请稍后再试。" });
        setLoading(false);
      }
    }

    loadJob();
  }, [authLoading, user, jobId]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!auth.currentUser) {
      setStatus({ type: "error", message: "请先登录账号再保存。" });
      return;
    }

    if (!form.title.trim() || !form.companyName.trim()) {
      setStatus({ type: "error", message: "职位名称和公司名称不能为空。" });
      return;
    }

    setSaving(true);
    try {
      const skills = form.skillsText
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

      const patch = {
        title: form.title.trim(),
        companyName: form.companyName.trim(),
        location: form.location.trim(),
        mapLocation: form.mapLocation.trim(),
        employmentType: form.employmentType,
        salaryMin: form.salaryMin ? Number(form.salaryMin) : null,
        salaryMax: form.salaryMax ? Number(form.salaryMax) : null,
        description: form.description.trim(),
        skills
      };

      await update(ref(db, "jobs/" + jobId), patch);

      setStatus({ type: "success", message: "职位已更新。" });

      // 返回雇主仪表盘
      setTimeout(() => {
        navigate("/employer");
      }, 800);
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "保存失败，请稍后再试。" });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card form-card">
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>编辑职位</h2>

      {loading && <p>载入中…</p>}

      {!loading && status && status.type === "error" && (
        <p style={{ color: "var(--danger)" }}>{status.message}</p>
      )}

      {!loading && (!status || status.type !== "error") && (
        <>
          {status && status.type === "success" && (
            <div
              style={{
                marginBottom: 16,
                padding: 12,
                borderRadius: 12,
                fontSize: 14,
                background: "rgba(16,185,129,0.1)",
                color: "var(--success)"
              }}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="jobs-form">
            {/* 第一行：职位名称 + 公司名称 */}
            <div className="form-grid-2">
              <div className="form-field">
                <label>职位名称</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="例如：Software Engineer / 厨房帮手"
                />
              </div>

              <div className="form-field">
                <label>公司名称</label>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="例如：Webstation Computer Centre"
                />
              </div>
            </div>

            {/* 第二行：工作地点 + 地图地址 */}
            <div className="form-grid-2" style={{ marginTop: 18 }}>
              <div className="form-field">
                <label>工作地点（城市 / 区域）</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="例如：Ipoh / Sunway"
                />
              </div>

              <div className="form-field">
                <label>地图地址（可选，用于地图）</label>
                <input
                  name="mapLocation"
                  value={form.mapLocation}
                  onChange={handleChange}
                  placeholder="例如：Webstation Computer Centre, Ipoh"
                />
              </div>
            </div>

            {/* 第三行：类型 + 薪水区间 */}
            <div className="form-grid-2" style={{ marginTop: 18 }}>
              <div className="form-field">
                <label>雇佣类型</label>
                <select
                  name="employmentType"
                  value={form.employmentType}
                  onChange={handleChange}
                >
                  <option value="parttime">小时工 / Part-time</option>
                  <option value="fulltime">全职 / Full-time</option>
                  <option value="intern">实习 / Internship</option>
                </select>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label>最低时薪 (RM)</label>
                  <input
                    type="number"
                    name="salaryMin"
                    value={form.salaryMin}
                    onChange={handleChange}
                    placeholder="例如：12"
                    min="0"
                  />
                </div>

                <div className="form-field">
                  <label>最高时薪 (RM)</label>
                  <input
                    type="number"
                    name="salaryMax"
                    value={form.salaryMax}
                    onChange={handleChange}
                    placeholder="例如：20"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* 职位描述 */}
            <div className="form-field" style={{ marginTop: 24 }}>
              <label>职位描述</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="简单介绍你们需要什么样的人、主要工作内容、上班时间等等…"
              />
            </div>

            {/* 技能要求 */}
            <div className="form-field" style={{ marginTop: 18 }}>
              <label>技能要求（用逗号分隔，例如：HTML, CSS, JS）</label>
              <input
                name="skillsText"
                value={form.skillsText}
                onChange={handleChange}
                placeholder="例如：C, C++, HTML, CSS, JS"
              />
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              <button
                type="button"
                className="btn"
                onClick={() => navigate(-1)}
                style={{ background: "#6b7280" }}
              >
                返回
              </button>
              <button
                type="submit"
                className="btn"
                disabled={saving}
                style={{ minWidth: 120 }}
              >
                {saving ? "保存中…" : "保存修改"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
