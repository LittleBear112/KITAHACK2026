// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import { useAuthState } from "../lib/useAuthState";
import { useRole } from "../lib/useRole";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, loading: authLoading } = useAuthState();
  const { role, loaded: roleLoaded } = useRole();

  const [myApps, setMyApps] = useState([]);
  const [myJobs, setMyJobs] = useState([]);
  const [plan, setPlan] = useState(null);

  const [loadingApps, setLoadingApps] = useState(true);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [loadingPlan, setLoadingPlan] = useState(true);

  // Applications I made
  useEffect(() => {
    if (!user) {
      setMyApps([]);
      setLoadingApps(false);
      return;
    }

    const appsRef = ref(db, "applications");
    const unsub = onValue(
      appsRef,
      (snap) => {
        if (!snap.exists()) {
          setMyApps([]);
          setLoadingApps(false);
          return;
        }
        const list = [];
        snap.forEach((jobSnap) => {
          jobSnap.forEach((appSnap) => {
            const v = appSnap.val();
            if (v.userId === user.uid) {
              list.push({ id: appSnap.key, jobId: jobSnap.key, ...v });
            }
          });
        });
        list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setMyApps(list);
        setLoadingApps(false);
      },
      () => {
        setMyApps([]);
        setLoadingApps(false);
      }
    );

    return () => unsub();
  }, [user]);

  // Jobs I posted as employer
  useEffect(() => {
    if (!user) {
      setMyJobs([]);
      setLoadingJobs(false);
      return;
    }

    const jobsRef = ref(db, "jobs");
    const unsub = onValue(
      jobsRef,
      (snap) => {
        if (!snap.exists()) {
          setMyJobs([]);
          setLoadingJobs(false);
          return;
        }
        const list = [];
        snap.forEach((jobSnap) => {
          const v = jobSnap.val();
          if (v.ownerId === user.uid) {
            list.push({ id: jobSnap.key, ...v });
          }
        });
        list.sort((a, b) => (b.postedAt || 0) - (a.postedAt || 0));
        setMyJobs(list);
        setLoadingJobs(false);
      },
      () => {
        setMyJobs([]);
        setLoadingJobs(false);
      }
    );

    return () => unsub();
  }, [user]);

  // Employer plan
  useEffect(() => {
    if (!user) {
      setPlan(null);
      setLoadingPlan(false);
      return;
    }

    const planRef = ref(db, "plans/" + user.uid);
    const unsub = onValue(
      planRef,
      (snap) => {
        setPlan(snap.val() || null);
        setLoadingPlan(false);
      },
      () => {
        setPlan(null);
        setLoadingPlan(false);
      }
    );
    return () => unsub();
  }, [user]);

  if (authLoading || !roleLoaded) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container">
        <div className="card">
          <h2>Dashboard</h2>
          <p>请先登录查看你的数据。</p>
          <Link className="btn" to="/login" style={{ marginTop: 12 }}>
            去登录
          </Link>
        </div>
      </div>
    );
  }

  const totalApps = myApps.length;
  const totalJobs = myJobs.length;

  return (
    <div className="container dashboard">
      {/* Hero */}
      <div className="card dashboard-hero">
        <div>
          <p className="muted">欢迎回来</p>
          <h2 style={{ margin: "6px 0 4px" }}>{user.email}</h2>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            当前身份：{role === "employer" ? "雇主" : "求职者"}
          </p>
        </div>

        <div className="dashboard-hero-actions">
          <Link className="btn" to="/jobs">
            🔍 找工作
          </Link>
          <Link className="btn" to="/employer/post">
            ➕ 发布职位
          </Link>
          <Link className="btn" to="/employer">
            📊 雇主仪表盘
          </Link>
        </div>
      </div>

      {/* Plan status for employer */}
      {role === "employer" && (
        <div className="card">
          <h3>雇主套餐状态</h3>
          {loadingPlan ? (
            <p className="muted">读取中...</p>
          ) : !plan ? (
            <p className="muted">
              还没有开通套餐。在发布职位页面可以开通试用（3 次免费发布）。
            </p>
          ) : (
            <>
              <p style={{ marginTop: 6 }}>
                当前套餐：{" "}
                <strong>
                  {plan.planType === "trial"
                    ? "试用（3 次免费发布）"
                    : plan.planType === "per_post"
                    ? "按帖计费"
                    : plan.planType === "monthly"
                    ? "月度套餐"
                    : "未设置"}
                </strong>
              </p>
              <p style={{ marginTop: 4 }}>
                剩余发布次数：{" "}
                <strong>{plan.credits != null ? plan.credits : 0}</strong>
              </p>
            </>
          )}
        </div>
      )}

      {/* Stats */}
      <div className="statgrid">
        <div className="stat">
          <div className="stat-value">{totalApps}</div>
          <div className="stat-label">我的申请</div>
        </div>
        <div className="stat">
          <div className="stat-value">{totalJobs}</div>
          <div className="stat-label">我发布的职位</div>
        </div>
        <div className="stat">
          <div className="stat-value">0</div>
          <div className="stat-label">获得 Offer</div>
        </div>
        <div className="stat">
          <div className="stat-value">0</div>
          <div className="stat-label">被拒记录</div>
        </div>
      </div>

      {/* Applications */}
      <div className="card">
        <div className="section-title">
          <h3>我的申请</h3>
        </div>
        {loadingApps && <p>读取中...</p>}
        {!loadingApps && myApps.length === 0 && (
          <p className="muted">你还没有投递任何职位。</p>
        )}
        {!loadingApps && myApps.length > 0 && (
          <ul>
            {myApps.map((app) => (
              <li key={app.id} style={{ marginBottom: 6 }}>
                <strong>{app.jobTitle || "职位"}</strong>{" "}
                · {app.status || "已投递"}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Employer jobs */}
      {role === "employer" && (
        <div className="card">
          <div className="section-title">
            <h3>我发布的职位（雇主）</h3>
          </div>
          {loadingJobs && <p>读取中...</p>}
          {!loadingJobs && myJobs.length === 0 && (
            <p className="muted">你还没有发布任何职位。</p>
          )}
          {!loadingJobs && myJobs.length > 0 && (
            <ul>
              {myJobs.map((job) => (
                <li key={job.id} style={{ marginBottom: 6 }}>
                  <Link to={`/jobs/${job.id}`}>
                    <strong>{job.title}</strong>
                  </Link>{" "}
                  · {job.location}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
