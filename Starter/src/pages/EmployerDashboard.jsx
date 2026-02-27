// src/pages/EmployerDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ref,
  onValue,
  query,
  orderByChild,
  equalTo,
  remove,
  update
} from "firebase/database";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";

export default function EmployerDashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuthState();

  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [status, setStatus] = useState(null);

  // 简单的“试用套餐”示例
  const planName = "试用（3 次免费发布）";
  const creditsLeft = 3; // 以后如果有真正的 credits，就改成从数据库读取

  // 载入当前用户发布的职位
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setLoadingJobs(false);
      return;
    }

    const jobsRef = query(
      ref(db, "jobs"),
      orderByChild("ownerId"),
      equalTo(user.uid)
    );

    const unsub = onValue(
      jobsRef,
      snap => {
        const val = snap.val() || {};
        const list = Object.entries(val)
          .map(([id, job]) => ({ id, ...job }))
          .sort((a, b) => (b.postedAt || 0) - (a.postedAt || 0)); // 按时间倒序
        setJobs(list);
        setLoadingJobs(false);
      },
      () => setLoadingJobs(false)
    );

    return () => unsub();
  }, [authLoading, user]);

  // 删除职位
  async function handleDelete(id) {
    const ok = window.confirm("确定要删除这个职位吗？删除后无法恢复。");
    if (!ok) return;

    setStatus(null);
    try {
      await remove(ref(db, "jobs/" + id));
      setStatus({ type: "success", message: "职位已删除。" });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "删除失败，请稍后再试。" });
    }
  }

  // 开启 / 关闭 职位
  async function handleToggleActive(job) {
    const newValue = !(job.isActive ?? true); // 默认当作 true
    const text = newValue ? "打开" : "关闭";

    const ok = window.confirm(`确定要${text}这个职位吗？`);
    if (!ok) return;

    setStatus(null);
    try {
      await update(ref(db, "jobs/" + job.id), { isActive: newValue });
      setStatus({
        type: "success",
        message: `职位已${text}（当前状态：${newValue ? "开放中" : "已关闭"}）。`
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: `${text}失败，请稍后再试。`
      });
    }
  }

  if (authLoading) {
    return (
      <div className="card">
        <p>载入中…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="card">
        <h2 style={{ marginTop: 0, marginBottom: 12 }}>雇主权限需要开通</h2>
        <p style={{ color: "var(--muted)", marginBottom: 16 }}>
          当前账号是 <strong>求职者</strong> 身份，不能发布职位。
          <br />
          管理员可以在数据库中把你的 role 改成 "employer"。
        </p>
        <Link to="/dashboard" className="btn">
          返回仪表盘
        </Link>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* 套餐状态 */}
      <div className="card">
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>雇主套餐状态</h2>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          当前套餐：<strong>{planName}</strong>
        </p>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>
          剩余发布次数（credits）：<strong>{creditsLeft}</strong>
        </p>
      </div>

      {/* 雇主仪表盘 + 新职位按钮 */}
      <div className="card">
        <div className="section-title">
          <h2 style={{ margin: 0 }}>雇主仪表盘</h2>
          <button
            className="btn"
            onClick={() => navigate("/employer/post")}
            style={{ whiteSpace: "nowrap" }}
          >
            + 发布一个新职位
          </button>
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
                status.type === "success" ? "var(--success)" : "var(--danger)"
            }}
          >
            {status.message}
          </div>
        )}

        <h3 style={{ marginTop: 0, marginBottom: 12 }}>我发布的职位</h3>

        {loadingJobs ? (
          <p>载入职位中…</p>
        ) : jobs.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>还没有职位。</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >
            {jobs.map(job => {
              const isActive = job.isActive ?? true;
              return (
                <div
                  key={job.id}
                  className="card"
                  style={{
                    padding: 16,
                    margin: 0,
                    boxShadow: "none",
                    border: "1px solid var(--border)"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                      flexWrap: "wrap"
                    }}
                  >
                    {/* 左侧：职位信息 */}
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 16,
                          marginBottom: 4
                        }}
                      >
                        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                      </div>
                      <div style={{ color: "var(--muted)", fontSize: 14 }}>
                        {job.companyName} · {job.location}
                      </div>

                      {job.salaryMin && job.salaryMax && (
                        <div
                          style={{
                            marginTop: 4,
                            fontSize: 14,
                            color: "var(--muted)"
                          }}
                        >
                          RM {job.salaryMin} - {job.salaryMax} / 小时
                        </div>
                      )}

                      <div style={{ marginTop: 6 }}>
                        <span
                          className="badge"
                          style={{
                            background: isActive
                              ? "rgba(16,185,129,0.12)"
                              : "rgba(148,163,184,0.2)",
                            color: isActive ? "#10b981" : "#6b7280"
                          }}
                        >
                          {isActive ? "开放中" : "已关闭"}
                        </span>
                      </div>
                    </div>

                    {/* 右侧：操作按钮 */}
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        justifyContent: "flex-end"
                      }}
                    >
                      <button
                        className="btn"
                        type="button"
                        onClick={() =>
                          navigate(`/employer/jobs/${job.id}/edit`)
                        }
                        style={{
                          background: "var(--primary)",
                          whiteSpace: "nowrap"
                        }}
                      >
                        编辑
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleActive(job)}
                        style={{
                          background: isActive ? "#f59e0b" : "#10b981",
                          color: "#fff",
                          border: "none",
                          borderRadius: 12,
                          padding: "8px 14px",
                          cursor: "pointer",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {isActive ? "关闭职位" : "打开职位"}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(job.id)}
                        style={{
                          background: "#ef4444",
                          color: "#fff",
                          border: "none",
                          borderRadius: 12,
                          padding: "8px 14px",
                          cursor: "pointer",
                          whiteSpace: "nowrap"
                        }}
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
