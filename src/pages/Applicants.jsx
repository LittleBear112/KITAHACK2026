// src/pages/Applicants.jsx - 完整版本 + AI 安全融合（无界面改动）

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../lib/firebase";
import { ref, onValue, update, get } from "firebase/database";
import { useAuthState } from "../lib/useAuthState";
import { useRole } from "../lib/useRole";
import { httpsCallable } from "firebase/functions";
import { functions } from "../lib/firebase";

export default function Applicants() {
  const { jobId, id } = useParams();
  const effectiveId = jobId || id;

  const { user, loading: authLoading } = useAuthState();
  const { role, loaded: roleLoaded } = useRole();

  const [job, setJob] = useState(null);
  const [apps, setApps] = useState([]);
  const [loadingJob, setLoadingJob] = useState(true);
  const [loadingApps, setLoadingApps] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // ⭐ AI 状态
  const [loadingAI, setLoadingAI] = useState(false);

  const [ratingState, setRatingState] = useState({
    open: false,
    app: null,
    score: 5,
    late: false,
    saving: false,
  });

  /* ================= AI MOCK FUNCTION ================= */
  async function runMatchingMock() {
    setLoadingAI(true);

    try {
      const matchFn = httpsCallable(functions, "matchCandidates");
      await matchFn({ jobId: effectiveId });
    } catch (err) {
      console.error("AI failed:", err);
    }

    setLoadingAI(false);
  }

  /* ================= 原有逻辑保持不变 ================= */

  useEffect(() => {
    if (!effectiveId) {
      setLoadingJob(false);
      return;
    }

    const jobRef = ref(db, "jobs/" + effectiveId);
    const unsub = onValue(jobRef, (snap) => {
      if (snap.exists()) setJob(snap.val());
      setLoadingJob(false);
    });

    return () => unsub();
  }, [effectiveId]);

  useEffect(() => {
    if (!effectiveId) {
      setApps([]);
      setLoadingApps(false);
      return;
    }

    const appRef = ref(db, "applications/" + effectiveId);
    const unsub = onValue(appRef, (snap) => {
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
    });

    return () => unsub();
  }, [effectiveId]);

  const statusLabel = (status) => {
    switch (status) {
      case "shortlisted":
        return "✅ 已入围";
      case "rejected":
        return "❌ 未被录用";
      case "hired":
        return "🎉 已录用";
      default:
        return "📩 已申请";
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

  async function handleChangeStatus(appId, newStatus) {
    if (!effectiveId || !appId) return;
    setUpdatingId(appId);

    await update(ref(db, `applications/${effectiveId}/${appId}`), {
      status: newStatus,
    });

    setApps((prev) =>
      prev.map((a) =>
        a.id === appId ? { ...a, status: newStatus } : a
      )
    );

    setUpdatingId(null);
  }

  /* ================= UI 保持原设计 ================= */

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
        </div>
      </div>
    );
  }

  const total = apps.length;
  const hiredCount = apps.filter((a) => a.status === "hired").length;
  const shortlistedCount = apps.filter((a) => a.status === "shortlisted").length;
  const rejectedCount = apps.filter((a) => a.status === "rejected").length;

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>{job?.title}</h2>
          </div>

          {total > 0 && (
            <button
              onClick={runMatchingMock}
              disabled={loadingAI}
              className="btn"
            >
              {loadingAI ? "AI 分析中…" : "Analyze Candidates 🤖"}
            </button>
          )}
        </div>
      </div>

      <div className="card">
        {apps.map((app) => {
          const appliedAt = app.createdAt
            ? new Date(app.createdAt).toLocaleString("zh-CN")
            : "";

          const waLink = app.phone
            ? `https://wa.me/6${app.phone.replace(/\D/g, "")}`
            : null;

          return (
            <div
              key={app.id}
              style={{
                borderTop: "1px solid var(--border-soft)",
                padding: "12px 0",
                background: app.topMatch
                  ? "rgba(34,197,94,0.05)"
                  : "transparent",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h3>{app.name}</h3>
                  <span className={statusPillClass(app.status)}>
                    {statusLabel(app.status)}
                  </span>

                  {app.topMatch && (
                    <span className="pill success">⭐ Top Match</span>
                  )}

                  {app.matchScore && (
                    <span className="pill">
                      🤖 {app.matchScore}% 匹配
                    </span>
                  )}

                  <p>手机：{app.phone}</p>
                  <p>投递时间：{appliedAt}</p>

                  {app.matchReasons && (
                    <p>匹配依据：{app.matchReasons.join(" · ")}</p>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {waLink && (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      WhatsApp 联系
                    </a>
                  )}

                  <button
                    onClick={() =>
                      handleChangeStatus(app.id, "shortlisted")
                    }
                    className="btn-ghost"
                  >
                    入围
                  </button>

                  <button
                    onClick={() =>
                      handleChangeStatus(app.id, "hired")
                    }
                    className="btn-ghost"
                  >
                    录用
                  </button>

                  <button
                    onClick={() =>
                      handleChangeStatus(app.id, "rejected")
                    }
                    className="btn-ghost"
                  >
                    拒绝
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}