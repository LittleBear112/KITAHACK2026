// src/pages/EmployerDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref, onValue, update, remove } from "firebase/database";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";
import { useLanguage } from "../lib/i18n";

export default function EmployerDashboard() {
  const { user } = useAuthState();
  const { t, lang } = useLanguage();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const tf = (key, zh, en) => {
    const v = t(key);
    if (v && v !== key) return v;
    return lang === "zh" ? zh : en;
  };

  /* ------------------- 读取雇主发布的职位 ------------------- */
  useEffect(() => {
    if (!user) return;

    const jobsRef = ref(db, "jobs");
    const unsub = onValue(
      jobsRef,
      (snap) => {
        if (!snap.exists()) {
          setJobs([]);
          setLoading(false);
          return;
        }

        const arr = Object.entries(snap.val())
          .map(([id, v]) => ({ id, ...v }))
          .filter((job) => job.ownerId === user.uid);

        // 按创建时间倒序（新的在上）
        arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        setJobs(arr);
        setLoading(false);
      },
      () => {
        setJobs([]);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [user]);

  /* ------------------- 打开 / 关闭 职位 ------------------- */
  async function closeJob(jobId) {
    await update(ref(db, "jobs/" + jobId), { status: "closed" });
  }

  async function openJob(jobId) {
    await update(ref(db, "jobs/" + jobId), { status: "open" });
  }

  /* ------------------- 删除职位 ------------------- */
  async function deleteJob(jobId) {
    const ok = window.confirm(
      tf(
        "employer_delete_confirm",
        "确定要删除这个职位吗？",
        "Are you sure you want to delete this job?"
      )
    );
    if (!ok) return;
    await remove(ref(db, "jobs/" + jobId));
  }

  if (!user) {
    return (
      <div className="card" style={{ padding: 20 }}>
        {tf(
          "employer_need_login",
          "请先登录后再管理职位。",
          "Please sign in to manage your jobs."
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* 顶部标题区 */}
      <div
        className="card"
        style={{
          padding: "20px 24px",
          borderRadius: 24,
          marginBottom: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 26 }}>
            {tf("employer_dashboard_title", "雇主仪表盘", "Employer dashboard")}
          </h1>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 14,
              color: "var(--muted)",
            }}
          >
            {tf(
              "employer_dashboard_sub",
              "这里可以查看和管理你发布的所有职位。",
              "Here you can manage all the jobs you posted."
            )}
          </p>
        </div>

        {/* 右侧按钮：套餐 + 发新职位 */}
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          <Link
            to="/employer/plan"
            className="btn-ghost"
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: 14,
              whiteSpace: "nowrap",
            }}
          >
            {tf("employer_plan_btn", "我的套餐 / 升级", "My plan / Upgrade")}
          </Link>

          <Link
            to="/employer/post"
            className="btn"
            style={{
              padding: "10px 26px",
              borderRadius: 999,
              boxShadow: "0 18px 40px rgba(249,115,22,0.45)",
              whiteSpace: "nowrap",
              fontWeight: 600,
            }}
          >
            {tf("employer_new_job", "+ 发布一个新职位", "+ Post a new job")}
          </Link>
        </div>
      </div>

      {/* 职位列表卡片外壳 */}
      <div
        className="card"
        style={{
          padding: 24,
          borderRadius: 24,
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          {tf("employer_my_jobs", "我发布的职位", "Jobs I posted")}
        </h2>

        {loading && (
          <p style={{ color: "var(--muted)", marginTop: 10 }}>
            {tf("employer_loading", "加载中…", "Loading…")}
          </p>
        )}

        {!loading && jobs.length === 0 && (
          <p style={{ color: "var(--muted)", marginTop: 10 }}>
            {tf(
              "employer_no_jobs",
              "你还没有发布任何职位。",
              "You haven't posted any jobs yet."
            )}
          </p>
        )}

        {!loading &&
          jobs.map((job) => {
            const isClosed = job.status === "closed";
            const cover =
              (Array.isArray(job.images) && job.images[0]) ||
              job.imageUrl ||
              "https://via.placeholder.com/120x90";

            const salaryText =
              job.salaryMin && job.salaryMax
                ? `RM ${job.salaryMin} - ${job.salaryMax}`
                : job.salaryMin || job.salaryMax
                ? `RM ${job.salaryMin || job.salaryMax}`
                : "";

            const salarySuffix =
              job.employmentType === "parttime"
                ? tf("employer_salary_hour", "/ 小时", "/ hour")
                : tf("employer_salary_month", "/ 月", "/ month");

            return (
              <div
                key={job.id}
                style={{
                  marginTop: 14,
                  padding: 16,
                  borderRadius: 18,
                  border: "1px solid rgba(30,64,175,0.25)",
                  background:
                    "radial-gradient(circle at 0 0,rgba(15,23,42,0.96),rgba(15,23,42,0.92))",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 16,
                  alignItems: "center",
                }}
              >
                {/* 封面图 */}
                <div
                  style={{
                    width: 120,
                    height: 90,
                    borderRadius: 14,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={cover}
                    alt={job.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* 中间文字信息 */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 18,
                          fontWeight: 600,
                        }}
                      >
                        {job.title}
                      </h3>
                      <p
                        style={{
                          margin: "4px 0",
                          color: "var(--muted)",
                          fontSize: 13,
                        }}
                      >
                        {job.companyName} · {job.location}
                      </p>
                    </div>
                  </div>

                  {salaryText && (
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        color: "var(--primary)",
                        fontSize: 14,
                      }}
                    >
                      {salaryText} {salarySuffix}
                    </p>
                  )}

                  {/* 按钮行 */}
                  <div
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn-pill btn-pill-grey"
                    >
                      {tf("employer_btn_view", "查看", "View")}
                    </Link>

                    <Link
                      to={`/employer/jobs/${job.id}/edit`}
                      className="btn-pill btn-pill-grey"
                    >
                      {tf("employer_btn_edit", "编辑", "Edit")}
                    </Link>

                    <Link
                      to={`/employer/jobs/${job.id}/applicants`}
                      className="btn-pill btn-pill-blue"
                    >
                      {tf(
                        "employer_btn_applicants",
                        "查看申请人",
                        "Applicants"
                      )}
                    </Link>

                    {isClosed ? (
                      <button
                        type="button"
                        onClick={() => openJob(job.id)}
                        className="btn-pill btn-pill-green"
                      >
                        {tf("employer_btn_open", "重新开放", "Open job")}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => closeJob(job.id)}
                        className="btn-pill btn-pill-green"
                      >
                        {tf("employer_btn_close", "关闭职位", "Close job")}
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => deleteJob(job.id)}
                      className="btn-pill btn-pill-red"
                    >
                      {tf("employer_btn_delete", "删除", "Delete")}
                    </button>
                  </div>
                </div>

                {/* 右侧状态 Badge */}
                <div
                  style={{
                    alignSelf: "flex-start",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      background: isClosed
                        ? "rgba(148,163,184,0.2)"
                        : "rgba(16,185,129,0.18)",
                      color: isClosed ? "#e5e7eb" : "#4ade80",
                      fontWeight: 500,
                    }}
                  >
                    {isClosed
                      ? tf("employer_job_closed", "已关闭", "Closed")
                      : tf("employer_job_open", "开放中", "Open")}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
