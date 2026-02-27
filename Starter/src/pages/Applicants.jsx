// src/pages/Applicants.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import { useAuthState } from "../lib/useAuthState";
import { useRole } from "../lib/useRole";

export default function Applicants() {
  const { id } = useParams(); // job id
  const { user, loading: authLoading } = useAuthState();
  const { role, loaded: roleLoaded } = useRole();

  const [job, setJob] = useState(null);
  const [apps, setApps] = useState([]);
  const [loadingJob, setLoadingJob] = useState(true);
  const [loadingApps, setLoadingApps] = useState(true);

  useEffect(() => {
    const jobRef = ref(db, "jobs/" + id);
    const unsub = onValue(
      jobRef,
      (snap) => {
        if (snap.exists()) setJob(snap.val());
        setLoadingJob(false);
      },
      () => setLoadingJob(false)
    );
    return () => unsub();
  }, [id]);

  useEffect(() => {
    const appRef = ref(db, "applications/" + id);
    const unsub = onValue(
      appRef,
      (snap) => {
        if (!snap.exists()) {
          setApps([]);
          setLoadingApps(false);
          return;
        }
        const list = [];
        snap.forEach((a) => list.push({ id: a.key, ...a.val() }));
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
  }, [id]);

  if (authLoading || !roleLoaded || loadingJob) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || role !== "employer") {
    return (
      <div className="container">
        <div className="card">
          <h2>无权限访问</h2>
          <p>只有雇主才能查看申请人列表。</p>
          <Link className="btn" to="/login" style={{ marginTop: 12 }}>
            去登录
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <h2>职位申请人</h2>
        <p className="muted" style={{ marginTop: 4 }}>
          职位：{job ? job.title : "加载中..."}
        </p>
      </div>

      <div className="card">
        {loadingApps && <p>载入中...</p>}
        {!loadingApps && apps.length === 0 && (
          <p className="muted">还没有人申请这个职位。</p>
        )}
        {!loadingApps &&
          apps.length > 0 &&
          apps.map((app) => (
            <div
              key={app.id}
              className="card"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                marginBottom: 12,
                padding: 14,
              }}
            >
              <h4 style={{ marginBottom: 4 }}>{app.name || "未填写姓名"}</h4>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                手机：{app.phone || "未填写"}
              </p>
              <p style={{ marginTop: 8, fontSize: 14 }}>
                {app.message || "没有附加说明。"}
              </p>
              {app.createdAt && (
                <p
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    color: "var(--muted)",
                  }}
                >
                  投递时间：{new Date(app.createdAt).toLocaleString()}
                </p>
              )}

              {app.phone && (
                <a
                  href={`https://wa.me/6${app.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ marginTop: 10, display: "inline-block" }}
                >
                  ✅ 一键 WhatsApp 联系
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
