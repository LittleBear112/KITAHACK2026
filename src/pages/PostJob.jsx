// src/pages/PostJob.jsx - COMPLETE FILE with Job Category Selector
import React, { useState, useMemo } from "react";
import { ref, push } from "firebase/database";
import { db, auth } from "../lib/firebase";
import { useLanguage } from "../lib/i18n";
import { uploadJobImage } from "../lib/uploadHelper";
import JobCategorySelector from "../components/JobCategorySelector";

export default function PostJob() {
  const user = auth.currentUser;
  const { t, lang } = useLanguage();

  // simple language fallback helper for new texts
  const tf = (zh, en) => (lang === "zh" ? zh : en);

  const [step, setStep] = useState(1);
  const totalSteps = 3;
  
  // Job Category Selection State
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [salaryHint, setSalaryHint] = useState('');

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
    imageUrlsText: "",
    category: "", // Store selected category
    role: "", // Store selected role
  });

  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // File upload state
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Job Category Handlers
  function handleCategorySelect(categoryId, roleId) {
    setSelectedCategory(categoryId);
    setSelectedRole(roleId);
    
    // Save to form
    setForm(prev => ({
      ...prev,
      category: categoryId,
      role: roleId
    }));
  }

  function handleTitleGenerate(generatedTitle) {
    // Only auto-fill if title is empty
    if (!form.title.trim()) {
      setForm(prev => ({ ...prev, title: generatedTitle }));
    }
  }

  function handleSalaryHint(hint) {
    setSalaryHint(hint);
    
    // Auto-fill salary if both fields are empty
    if (hint && !form.salaryMin && !form.salaryMax) {
      // Extract numbers from hint like "RM 10 - 15"
      const match = hint.match(/RM\s*(\d+)\s*-\s*(\d+)/);
      if (match) {
        setForm(prev => ({
          ...prev,
          salaryMin: match[1],
          salaryMax: match[2]
        }));
      }
    }
  }

  // Handle image files selection
  function handleImageFilesChange(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    if (files.length > 5) {
      alert(tf("最多只能上传 5 张图片", "Maximum 5 images allowed"));
      return;
    }

    const validFiles = [];
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        alert(tf(`${file.name} 不是图片文件`, `${file.name} is not an image`));
        continue;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(tf(`${file.name} 超过 5MB 限制`, `${file.name} exceeds 5MB limit`));
        continue;
      }
      validFiles.push(file);
    }

    setImageFiles(validFiles);
    setForm((prev) => ({ ...prev, imageUrlsText: "" }));
  }

  // Upload all images
  async function uploadAllImages() {
    if (imageFiles.length === 0) return [];

    setUploadingImages(true);
    const uploadedUrls = [];

    try {
      for (const file of imageFiles) {
        const url = await uploadJobImage(file, user.uid);
        uploadedUrls.push(url);
      }
      return uploadedUrls;
    } catch (error) {
      alert(error.message || tf("图片上传失败", "Image upload failed"));
      return [];
    } finally {
      setUploadingImages(false);
    }
  }

  // Preview images
  const previewImages = useMemo(() => {
    if (imageFiles.length > 0) {
      return imageFiles.map(file => URL.createObjectURL(file));
    }
    if (!form.imageUrlsText) return [];
    return form.imageUrlsText
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [form.imageUrlsText, imageFiles]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (step < totalSteps) {
      setStep((s) => Math.min(totalSteps, s + 1));
      return;
    }

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

      // Handle images
      let images = [];
      if (imageFiles.length > 0) {
        images = await uploadAllImages();
        if (images.length === 0 && imageFiles.length > 0) {
          setSubmitting(false);
          return;
        }
      } else {
        images = (form.imageUrlsText || "")
          .split(/[\n,]/)
          .map((s) => s.trim())
          .filter(Boolean);
      }

      const mainImage = images[0] || null;

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
        images,
        imageUrl: mainImage,
        category: form.category || null, // Save category
        role: form.role || null, // Save role
        ownerId: auth.currentUser.uid,
        isActive: true,
        createdAt: Date.now(),
      };

      await push(ref(db, "jobs"), job);

      setStatus({ type: "success", message: t("post.success") });

      // Reset form
      setForm({
        title: "",
        companyName: "",
        location: "",
        mapLocation: "",
        employmentType: "parttime",
        salaryMin: "",
        salaryMax: "",
        description: "",
        skillsText: "",
        imageUrlsText: "",
        category: "",
        role: "",
      });
      setImageFiles([]);
      setSelectedCategory(null);
      setSelectedRole(null);
      setSalaryHint('');
      setStep(1);

      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: t("post.error") });
    } finally {
      setSubmitting(false);
    }
  }

  const canGoNextFromStep1 =
    form.title.trim().length > 0 && form.companyName.trim().length > 0;

  function handleNext() {
    if (step === 1 && !canGoNextFromStep1) {
      setStatus({
        type: "error",
        message: t("post.validation.titleCompany"),
      });
      return;
    }
    setStatus(null);
    setStep((s) => Math.min(totalSteps, s + 1));
  }

  function handleBack() {
    setStatus(null);
    setStep((s) => Math.max(1, s - 1));
  }

  return (
    <div className="card form-card">
      <h2 style={{ marginTop: 0, marginBottom: 8 }}>{t("post.title")}</h2>
      <p style={{ marginTop: 0, marginBottom: 20, color: "var(--muted)" }}>
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

      {/* Step indicator */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3].map((n) => {
          const active = step === n;
          const done = step > n;
          const label =
            n === 1
              ? tf("基础信息", "Basic info")
              : n === 2
              ? tf("工作详情", "Job details")
              : tf("描述与环境图片", "Description & photos");
          return (
            <div
              key={n}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                color: done || active ? "var(--primary)" : "var(--muted)",
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "999px",
                  border: "2px solid var(--primary)",
                  background: done || active ? "var(--primary)" : "transparent",
                  color: done || active ? "#fff" : "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                }}
              >
                {n}
              </div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      {status && (
        <div
          style={{
            marginBottom: 16,
            padding: 10,
            borderRadius: 10,
            fontSize: 14,
            background:
              status.type === "error"
                ? "rgba(239,68,68,0.08)"
                : "rgba(16,185,129,0.08)",
            color:
              status.type === "error"
                ? "#b91c1c"
                : "#047857",
          }}
        >
          {status.message}
        </div>
      )}

      {/* Main layout: left wizard form, right live preview */}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.75fr) minmax(0, 1.25fr)",
            gap: 24,
          }}
        >
          {/* LEFT: step content */}
          <div>
            {step === 1 && (
              <>
                {/* JOB CATEGORY SELECTOR */}
                <JobCategorySelector
                  selectedCategory={selectedCategory}
                  selectedRole={selectedRole}
                  onSelect={handleCategorySelect}
                  onTitleGenerate={handleTitleGenerate}
                  onSalaryHint={handleSalaryHint}
                />

                {/* Step 1: Basic info */}
                <div className="form-grid-2">
                  <div className="form-field">
                    <label>
                      {t("post.field.title")}
                      {salaryHint && (
                        <span style={{ 
                          marginLeft: 8, 
                          fontSize: 12, 
                          color: 'var(--primary)',
                          fontWeight: 400 
                        }}>
                          {lang === 'zh' ? '（已为您填写）' : '(Auto-filled)'}
                        </span>
                      )}
                    </label>
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
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        marginTop: 4,
                      }}
                    >
                      {tf(
                        "可直接贴上 Google Maps 分享链接。",
                        "You can paste a Google Maps share link here."
                      )}
                    </span>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Step 2: job details & salary */}
                <div className="form-grid-2">
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
                      <option value="intern">
                        {t("post.field.type.intern")}
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>
                      {t("post.field.salaryMin")}
                      {salaryHint && (
                        <span style={{ 
                          marginLeft: 8, 
                          fontSize: 12, 
                          color: 'var(--primary)',
                          fontWeight: 400 
                        }}>
                          {tf('建议：', 'Suggested: ')}{salaryHint}
                        </span>
                      )}
                    </label>
                    <input
                      type="number"
                      name="salaryMin"
                      value={form.salaryMin}
                      onChange={handleChange}
                      placeholder="8"
                      min="0"
                    />
                  </div>
                </div>

                <div className="form-grid-2" style={{ marginTop: 18 }}>
                  <div className="form-field">
                    <label>{t("post.field.salaryMax")}</label>
                    <input
                      type="number"
                      name="salaryMax"
                      value={form.salaryMax}
                      onChange={handleChange}
                      placeholder="15"
                      min="0"
                    />
                  </div>

                  <div className="form-field">
                    <label>{t("post.field.skills")}</label>
                    <input
                      name="skillsText"
                      value={form.skillsText}
                      onChange={handleChange}
                      placeholder={t("post.field.skills.placeholder")}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        marginTop: 4,
                      }}
                    >
                      {tf(
                        "用逗号分隔，例如: 收银, 咖啡拉花, 基本英文",
                        "Separate by comma, e.g. cashier, latte art, basic English"
                      )}
                    </span>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                {/* Step 3: description & environment photos */}
                <div className="form-field">
                  <label>{t("post.field.description")}</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder={t("post.field.description.placeholder")}
                  />
                </div>

                <div className="form-field" style={{ marginTop: 18 }}>
                  <label>
                    {tf("环境图片（可多张）", "Environment photos (multiple)")}
                  </label>

                  {/* File upload */}
                  <div style={{ marginBottom: 12 }}>
                    <label
                      htmlFor="job-image-upload"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        border: "2px dashed var(--border)",
                        borderRadius: "12px",
                        background: "rgba(249,115,22,0.05)",
                        cursor: uploadingImages || submitting ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        if (!uploadingImages && !submitting) {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.background = "rgba(249,115,22,0.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.background = "rgba(249,115,22,0.05)";
                      }}
                    >
                      <div style={{ fontSize: 32, marginBottom: 8 }}>📸</div>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>
                        {tf("点击选择图片文件", "Click to select image files")}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>
                        {tf("支持 JPG、PNG、WebP，最多 5 张，每张最大 5MB", "JPG, PNG, WebP, max 5 images, 5MB each")}
                      </div>
                    </label>
                    <input
                      id="job-image-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageFilesChange}
                      disabled={uploadingImages || submitting}
                      style={{ display: "none" }}
                    />
                    
                    {/* Display selected files */}
                    {imageFiles.length > 0 && (
                      <div style={{ marginTop: 10 }}>
                        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>
                          {tf(`已选择 ${imageFiles.length} 张图片：`, `Selected ${imageFiles.length} image(s):`)}
                        </p>
                        {imageFiles.map((file, i) => (
                          <div
                            key={i}
                            style={{
                              padding: "6px 10px",
                              background: "rgba(16,185,129,0.1)",
                              border: "1px solid rgba(16,185,129,0.3)",
                              borderRadius: 6,
                              fontSize: 12,
                              marginBottom: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>
                              {i + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setImageFiles((prev) =>
                                  prev.filter((_, idx) => idx !== i)
                                );
                              }}
                              style={{
                                background: "none",
                                border: "none",
                                color: "var(--danger)",
                                cursor: "pointer",
                                padding: "0 4px",
                                fontSize: 14,
                              }}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Or input URL */}
                  <div
                    style={{
                      textAlign: "center",
                      margin: "12px 0",
                      color: "var(--muted)",
                      fontSize: 12,
                    }}
                  >
                    {tf("或", "or")}
                  </div>

                  <textarea
                    name="imageUrlsText"
                    value={form.imageUrlsText}
                    onChange={handleChange}
                    placeholder={tf(
                      "每一行或用逗号分隔一张图片链接，例如从 Imgur、Cloudinary 或公司官网复制。",
                      "Paste image URLs, separated by new lines or commas. Use links from Imgur, Cloudinary, or your own website."
                    )}
                    style={{ minHeight: 110 }}
                    disabled={imageFiles.length > 0}
                  />

                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    {tf(
                      "第一张图片会作为封面显示在列表和详情页顶部。支持 JPG、PNG、WebP，每张最大 5MB",
                      "First image will be the main cover. Supports JPG, PNG, WebP, max 5MB each."
                    )}
                  </span>

                  {/* Preview images */}
                  {previewImages.length > 0 && (
                    <div style={{ marginTop: 12 }}>
                      <p style={{ fontSize: 12, marginBottom: 6 }}>
                        {tf("预览：", "Preview:")}
                      </p>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                          gap: 8,
                        }}
                      >
                        {previewImages.map((url, i) => (
                          <div
                            key={i}
                            style={{
                              aspectRatio: "16/9",
                              borderRadius: 8,
                              overflow: "hidden",
                              border: "1px solid var(--border)",
                            }}
                          >
                            <img
                              src={url}
                              alt={`Preview ${i + 1}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Navigation buttons */}
            <div
              style={{
                marginTop: 28,
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-ghost"
                    disabled={submitting || uploadingImages}
                  >
                    {tf("上一步", "Back")}
                  </button>
                )}
              </div>

              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                {step < totalSteps && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn"
                    disabled={submitting || uploadingImages}
                  >
                    {tf("下一步", "Next")}
                  </button>
                )}
                {step === totalSteps && (
                  <button
                    type="submit"
                    className="btn"
                    disabled={submitting || uploadingImages}
                    style={{ minWidth: 140 }}
                  >
                    {uploadingImages
                      ? tf("正在上传图片...", "Uploading images...")
                      : submitting
                      ? t("post.submitting")
                      : t("post.submit")}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: live preview */}
          <div
            style={{
              borderRadius: 18,
              border: "1px solid var(--border)",
              padding: 14,
              background: "rgba(15,23,42,0.02)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "var(--muted)",
                marginBottom: 8,
              }}
            >
              {tf("预览", "Preview")}
            </div>

            {previewImages.length > 0 && (
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  marginBottom: 10,
                  background: "#020617",
                }}
              >
                <img
                  src={previewImages[0]}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxHeight: 180,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            )}

            <h3
              style={{
                margin: 0,
                marginBottom: 4,
                fontSize: 18,
              }}
            >
              {form.title || tf("职位名称", "Job title")}
            </h3>
            <div
              style={{
                fontSize: 14,
                color: "var(--muted)",
                marginBottom: 6,
              }}
            >
              {(form.companyName || tf("公司名称", "Company")) +
                (form.location ? " · " + form.location : "")}
            </div>

            {form.salaryMin && (
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--primary)",
                  marginBottom: 6,
                }}
              >
                RM {form.salaryMin}
                {form.salaryMax ? " - RM " + form.salaryMax : ""}
                {" "}
                {form.employmentType === "fulltime"
                  ? tf("/ 月", "/ month")
                  : tf("/ 小时", "/ hour")}
              </div>
            )}

            <p
              style={{
                marginTop: 4,
                fontSize: 13,
                color: "var(--muted)",
                whiteSpace: "pre-wrap",
              }}
            >
              {form.description
                ? form.description.slice(0, 160) +
                  (form.description.length > 160 ? "..." : "")
                : tf(
                    "在这里写下工作内容、班次时间、需要的经验等，让应征者更有信心。",
                    "Write a short description about the role, shift hours and expectations so applicants feel confident."
                  )}
            </p>

            {previewImages.length > 1 && (
              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                {previewImages.slice(1, 4).map((url, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 60,
                      height: 40,
                      borderRadius: 8,
                      overflow: "hidden",
                      background: "#020617",
                    }}
                  >
                    <img
                      src={url}
                      alt={`Preview ${idx + 2}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
                {previewImages.length > 4 && (
                  <div
                    style={{
                      width: 60,
                      height: 40,
                      borderRadius: 8,
                      border: "1px dashed var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      color: "var(--muted)",
                    }}
                  >
                    +{previewImages.length - 4}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}