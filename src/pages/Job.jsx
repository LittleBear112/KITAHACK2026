// src/pages/Job.jsx - 完整版本（添加简历上传功能）
import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ref, onValue, push, get } from "firebase/database";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";
import { useLanguage } from "../lib/i18n";
import { uploadResume } from "../lib/uploadHelper";

export default function Job() {
  const { jobId } = useParams();
  const { user } = useAuthState();
  const { t, lang } = useLanguage();

  const tf = (key, zh, en) => {
    const v = t(key);
    if (v && v !== key) return v;
    return lang === "zh" ? zh : en;
  };

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 申请状态
  const [hasApplied, setHasApplied] = useState(false);
  const [checkingApplied, setCheckingApplied] = useState(false);
  const [applySubmitting, setApplySubmitting] = useState(false);
  const [applyStatus, setApplyStatus] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  // 🆕 文件上传状态
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadingResume, setUploadingResume] = useState(false);

  const [applyForm, setApplyForm] = useState({
    name: "",
    phone: "",
    email: "",
    resumeLink: "",
  });

  /* ---------- 加载职位 ---------- */
  useEffect(() => {
    if (!jobId) {
      setLoading(false);
      return;
    }
    const jobRef = ref(db, "jobs/" + jobId);
    const unsub = onValue(
      jobRef,
      (snap) => {
        if (snap.exists()) {
          const data = snap.val();
          setJob({ ...data, id: jobId });
        } else {
          setJob(null);
        }
        setLoading(false);
      },
      () => {
        setJob(null);
        setLoading(false);
      }
    );
    return () => unsub();
  }, [jobId]);

  /* ---------- 检查是否已申请 ---------- */
  useEffect(() => {
    if (!user || !jobId) return;
    setCheckingApplied(true);
    const appRef = ref(db, "applications/" + jobId);
    get(appRef)
      .then((snap) => {
        if (snap.exists()) {
          const apps = Object.values(snap.val());
          const found = apps.some((a) => a.userId === user.uid);
          setHasApplied(found);
        } else {
          setHasApplied(false);
        }
      })
      .catch(() => {
        setHasApplied(false);
      })
      .finally(() => {
        setCheckingApplied(false);
      });
  }, [user, jobId]);

  /* ---------- 图片列表 ---------- */
  const images = useMemo(() => {
    if (!job) return [];
    if (Array.isArray(job.images) && job.images.length > 0) {
      return job.images.filter(Boolean);
    }
    if (job.imageUrl) {
      return [job.imageUrl];
    }
    return [];
  }, [job]);

  function goPrevImage() {
    setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);
  }

  function goNextImage() {
    setCurrentImageIndex((i) => (i + 1) % images.length);
  }

  /* ---------- Google Maps 链接 ---------- */
  const mapUrl = useMemo(() => {
    if (!job) return null;
    const queryBase = job.mapLocation
      ? `${job.companyName} ${job.mapLocation}`
      : job.location && job.companyName
      ? `${job.companyName} ${job.location}`
      : job.companyName || job.location;
    if (!queryBase) return null;
    return `https://www.google.com/maps?q=${encodeURIComponent(
      queryBase
    )}&output=embed`;
  }, [job]);

  /* ========================================
      🆕 处理简历上传
     ======================================== */
  async function handleResumeUpload(file) {
    if (!file || !user) return null;

    setUploadingResume(true);
    try {
      const resumeUrl = await uploadResume(file, user.uid);
      return resumeUrl;
    } catch (error) {
      alert(error.message || "简历上传失败");
      return null;
    } finally {
      setUploadingResume(false);
    }
  }

  /* ========================================
      提交申请（修改为支持文件上传）
     ======================================== */
  async function handleApplySubmit(e) {
    e.preventDefault();
    if (!job) return;

    if (!user) {
      setApplyStatus({
        type: "error",
        message: tf(
          "job_apply_needLogin",
          "请先登录再申请。",
          "Please login first."
        ),
      });
      return;
    }

    if (hasApplied) {
      setApplyStatus({
        type: "info",
        message: tf(
          "job_apply_already",
          "你已经申请过这个职位啦，无需重复投递。",
          "You have already applied for this job."
        ),
      });
      return;
    }

    const name = applyForm.name.trim();
    const phone = applyForm.phone.trim();
    const email = applyForm.email.trim();

    // 必填验证
    const errors = {};
    if (!name) {
      errors.name = tf(
        "job_apply_error_name",
        "请输入姓名。",
        "Please enter your name."
      );
    }
    if (!phone) {
      errors.phone = tf(
        "job_apply_error_phone",
        "请输入手机号码。",
        "Please enter your phone number."
      );
    }
    if (!email) {
      errors.email = tf(
        "job_apply_error_email",
        "请输入邮箱地址。",
        "Please enter your email."
      );
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setApplyStatus({
        type: "error",
        message: tf(
          "job_apply_need_info",
          "请完整填写标记为 * 的必填信息。",
          "Please fill in all required fields marked with *."
        ),
      });
      return;
    }

    setFieldErrors({});
    setApplySubmitting(true);

    try {
      // 🆕 如果选择了简历文件，先上传
      let resumeLink = applyForm.resumeLink;
      if (resumeFile) {
        resumeLink = await handleResumeUpload(resumeFile);
        if (!resumeLink) {
          setApplySubmitting(false);
          return;
        }
      }

      await push(ref(db, "applications/" + jobId), {
        userId: user.uid,
        name,
        phone,
        email,
        resumeLink: resumeLink || null,
        createdAt: Date.now(),
        jobId: jobId,
        jobTitle: job.title || "",
      });

      setApplyStatus({
        type: "success",
        message: tf(
          "job_apply_success",
          "已提交申请，老板审核后会联系你。",
          "Application submitted!"
        ),
      });

      // name 清空，phone/email/简历保留，方便连投其他职位
      setApplyForm((prev) => ({
        ...prev,
        name: "",
      }));
      setResumeFile(null);

      setHasApplied(true);
    } catch (err) {
      console.error(err);
      setApplySubmitting(false);
      setApplyStatus({
        type: "error",
        message: tf(
          "job_apply_error",
          "申请失败，请稍后再试。",
          "Submit failed, please try again."
        ),
      });
    } finally {
      setApplySubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container">
        <div className="card">
          <p>找不到该职位，可能已被删除。</p>
          <Link to="/jobs" className="btn" style={{ marginTop: 12 }}>
            返回职位列表
          </Link>
        </div>
      </div>
    );
  }

  // 薪资显示
  const { salaryMin, salaryMax, employmentType } = job;
  let salaryText = "薪资面议";
  if (salaryMin || salaryMax) {
    const unit =
      employmentType === "fulltime"
        ? tf("jobs_salary_monthly_suffix", " / 月", " / month")
        : tf("job_salary_hourly", " / 小时", " / hour");

    if (salaryMin && salaryMax) {
      salaryText = `RM ${salaryMin} - ${salaryMax}${unit}`;
    } else if (salaryMin) {
      salaryText = `RM ${salaryMin}+${unit}`;
    } else if (salaryMax) {
      salaryText = `最高 RM ${salaryMax}${unit}`;
    }
  }

  const badgeText =
    employmentType === "fulltime"
      ? tf("job_type_fulltime", "全职", "Full-time")
      : employmentType === "parttime"
      ? tf("job_type_parttime", "兼职", "Part-time")
      : tf("job_type_contract", "合同", "Contract");

  const description = job.description || "暂无描述";
  const skills =
    Array.isArray(job.skills) && job.skills.length > 0
      ? job.skills
      : null;

  const postedAt = job.createdAt
    ? new Date(job.createdAt).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div
      className="container"
      style={{
        maxWidth: 1000,
        padding: "16px",
        paddingBottom: 88,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 24,
        }}
      >
        {/* 左：职位详情 */}
        <div>
          {/* 标题 & 公司 */}
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ margin: "0 0 8px", fontSize: 28 }}>{job.title}</h1>
            <p style={{ margin: 0, fontSize: 16, color: "var(--muted)" }}>
              {job.companyName}
            </p>
            {job.location && (
              <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--muted)" }}>
                📍 {job.location}
              </p>
            )}
          </div>

          {/* 图片轮播 */}
          {images.length > 0 && (
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                borderRadius: 16,
                overflow: "hidden",
                marginBottom: 24,
                background: "var(--card)",
              }}
            >
              <img
                src={images[currentImageIndex]}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="Job"
              />

              {images.length > 1 && (
                <>
                  {/* 左箭头 */}
                  <button
                    type="button"
                    onClick={goPrevImage}
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 32,
                      height: 32,
                      borderRadius: "999px",
                      border: "none",
                      background: "rgba(15,23,42,0.75)",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ‹
                  </button>

                  {/* 右箭头 */}
                  <button
                    type="button"
                    onClick={goNextImage}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 32,
                      height: 32,
                      borderRadius: "999px",
                      border: "none",
                      background: "rgba(15,23,42,0.75)",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ›
                  </button>

                  {/* 小圆点指示器 */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: 6,
                    }}
                  >
                    {images.map((_, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "999px",
                          background:
                            idx === currentImageIndex
                              ? "#ffffff"
                              : "rgba(226,232,240,0.5)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* 职位描述 */}
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>
              {tf("job_description_title", "职位描述", "Description")}
            </h3>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontSize: 14 }}>
              {description}
            </p>
          </div>

          {/* 技能 / 要求 */}
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>
              {tf("job_skills_title", "职位要求", "Skills / Requirements")}
            </h3>
            {skills ? (
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {skills.map((s, i) => (
                  <li key={i} style={{ fontSize: 14 }}>
                    {s}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
                暂无特别要求
              </p>
            )}
          </div>

          {/* 地图 */}
          {mapUrl && (
            <div style={{ marginTop: 24 }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 18 }}>工作地点</h3>
              <iframe
                src={mapUrl}
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 12 }}
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>

        {/* 右：申请卡片 */}
        <div>
          {/* 职位信息摘要 */}
          <div
            style={{
              borderRadius: 18,
              padding: 16,
              border: "1px solid var(--border)",
              background: "var(--card-subtle)",
              boxShadow: "0 18px 45px rgba(15,23,42,0.25)",
              marginBottom: 16,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              {salaryText}
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
              {badgeText && (
                <p style={{ margin: 0 }}>
                  {tf("job_summary_type", "类型：", "Type:")} {badgeText}
                </p>
              )}
              {postedAt && (
                <p style={{ margin: 0 }}>
                  {tf("job_posted_on", "发布于：", "Posted on:")} {postedAt}
                </p>
              )}
            </div>
          </div>

          {/* 申请卡片 */}
          <div
            style={{
              borderRadius: 18,
              padding: 16,
              border: "1px solid var(--border)",
              background: "var(--card-subtle)",
              boxShadow: "0 18px 45px rgba(15,23,42,0.25)",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: 16 }}>
              {tf("job_apply_title", "快速申请这个职位", "Apply for this job")}
            </h3>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              {checkingApplied
                ? tf(
                    "job_apply_checking",
                    "正在检查你是否已申请过…",
                    "Checking your application status…"
                  )
                : hasApplied
                ? tf(
                    "job_apply_already",
                    "你已经申请过这个职位啦 ✅",
                    "You have already applied for this job ✅"
                  )
                : tf(
                    "job_apply_hint",
                    "填写姓名、手机、邮箱，以及（可选）你的简历链接，老板在后台看到你的资料后会主动联系你。",
                    "Fill in your name, phone, email and (optional) resume link. The employer will contact you if shortlisted."
                  )}
            </p>

            {applyStatus && (
              <div
                style={{
                  marginBottom: 8,
                  padding: 8,
                  borderRadius: 12,
                  fontSize: 13,
                  background:
                    applyStatus.type === "success"
                      ? "rgba(16,185,129,0.12)"
                      : applyStatus.type === "info"
                      ? "rgba(59,130,246,0.12)"
                      : "rgba(239,68,68,0.12)",
                  border:
                    applyStatus.type === "success"
                      ? "1px solid rgba(16,185,129,0.5)"
                      : applyStatus.type === "info"
                      ? "1px solid rgba(59,130,246,0.5)"
                      : "1px solid rgba(239,68,68,0.4)",
                  color:
                    applyStatus.type === "success"
                      ? "#6ee7b7"
                      : applyStatus.type === "info"
                      ? "#93c5fd"
                      : "#fca5a5",
                }}
              >
                {applyStatus.message}
              </div>
            )}

            <form onSubmit={handleApplySubmit}>
              {/* 姓名 */}
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 13, marginBottom: 4, display: "block" }}>
                  {tf("job_apply_name", "姓名", "Name")}
                  <span style={{ color: "var(--danger)", marginLeft: 4 }}>*</span>
                </label>
                <input
                  className="input-glass"
                  value={applyForm.name}
                  onChange={(e) =>
                    setApplyForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder={tf(
                    "job_apply_name_ph",
                    "例如：Nevan",
                    "e.g. Nevan"
                  )}
                  disabled={hasApplied || applySubmitting}
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
                {fieldErrors.name && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--danger)",
                      marginTop: 4,
                    }}
                  >
                    {fieldErrors.name}
                  </div>
                )}
              </div>

              {/* 手机 */}
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 13, marginBottom: 4, display: "block" }}>
                  {tf("job_apply_phone", "手机号码", "Phone number")}
                  <span style={{ color: "var(--danger)", marginLeft: 4 }}>*</span>
                </label>
                <input
                  className="input-glass"
                  value={applyForm.phone}
                  onChange={(e) =>
                    setApplyForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder={tf(
                    "job_apply_phone_ph",
                    "例如：012-3456789",
                    "e.g. 012-3456789"
                  )}
                  disabled={hasApplied || applySubmitting}
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
                {fieldErrors.phone && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--danger)",
                      marginTop: 4,
                    }}
                  >
                    {fieldErrors.phone}
                  </div>
                )}
              </div>

              {/* 邮箱 */}
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 13, marginBottom: 4, display: "block" }}>
                  {tf("job_apply_email", "邮箱地址", "Email address")}
                  <span style={{ color: "var(--danger)", marginLeft: 4 }}>*</span>
                </label>
                <input
                  className="input-glass"
                  type="email"
                  value={applyForm.email}
                  onChange={(e) =>
                    setApplyForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder={
                    user?.email ||
                    tf(
                      "job_apply_email_ph",
                      "例如：example@gmail.com",
                      "e.g. example@gmail.com"
                    )
                  }
                  disabled={hasApplied || applySubmitting}
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
                {fieldErrors.email && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--danger)",
                      marginTop: 4,
                    }}
                  >
                    {fieldErrors.email}
                  </div>
                )}
              </div>

              {/* 🆕 简历上传（文件或链接） */}
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 13, marginBottom: 4, display: "block" }}>
                  {tf("job_apply_resume", "简历（可选）", "Resume (optional)")}
                </label>

                {/* 文件上传 - 美化版 */}
                <div style={{ marginBottom: 8 }}>
                  <label
                    htmlFor="resume-upload"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px",
                      border: "2px dashed var(--border)",
                      borderRadius: "10px",
                      background: "rgba(249,115,22,0.05)",
                      cursor: hasApplied || applySubmitting || uploadingResume ? "not-allowed" : "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!hasApplied && !applySubmitting && !uploadingResume) {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.background = "rgba(249,115,22,0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "rgba(249,115,22,0.05)";
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 4 }}>📄</div>
                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>
                      {tf("点击上传简历", "Click to upload resume")}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>
                      {tf("支持 PDF、Word 文档，最大 5MB", "PDF, Word, max 5MB")}
                    </div>
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setResumeFile(file);
                        setApplyForm((prev) => ({ ...prev, resumeLink: "" }));
                      }
                    }}
                    disabled={hasApplied || applySubmitting || uploadingResume}
                    style={{ display: "none" }}
                  />
                  {resumeFile && (
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
                        ✅ {resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)
                      </span>
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
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
                <div
                  style={{
                    textAlign: "center",
                    margin: "8px 0",
                    color: "var(--muted)",
                    fontSize: 12,
                  }}
                >
                  或
                </div>

                <input
                  className="input-glass"
                  value={applyForm.resumeLink}
                  onChange={(e) => {
                    setApplyForm((prev) => ({
                      ...prev,
                      resumeLink: e.target.value,
                    }));
                    setResumeFile(null);
                  }}
                  placeholder={tf(
                    "job_apply_resume_ph",
                    "粘贴简历链接（Google Drive / PDF）",
                    "Paste resume link (Google Drive / PDF)"
                  )}
                  disabled={hasApplied || applySubmitting || !!resumeFile}
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

                <p
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    marginTop: 6,
                    marginBottom: 0,
                  }}
                >
                  {tf(
                    "resume_hint",
                    "支持 PDF、Word 文档，最大 5MB",
                    "Supports PDF, Word documents, max 5MB"
                  )}
                </p>
              </div>

              <button
                type="submit"
                className="btn"
                disabled={hasApplied || applySubmitting || uploadingResume}
                style={{ marginTop: 4, width: "100%" }}
              >
                {uploadingResume
                  ? tf("uploading_resume", "正在上传简历...", "Uploading resume...")
                  : applySubmitting
                  ? tf("submitting", "提交中...", "Submitting...")
                  : hasApplied
                  ? tf("job_apply_done", "已申请", "Already applied")
                  : tf("job_apply_cta", "提交申请", "Submit application")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}