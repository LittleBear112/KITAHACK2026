// src/pages/Dashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";
import { useRole } from "../lib/useRole";
import { useLanguage } from "../lib/i18n";

export default function Dashboard() {
  const { user, loading: authLoading } = useAuthState();
  const { role, loaded: roleLoaded } = useRole();
  const { t, lang } = useLanguage();

  const [mode, setMode] = useState("employee");

  const [appsRaw, setAppsRaw] = useState([]);
  const [appsLoading, setAppsLoading] = useState(true);

  const [jobsRaw, setJobsRaw] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);

  // 翻译辅助
  const tf = (key, zh, en) => {
    const v = t(key);
    if (v && v !== key) return v;
    return lang === "zh" ? zh : en;
  };

  // 根据角色设置默认模式（只在加载完成后自动一次）
  useEffect(() => {
    if (!roleLoaded) return;
    if (role === "employer") {
      setMode("employer");
    } else {
      setMode("employee");
    }
  }, [role, roleLoaded]);

  /* ================== 读取当前用户申请 ================== */
  useEffect(() => {
    if (!user) {
      setAppsRaw([]);
      setAppsLoading(false);
      return;
    }

    const appsRef = ref(db, "applications");
    const unsub = onValue(
      appsRef,
      (snap) => {
        if (!snap.exists()) {
          setAppsRaw([]);
          setAppsLoading(false);
          return;
        }
        const val = snap.val() || {};
        const list = [];

        Object.entries(val).forEach(([jobId, jobApps]) => {
          if (!jobApps || typeof jobApps !== "object") return;
          Object.entries(jobApps).forEach(([appId, app]) => {
            if (!app || typeof app !== "object") return;
            if (app.userId !== user.uid) return;
            list.push({ id: appId, jobId, ...app });
          });
        });

        list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setAppsRaw(list);
        setAppsLoading(false);
      },
      () => {
        setAppsRaw([]);
        setAppsLoading(false);
      }
    );
    return () => unsub();
  }, [user]);

  /* ================== 读取所有 jobs ================== */
  useEffect(() => {
    if (!user) {
      setJobsRaw([]);
      setJobsLoading(false);
      return;
    }

    const jobsRef = ref(db, "jobs");
    const unsub = onValue(
      jobsRef,
      (snap) => {
        if (!snap.exists()) {
          setJobsRaw([]);
          setJobsLoading(false);
          return;
        }
        const val = snap.val() || {};
        const list = Object.entries(val).map(([id, job]) => ({
          id,
          ...job,
        }));
        setJobsRaw(list);
        setJobsLoading(false);
      },
      () => {
        setJobsRaw([]);
        setJobsLoading(false);
      }
    );
    return () => unsub();
  }, [user]);

  // jobs map
  const jobsById = useMemo(() => {
    const map = {};
    jobsRaw.forEach((job) => {
      map[job.id] = job;
    });
    return map;
  }, [jobsRaw]);

  // 拼好“我的申请”
  const myApps = useMemo(
    () =>
      appsRaw.map((app) => {
        const job = jobsById[app.jobId] || {};
        return {
          ...app,
          jobTitle: app.jobTitle || job.title || "",
          companyName: job.companyName || "",
          location: job.location || "",
          salaryMin: job.salaryMin,
          salaryMax: job.salaryMax,
          employmentType: job.employmentType,
        };
      }),
    [appsRaw, jobsById]
  );

  // “我发布的职位”
  const myJobs = useMemo(
    () =>
      jobsRaw.filter(
        (job) => job.ownerId && user && job.ownerId === user.uid
      ),
    [jobsRaw, user]
  );

  // Loading / 未登录
  if (authLoading || !roleLoaded) {
    return (
      <div className="container">
        <div className="card">
          <p>{tf("dashboard_loading", "加载中…", "Loading…")}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container">
        <div className="card">
          <p>
            {tf(
              "dashboard_need_login",
              "请先登录后查看仪表盘。",
              "Please sign in to view your dashboard."
            )}
          </p>
        </div>
      </div>
    );
  }

  const greetingName =
    (user.displayName && user.displayName.split(" ")[0]) || user.email || "";

  return (
    <div className="container">
      {/* 顶部问候 + 模式切换 */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ marginTop: 0, marginBottom: 4 }}>
              {tf("dashboard_hello", "你好，", "Hi, ")}
              {greetingName}
            </h2>
            <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
              {tf(
                "dashboard_intro",
                "这里可以快速查看你申请的职位和你发布的职位。",
                "Here you can quickly see the jobs you applied to and the ones you posted."
              )}
            </p>
          </div>

          <div
            style={{
              background: "rgba(15,23,42,0.85)",
              padding: 4,
              borderRadius: 999,
              display: "flex",
              gap: 4,
            }}
          >
            <button
              type="button"
              onClick={() => setMode("employee")}
              className="btn-ghost"
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                background:
                  mode === "employee" ? "var(--primary)" : "transparent",
                color: mode === "employee" ? "#fff" : "var(--muted)",
              }}
            >
              {tf("dashboard_mode_employee", "求职模式", "Job seeker")}
            </button>
            <button
              type="button"
              onClick={() => setMode("employer")}
              className="btn-ghost"
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                background:
                  mode === "employer" ? "var(--primary)" : "transparent",
                color: mode === "employer" ? "#fff" : "var(--muted)",
              }}
            >
              {tf("dashboard_mode_employer", "雇主模式", "Employer")}
            </button>
          </div>
        </div>
      </div>

      {/* 主体：两种模式二选一展示 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "flex-start",
        }}
      >
        {mode === "employee" && (
          <div style={{ flex: 2, minWidth: 260 }}>
            <MyApplicationsCard
              tf={tf}
              apps={myApps}
              loading={appsLoading}
            />
          </div>
        )}

        {mode === "employer" && (
          <div style={{ flex: 2, minWidth: 260 }}>
            <MyJobsCard tf={tf} jobs={myJobs} loading={jobsLoading} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ======================================================
   我申请的职位（求职模式样式）
====================================================== */
function MyApplicationsCard({ tf, apps, loading }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <h3 style={{ margin: 0 }}>
          {tf("dashboard_myApps_title", "我申请的职位", "My applications")}
        </h3>
        <Link to="/jobs" className="btn-ghost" style={{ fontSize: 12 }}>
          {tf("dashboard_myApps_findMore", "继续找工作", "Find more jobs")}
        </Link>
      </div>

      {loading ? (
        <p style={{ fontSize: 14 }}>
          {tf(
            "dashboard_myApps_loading",
            "正在加载你申请的职位…",
            "Loading your applications…"
          )}
        </p>
      ) : apps.length === 0 ? (
        <p style={{ fontSize: 14, color: "var(--muted)" }}>
          {tf(
            "dashboard_myApps_empty",
            "你还没有申请任何职位。",
            "You haven't applied to any jobs yet."
          )}
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {apps.map((app) => (
            <ApplicationRow key={app.id} app={app} tf={tf} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ======================================================
   我发布的职位（雇主模式样式，改成和上面一样的卡片）
====================================================== */
function MyJobsCard({ tf, jobs, loading }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <h3 style={{ margin: 0 }}>
          {tf("dashboard_myJobs_title", "我发布的职位", "Jobs I posted")}
        </h3>
        <Link to="/employer" className="btn-ghost" style={{ fontSize: 12 }}>
          {tf("dashboard_myJobs_manage", "管理职位", "Manage jobs")}
        </Link>
      </div>

      {loading ? (
        <p style={{ fontSize: 14 }}>
          {tf(
            "dashboard_myJobs_loading",
            "正在加载你发布的职位…",
            "Loading jobs you posted…"
          )}
        </p>
      ) : jobs.length === 0 ? (
        <p style={{ fontSize: 14, color: "var(--muted)" }}>
          {tf(
            "dashboard_myJobs_empty",
            "你还没有发布任何职位。",
            "You haven't posted any jobs yet."
          )}
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} tf={tf} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ======================================================
   单条申请的展示（求职模式）
====================================================== */
function ApplicationRow({ app, tf }) {
  const company =
    app.companyName ||
    tf("jobs_fallback_company", "公司名称", "Company name");
  const location =
    app.location || tf("jobs_fallback_location", "工作地点", "Location");

  const { label, color, bg } = getApplicationStatusStyle(app.status, tf);
  const createdAt = app.createdAt
    ? new Date(app.createdAt).toLocaleDateString()
    : "";
  const salaryText = formatAppSalary(app);

  return (
    <div className="card" style={{ padding: 12, borderRadius: 14 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <Link
            to={`/jobs/${app.jobId}`}
            style={{
              textDecoration: "none",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                fontSize: 15,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {app.jobTitle || tf("jobs_fallback_title", "职位", "Job")}
            </div>
          </Link>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            {company} · {location}
          </div>
        </div>

        <span
          style={{
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 11,
            background: bg,
            color,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>

      {salaryText && (
        <div
          style={{
            marginTop: 4,
            fontSize: 13,
            color: "var(--primary)",
            fontWeight: 600,
          }}
        >
          {salaryText}
        </div>
      )}

      <div
        style={{
          marginTop: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "var(--muted)",
        }}
      >
        <span>
          {createdAt &&
            tf(
              "application_applied_at",
              `申请于 ${createdAt}`,
              `Applied on ${createdAt}`
            )}
        </span>

        <Link
          to={`/jobs/${app.jobId}`}
          style={{
            textDecoration: "none",
            color: "var(--primary)",
          }}
        >
          {tf(
            "application_view_job",
            "查看职位详情",
            "View job details"
          )}
        </Link>
      </div>
    </div>
  );
}

/* ======================================================
   单条职位展示（雇主模式样式，参照上面的申请卡片）
====================================================== */
function JobRow({ job, tf }) {
  const company =
    job.companyName ||
    tf("jobs_fallback_company", "公司名称", "Company name");
  const location =
    job.location || tf("jobs_fallback_location", "工作地点", "Location");

  const createdAt = job.createdAt
    ? new Date(job.createdAt).toLocaleDateString()
    : "";
  const salaryText = formatJobSalary(job);

  const isClosed = job.status === "closed";
  const statusLabel = isClosed
    ? tf("job_status_closed", "已关闭", "Closed")
    : tf("job_status_open", "开放中", "Open");
  const statusColor = isClosed ? "#b91c1c" : "#15803d";
  const statusBg = isClosed
    ? "rgba(248,113,113,0.18)"
    : "rgba(34,197,94,0.15)";

  return (
    <div className="card" style={{ padding: 12, borderRadius: 14 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <Link
            to={`/jobs/${job.id}`}
            style={{
              textDecoration: "none",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                fontSize: 15,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {job.title || tf("jobs_fallback_title", "职位", "Job")}
            </div>
          </Link>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            {company} · {location}
          </div>
        </div>

        <span
          style={{
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 11,
            background: statusBg,
            color: statusColor,
            whiteSpace: "nowrap",
          }}
        >
          {statusLabel}
        </span>
      </div>

      {salaryText && (
        <div
          style={{
            marginTop: 4,
            fontSize: 13,
            color: "var(--primary)",
            fontWeight: 600,
          }}
        >
          {salaryText}
        </div>
      )}

      <div
        style={{
          marginTop: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "var(--muted)",
        }}
      >
        <span>
          {createdAt &&
            tf(
              "job_posted_at",
              `发布于 ${createdAt}`,
              `Posted on ${createdAt}`
            )}
        </span>

        <Link
          to={`/jobs/${job.id}/applicants`}
          style={{
            textDecoration: "none",
            color: "var(--primary)",
          }}
        >
          {tf("job_view_applicants", "查看申请人", "View applicants")}
        </Link>
      </div>
    </div>
  );
}

/* ================= 工具函数 ================= */

function getApplicationStatusStyle(status, tf) {
  switch (status) {
    case "viewed":
      return {
        label: tf("application_status_viewed", "已查看", "Viewed"),
        color: "#0f766e",
        bg: "rgba(45,212,191,0.15)",
      };
    case "shortlisted":
      return {
        label: tf("application_status_shortlisted", "已入选", "Shortlisted"),
        color: "#15803d",
        bg: "rgba(34,197,94,0.12)",
      };
    case "rejected":
      return {
        label: tf("application_status_rejected", "未通过", "Rejected"),
        color: "#b91c1c",
        bg: "rgba(239,68,68,0.12)",
      };
    case "hired":
      return {
        label: tf("application_status_hired", "已录用", "Hired"),
        color: "#1d4ed8",
        bg: "rgba(37,99,235,0.12)",
      };
    default:
      return {
        label: tf("application_status_applied", "已申请", "Applied"),
        color: "#6b7280",
        bg: "rgba(148,163,184,0.18)",
      };
  }
}

function formatAppSalary(app) {
  const { salaryMin, salaryMax, employmentType } = app;
  if (!salaryMin && !salaryMax) return "";
  const suffix = employmentType === "parttime" ? "/ 小时" : "/ 月";
  if (salaryMin && salaryMax) return `RM ${salaryMin} - ${salaryMax} ${suffix}`;
  return `RM ${salaryMin || salaryMax} ${suffix}`;
}

function formatJobSalary(job) {
  const { salaryMin, salaryMax, employmentType } = job;
  if (!salaryMin && !salaryMax) return "";
  const suffix = employmentType === "parttime" ? "/ 小时" : "/ 月";
  if (salaryMin && salaryMax) return `RM ${salaryMin} - ${salaryMax} ${suffix}`;
  return `RM ${salaryMin || salaryMax} ${suffix}`;
}
