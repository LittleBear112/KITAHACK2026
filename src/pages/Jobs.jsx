// src/pages/Jobs.jsx - COMPLETE OPTIMIZED VERSION
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebase";
import { useLanguage } from "../lib/i18n";

export default function Jobs() {
  const { t, lang } = useLanguage();

  // 带默认文案的翻译函数（如果 key 不存在就用 fallback）
  const tf = (key, zh, en) => {
    const v = t(key);
    if (v && v !== key) return v;
    return lang === "zh" ? zh : en;
  };

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 过滤条件
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // JobStreet 一样：左边列表 + 右边预览
  const [selectedJobId, setSelectedJobId] = useState(null);

  // 载入所有职位
  useEffect(() => {
    const jobsRef = ref(db, "jobs");
    const unsub = onValue(
      jobsRef,
      (snap) => {
        if (!snap.exists()) {
          setJobs([]);
          setLoading(false);
          return;
        }
        const val = snap.val() || {};
        const list = Object.entries(val)
          .map(([id, job]) => ({ id, ...job }))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setJobs(list);
        setLoading(false);
      },
      () => {
        setJobs([]);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  // 解析图片字段（支持 images / imageUrls / imageUrl）
  const explodeImages = (val) => {
    if (!val) return [];

    if (Array.isArray(val)) {
      return val
        .filter(Boolean)
        .flatMap((item) =>
          typeof item === "string" ? item.split(",") : []
        );
    }

    if (typeof val === "object") {
      return Object.values(val)
        .filter(Boolean)
        .flatMap((item) =>
          typeof item === "string" ? item.split(",") : []
        );
    }

    if (typeof val === "string") {
      return val.split(",");
    }

    return [];
  };

  const getJobImages = (job) => {
    let images = explodeImages(job.images || job.imageUrls || job.imageUrl);
    return images.map((s) => s.trim()).filter(Boolean);
  };

  // 过滤后的职位
  const filteredJobs = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    const loc = location.trim().toLowerCase();

    return jobs.filter((job) => {
      // 类型过滤
      if (typeFilter !== "all") {
        if ((job.employmentType || "") !== typeFilter) return false;
      }

      // 关键词：标题 / 公司
      if (kw) {
        const haystack = `${job.title || ""} ${
          job.companyName || ""
        }`.toLowerCase();
        if (!haystack.includes(kw)) return false;
      }

      // 地点过滤
      if (loc) {
        const locStr = `${job.location || ""}`.toLowerCase();
        if (!locStr.includes(loc)) return false;
      }

      return true;
    });
  }, [jobs, keyword, location, typeFilter]);

  const selectedJob = useMemo(
    () => filteredJobs.find((j) => j.id === selectedJobId) || null,
    [filteredJobs, selectedJobId]
  );

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>{tf("jobs_loading", "正在加载职位…", "Loading jobs…")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container jobs-page" style={{ paddingBottom: 32 }}>
      {/* 搜索 / 筛选区域 */}
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>
          {tf("jobs_title", "搜索职位", "Find Jobs")}
        </h2>

        <div className="jobs-filter">
          <div className="jobs-filter-input">
            <div className="search-row">
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={tf(
                  "jobs_keyword_placeholder",
                  "关键词，例如: 服务员 / Software Engineer",
                  "Keyword, e.g. Waiter / Software Engineer"
                )}
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={tf(
                  "jobs_location_placeholder",
                  "地点，例如: Sunway / Ipoh",
                  "Location, e.g. Sunway / Ipoh"
                )}
              />
            </div>
          </div>

          <div className="jobs-filter-row">
            {/* 类型筛选 */}
            <div className="jobs-filter-type">
              <button
                type="button"
                className={
                  "jobs-chip" +
                  (typeFilter === "all" ? " jobs-chip--active" : "")
                }
                onClick={() => setTypeFilter("all")}
              >
                {tf("jobs_filter_all", "全部类型", "All types")}
              </button>
              <button
                type="button"
                className={
                  "jobs-chip" +
                  (typeFilter === "parttime" ? " jobs-chip--active" : "")
                }
                onClick={() => setTypeFilter("parttime")}
              >
                {tf("jobs_filter_parttime", "小时工", "Part-time")}
              </button>
              <button
                type="button"
                className={
                  "jobs-chip" +
                  (typeFilter === "fulltime" ? " jobs-chip--active" : "")
                }
                onClick={() => setTypeFilter("fulltime")}
              >
                {tf("jobs_filter_fulltime", "全职", "Full-time")}
              </button>
              <button
                type="button"
                className={
                  "jobs-chip" +
                  (typeFilter === "intern" ? " jobs-chip--active" : "")
                }
                onClick={() => setTypeFilter("intern")}
              >
                {tf("jobs_filter_intern", "实习", "Internship")}
              </button>
            </div>

            <div className="jobs-filter-actions">
              <button
                type="button"
                className="btn-ghost"
                onClick={() => {
                  setKeyword("");
                  setLocation("");
                  setTypeFilter("all");
                  setSelectedJobId(null);
                }}
              >
                {tf("jobs_reset", "重置筛选", "Reset")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* JobStreet 风格：左侧列表 + 右侧详情预览 */}
      <div className="card">
        <div
          className="jobs-master-layout"
          style={{
            display: "flex",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          {/* 左侧职位列表 */}
          <div
            className="jobs-list-column"
            style={{
              flex: 1,
              minWidth: 0,
              borderRight: "1px solid var(--border)",
              paddingRight: 12,
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>
              {tf("jobs_recommend", "推荐职位", "Recommended jobs")}
            </h3>

            {filteredJobs.length === 0 ? (
              <p style={{ color: "var(--muted)", fontSize: 14 }}>
                {tf(
                  "jobs_empty",
                  "暂时没有符合条件的职位。",
                  "No jobs found for this filter."
                )}
              </p>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {filteredJobs.map((job) => (
                  <JobListItem
                    key={job.id}
                    job={job}
                    tf={tf}
                    images={getJobImages(job)}
                    selected={job.id === selectedJobId}
                    onSelect={() => setSelectedJobId(job.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 右侧：职位详情预览 */}
          <div
            className="jobs-detail-column"
            style={{
              flex: 1.2,
              minWidth: 0,
              paddingLeft: 12,
            }}
          >
            {selectedJob ? (
              <JobPreview
                job={selectedJob}
                tf={tf}
                lang={lang}
                images={getJobImages(selectedJob)}
              />
            ) : (
              <div
                style={{
                  height: "100%",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "var(--muted)",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: "rgba(148,163,184,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 40,
                  }}
                >
                  ☝️
                </div>
                <div style={{ fontSize: 16, fontWeight: 500 }}>
                  {tf(
                    "jobs_select_placeholder_title",
                    "选择一个职位",
                    "Select a job"
                  )}
                </div>
                <div style={{ fontSize: 13, textAlign: "center" }}>
                  {tf(
                    "jobs_select_placeholder_sub",
                    "点击左侧列表中的任何职位查看详情和工作环境图片。",
                    "Click any job on the left to see details and environment photos."
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* （可选）小屏幕提示 */}
        <div
          className="jobs-mobile-hint"
          style={{
            marginTop: 12,
            fontSize: 12,
            color: "var(--muted)",
            display: "none",
          }}
        >
          {tf(
            "jobs_mobile_hint",
            "在手机上浏览时，点击职位会跳转到详情页。",
            "On mobile, tap a job to open the full detail page."
          )}
        </div>
      </div>
    </div>
  );
}

// ===== 优化后的职位卡片组件 - 手机端友好 =====
function JobListItem({ job, tf, images, selected, onSelect }) {
  const [imgOk, setImgOk] = useState(true);
  const thumb = images[0] || null;

  // 薪资显示逻辑
  const hasSalary = job.salaryMin || job.salaryMax;
  const isHourly = job.employmentType !== "fulltime";
  const salarySuffix = isHourly
    ? tf("jobs_salary_hourly_suffix", "/ 小时", "/ hour")
    : tf("jobs_salary_monthly_suffix", "/ 月", "/ month");

  const salaryText = hasSalary
    ? `RM ${job.salaryMin || ""}${
        job.salaryMax ? " - " + job.salaryMax : ""
      } ${salarySuffix}`
    : tf("jobs_salary_negotiable", "面议", "Negotiable");

  const typeLabel =
    job.employmentType === "fulltime"
      ? tf("jobs_filter_fulltime", "全职", "Full-time")
      : job.employmentType === "intern"
      ? tf("jobs_filter_intern", "实习", "Intern")
      : tf("jobs_filter_parttime", "兼职 / 小时工", "Part-time / Hourly");

  const company =
    job.companyName ||
    tf("jobs_fallback_company", "公司名称", "Company");
  const location =
    job.location ||
    tf("jobs_fallback_location", "工作地点", "Location");

  const placeholderInitial =
    (company || job.title || "?")
      .trim()
      .charAt(0)
      .toUpperCase() || "?";

  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        textAlign: "left",
        border: "1px solid " + (selected ? "var(--primary)" : "var(--border)"),
        background: selected ? "rgba(249, 115, 22, 0.08)" : "var(--card)",
        color: "inherit",
        borderRadius: 16,
        padding: 14,
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        cursor: "pointer",
        transition: "all 0.2s ease",
        marginBottom: 8,
      }}
    >
      {/* 左侧：图片 / 占位首字母 - 优化尺寸 */}
      <div
        style={{
          width: 70,
          minWidth: 70,
          height: 70,
          borderRadius: 12,
          overflow: "hidden",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {thumb && imgOk ? (
          <img
            src={thumb}
            alt={job.title}
            onError={() => setImgOk(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #f97316 0%, #facc15 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
                color: "#0b1020",
              }}
            >
              {placeholderInitial}
            </div>
          </div>
        )}
      </div>

      {/* 右侧：文字信息 - 优化布局 */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          minWidth: 0,
        }}
      >
        {/* 标题 - 可以显示2行 */}
        <h4
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {job.title}
        </h4>

        {/* 公司 & 地点 - flex布局平分空间 */}
        <div
          style={{
            fontSize: 12,
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {company}
          </span>
          {location && (
            <>
              <span>·</span>
              <span
                style={{
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {location}
              </span>
            </>
          )}
        </div>

        {/* 薪资 - 更醒目 */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--primary)",
          }}
        >
          {salaryText}
        </div>

        {/* 职位类型标签 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              background: "rgba(249, 115, 22, 0.15)",
              color: "var(--primary)",
              fontSize: 11,
              fontWeight: 500,
              borderRadius: 6,
              padding: "3px 8px",
              border: "1px solid rgba(249, 115, 22, 0.3)",
            }}
          >
            {typeLabel}
          </span>
          {job.locationTag && (
            <span
              style={{
                fontSize: 11,
                color: "var(--muted)",
              }}
            >
              {job.locationTag}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// 右侧预览 Panel
function JobPreview({ job, tf, lang, images }) {
  const mainImage = images[0] || null;

  const hasSalary = job.salaryMin || job.salaryMax;
  const isHourly = job.employmentType !== "fulltime";
  const salarySuffix = isHourly
    ? tf("jobs_salary_hourly_suffix", "/ 小时", "/ hour")
    : tf("jobs_salary_monthly_suffix", "/ 月", "/ month");

  const salaryText = hasSalary
    ? `RM ${job.salaryMin || ""}${
        job.salaryMax ? " - " + job.salaryMax : ""
      } ${salarySuffix}`
    : tf("jobs_salary_negotiable", "面议", "Negotiable");

  const typeLabel =
    job.employmentType === "fulltime"
      ? tf("jobs_filter_fulltime", "全职", "Full-time")
      : job.employmentType === "intern"
      ? tf("jobs_filter_intern", "实习", "Intern")
      : tf("jobs_filter_parttime", "兼职 / 小时工", "Part-time / Hourly");

  const company =
    job.companyName ||
    tf("jobs_fallback_company", "公司名称", "Company");
  const location =
    job.location ||
    tf("jobs_fallback_location", "工作地点", "Location");

  const desc =
    job.description && job.description.trim().length > 0
      ? job.description.trim()
      : tf("job_description_empty", "暂无详细描述。", "No description yet.");

  const shortDesc =
    desc.length > 240 ? desc.slice(0, 240).trim() + "..." : desc;

  const postedAt = job.createdAt
    ? new Date(job.createdAt).toLocaleDateString()
    : "";

  return (
    <div
      className="jobs-preview-card"
      style={{
        borderRadius: 20,
        border: "1px solid var(--border)",
        padding: 16,
        background: "var(--card-subtle)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%",
      }}
    >
      {mainImage && (
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            background: "#020617",
          }}
        >
          <img
            src={mainImage}
            alt={job.title}
            style={{
              width: "100%",
              maxHeight: 200,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}

      <div>
        <h2
          style={{
            margin: 0,
            marginBottom: 4,
            fontSize: 20,
          }}
        >
          {job.title}
        </h2>
        <div
          style={{
            fontSize: 14,
            color: "var(--muted)",
            marginBottom: 4,
          }}
        >
          {company} · {location}
        </div>
        {postedAt && (
          <div
            style={{
              fontSize: 12,
              color: "var(--muted)",
            }}
          >
            {tf("jobs_posted_on", "发布于", "Posted on")} {postedAt}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            color: "var(--primary)",
            fontSize: 16,
          }}
        >
          {salaryText}
        </span>
        <span
          style={{
            fontSize: 12,
            padding: "3px 8px",
            borderRadius: 999,
            background: "var(--primary-light)",
            color: "var(--primary-on-light)",
          }}
        >
          {typeLabel}
        </span>
      </div>

      <p
        style={{
          marginTop: 4,
          marginBottom: 4,
          fontSize: 14,
          whiteSpace: "pre-wrap",
        }}
      >
        {shortDesc}
      </p>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          {lang === "zh"
            ? "想看更多工作环境图片？点击下方进入详情页。"
            : "Want to see more environment photos? Open the full job page."}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="btn"
          style={{
            fontSize: 14,
            padding: "8px 14px",
            textDecoration: "none",
          }}
        >
          {tf("jobs_view_detail", "查看详情 / 申请", "View details / Apply")}
        </Link>
      </div>
    </div>
  );
}