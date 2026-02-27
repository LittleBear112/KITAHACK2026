// src/pages/EditJob.jsx - 完整版（支持图片上传）
import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, get, update } from "firebase/database";
import { db, auth } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";
import { uploadJobImage } from "../lib/uploadHelper";

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
    skillsText: "",
    imageUrlsText: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  // 🆕 文件上传状态
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [existingImages, setExistingImages] = useState([]); // 保存原有图片

  // 🆕 处理图片文件选择
  function handleImageFilesChange(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // 限制最多 5 张图片（包括现有图片）
    const totalImages = existingImages.length + files.length;
    if (totalImages > 5) {
      alert(`最多只能有 5 张图片。您已有 ${existingImages.length} 张，只能再添加 ${5 - existingImages.length} 张`);
      return;
    }

    // 验证每个文件
    const validFiles = [];
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} 不是图片文件`);
        continue;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} 超过 5MB 限制`);
        continue;
      }
      validFiles.push(file);
    }

    setImageFiles(validFiles);
    // 清空 URL 输入框
    setForm((prev) => ({ ...prev, imageUrlsText: "" }));
  }

  // 🆕 上传所有新图片
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
      alert(error.message || "图片上传失败");
      return [];
    } finally {
      setUploadingImages(false);
    }
  }

  // 🆕 预览图片（现有图片 + 新选择的文件）
  const previewImages = useMemo(() => {
    const previews = [...existingImages];
    
    if (imageFiles.length > 0) {
      const filePreviews = imageFiles.map(file => URL.createObjectURL(file));
      previews.push(...filePreviews);
    } else if (form.imageUrlsText && !existingImages.length) {
      const urlPreviews = form.imageUrlsText
        .split(/[\n,]/)
        .map((s) => s.trim())
        .filter(Boolean);
      previews.push(...urlPreviews);
    }
    
    return previews;
  }, [existingImages, imageFiles, form.imageUrlsText]);

  // 🆕 删除现有图片
  function removeExistingImage(index) {
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  }

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

        const imageArray = Array.isArray(job.images)
          ? job.images
          : job.imageUrl
          ? [job.imageUrl]
          : [];

        setExistingImages(imageArray); // 保存现有图片

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
          skillsText: (job.skills || []).join(", "),
          imageUrlsText: "", // 不显示在文本框，用 existingImages 显示
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
    setForm((prev) => ({ ...prev, [name]: value }));
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
        .map((s) => s.trim())
        .filter(Boolean);

      // 🆕 处理图片：现有图片 + 新上传的图片
      let images = [...existingImages];
      
      if (imageFiles.length > 0) {
        const newImages = await uploadAllImages();
        if (newImages.length > 0) {
          images.push(...newImages);
        }
      } else if (form.imageUrlsText && existingImages.length === 0) {
        // 如果没有现有图片且输入了 URL
        images = form.imageUrlsText
          .split(/[\n,]/)
          .map((s) => s.trim())
          .filter(Boolean);
      }

      const mainImage = images[0] || null;

      const patch = {
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
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            borderRadius: 12,
            fontSize: 14,
            background: "rgba(239,68,68,0.1)",
            color: "#b91c1c",
          }}
        >
          {status.message}
        </div>
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
                color: "#047857",
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

            {/* 🆕 工作环境图片 - 支持文件上传 */}
            <div className="form-field" style={{ marginTop: 24 }}>
              <label>工作环境图片（可多张）</label>

              {/* 显示现有图片 */}
              {existingImages.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>
                    现有图片 ({existingImages.length})：
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                      gap: 8,
                    }}
                  >
                    {existingImages.map((url, i) => (
                      <div
                        key={i}
                        style={{
                          position: "relative",
                          aspectRatio: "16/9",
                          borderRadius: 8,
                          overflow: "hidden",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <img
                          src={url}
                          alt={`Existing ${i + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeExistingImage(i)}
                          style={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            background: "rgba(0,0,0,0.7)",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            padding: "2px 6px",
                            fontSize: 12,
                            cursor: "pointer",
                          }}
                        >
                          删除
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 文件上传 - 美化版 */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="edit-job-image-upload"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    border: "2px dashed var(--border)",
                    borderRadius: "12px",
                    background: "rgba(249,115,22,0.05)",
                    cursor: uploadingImages || saving ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!uploadingImages && !saving) {
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
                    点击添加新图片
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>
                    支持 JPG、PNG、WebP，每张最大 5MB
                    {existingImages.length > 0 && ` (还可添加 ${5 - existingImages.length} 张)`}
                  </div>
                </label>
                <input
                  id="edit-job-image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageFilesChange}
                  disabled={uploadingImages || saving}
                  style={{ display: "none" }}
                />

                {/* 显示新选择的文件 */}
                {imageFiles.length > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>
                      新选择的图片 ({imageFiles.length})：
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

              {/* 或者输入 URL（仅当没有现有图片时） */}
              {existingImages.length === 0 && (
                <>
                  <div
                    style={{
                      textAlign: "center",
                      margin: "12px 0",
                      color: "var(--muted)",
                      fontSize: 12,
                    }}
                  >
                    或
                  </div>

                  <input
                    name="imageUrlsText"
                    value={form.imageUrlsText}
                    onChange={handleChange}
                    placeholder="粘贴图片链接，用逗号分隔"
                    disabled={imageFiles.length > 0}
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
                </>
              )}

              {/* 🆕 预览新添加的图片（仅显示新选择的文件预览） */}
              {imageFiles.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <p style={{ fontSize: 12, marginBottom: 6, fontWeight: 500 }}>
                    新添加的图片预览：
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                      gap: 8,
                    }}
                  >
                    {imageFiles.map((file, i) => (
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
                          src={URL.createObjectURL(file)}
                          alt={`New ${i + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 如果没有现有图片且输入了 URL，显示 URL 预览 */}
              {existingImages.length === 0 && form.imageUrlsText && !imageFiles.length && (
                <div style={{ marginTop: 12 }}>
                  <p style={{ fontSize: 12, marginBottom: 6, fontWeight: 500 }}>
                    图片预览：
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                      gap: 8,
                    }}
                  >
                    {form.imageUrlsText
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean)
                      .map((url, i) => (
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

            {/* 职位描述 */}
            <div className="form-field" style={{ marginTop: 24 }}>
              <label>职位描述</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="简单介绍你们需要什么样的人、主要工作内容、上班时间等等…"
                style={{ minHeight: 120 }}
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
                disabled={saving || uploadingImages}
                style={{ background: "#6b7280" }}
              >
                返回
              </button>
              <button
                type="submit"
                className="btn"
                disabled={saving || uploadingImages}
                style={{ minWidth: 120 }}
              >
                {uploadingImages
                  ? "正在上传图片..."
                  : saving
                  ? "保存中…"
                  : "保存修改"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}