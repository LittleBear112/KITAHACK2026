// src/pages/MyApplications.jsx
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebase";
import { useAuthState } from "../lib/useAuthState";
import { useLanguage } from "../lib/i18n";

export default function MyApplications() {
  const { user, loading } = useAuthState();
  const { lang, t } = useLanguage();

  const [apps, setApps] = useState([]);
  const [jobs, setJobs] = useState({});
  const [loadingApps, setLoadingApps] = useState(true);
  const [loadingJobs, setLoadingJobs] = useState(true);

  const tf = (key, zh, en) => {
    const v = t(key);
    if (v && v !== key) return v;
    return lang === "zh" ? zh : en;
  };

  // read all applications, filter by current user
  useEffect(() => {
    if (!user) return;

    const appsRef = ref(db, "applications");
    const unsub = onValue(
      appsRef,
      (snap) => {
        if (!snap.exists()) {
          setApps([]);
          setLoadingApps(false);
          return;
        }
        const list = [];
        snap.forEach((jobSnap) => {
          const jobId = jobSnap.key;
          jobSnap.forEach((appSnap) => {
            const val = appSnap.val();
            if (val && val.userId === user.uid) {
              list.push({
                id: appSnap.key,
                jobId,
                ...val,
              });
            }
          });
        });
        list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setApps(list);
        setLoadingApps(false);
      },
      () => {
        setApps([]);
        setLoadingApps(false);
      }
    );

    return () => unsub();
  }, [user]);

  // read jobs so we can show title / company / location
  useEffect(() => {
    const jobsRef = ref(db, "jobs");
    const unsub = onValue(
      jobsRef,
      (snap) => {
        if (!snap.exists()) {
          setJobs({});
          setLoadingJobs(false);
          return;
        }
        const map = {};
        snap.forEach((jobSnap) => {
          map[jobSnap.key] = jobSnap.val();
        });
        setJobs(map);
        setLoadingJobs(false);
      },
      () => {
        setJobs({});
        setLoadingJobs(false);
      }
    );
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const statusLabel = (status) => {
    switch (status) {
      case "shortlisted":
        return tf("myapps_status_shortlisted", "已入围", "Shortlisted");
      case "rejected":
        return tf("myapps_status_rejected", "未被录用", "Not selected");
      case "hired":
        return tf("myapps_status_hired", "已录用", "Hired");
      default:
        return tf("myapps_status_applied", "已申请", "Applied");
    }
  };

  const statusPillClass = (status) => {
    switch (status) {
      case "shortlisted":
        return "pill success";
      case "rejected":
        return "pill danger";
      case "hired":
        return "pill success";
      default:
        return "pill info";
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <h2>{tf("myapps_title", "我的申请", "My applications")}</h2>
        <p className="muted" style={{ marginTop: 4 }}>
          {tf(
            "myapps_subtitle",
            "在这里查看你申请过的所有职位及审批状态。",
            "Here you can see all jobs you have applied for and their status."
          )}
        </p>
      </div>

      <div className="card">
        {(loadingApps || loadingJobs) && <p>Loading...</p>}

        {!loadingApps && !loadingJobs && apps.length === 0 && (
          <p className="muted">
            {tf(
              "myapps_empty",
              "你还没有投递任何职位，去看看最新职位吧！",
              "You haven't applied to any jobs yet. Go explore the latest jobs!"
            )}{" "}
            <Link to="/jobs">
              {tf("myapps_goJobs", "查看职位", "Browse jobs")}
            </Link>
          </p>
        )}

        {!loadingApps &&
          !loadingJobs &&
          apps.length > 0 &&
          apps.map((app) => {
            const job = jobs[app.jobId] || {};
            const createdAt = app.createdAt
              ? new Date(app.createdAt).toLocaleString()
              : "";
            const jobTitle =
              job.title ||
              app.jobTitle ||
              tf("myapps_jobtitle", "职位", "Job");
            const company =
              job.companyName ||
              tf("myapps_company", "公司名称", "Company");
            const location = job.location || "";

            return (
              <div
                key={app.jobId + "_" + app.id}
                className="card"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  marginBottom: 12,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0, marginBottom: 4 }}>{jobTitle}</h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        color: "var(--muted)",
                      }}
                    >
                      {company}
                      {location ? " · " + location : ""}
                    </p>
                    {createdAt && (
                      <p
                        style={{
                          marginTop: 6,
                          fontSize: 12,
                          color: "var(--muted)",
                        }}
                      >
                        {tf(
                          "myapps_appliedAt",
                          "投递时间：",
                          "Applied at: "
                        )}
                        {createdAt}
                      </p>
                    )}
                  </div>

                  <div className={statusPillClass(app.status)}>
                    <span className="dot" />
                    <span style={{ fontSize: 12 }}>
                      {statusLabel(app.status)}
                    </span>
                  </div>
                </div>

                {app.message && (
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {app.message}
                  </p>
                )}

                {app.link && (
                  <p
                    style={{
                      marginTop: 4,
                      fontSize: 13,
                    }}
                  >
                    {tf(
                      "myapps_link",
                      "作品集 / 链接：",
                      "Portfolio / link: "
                    )}
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ wordBreak: "break-all" }}
                    >
                      {app.link}
                    </a>
                  </p>
                )}

                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    to={`/jobs/${app.jobId}`}
                    className="btn"
                    style={{
                      padding: "8px 14px",
                      fontSize: 14,
                      textDecoration: "none",
                    }}
                  >
                    {tf(
                      "myapps_viewJob",
                      "查看职位详情",
                      "View job details"
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
