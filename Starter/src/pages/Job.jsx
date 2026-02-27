// src/pages/Job.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function Job() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jobRef = ref(db, "jobs/" + id);
    const unsub = onValue(
      jobRef,
      (snap) => {
        if (!snap.exists()) {
          setJob(null);
          setLoading(false);
          return;
        }
        setJob(snap.val());
        setLoading(false);
      },
      () => {
        setJob(null);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container">
        <div className="card">
          <p>Job not found.</p>
        </div>
      </div>
    );
  }

  const mapQuery =
    job.address ||
    `${job.companyName || ""} ${job.location || ""}`.trim() ||
    "";

  return (
    <div className="container job-page">
      {/* Top card */}
      <div className="card">
        <h2>{job.title}</h2>

        <p className="job-salary">
          {job.salaryMin || job.salaryMax
            ? `RM ${job.salaryMin || ""}${
                job.salaryMax ? " - " + job.salaryMax : ""
              } / 小时`
            : "薪资面议"}
        </p>

        <p className="job-company">
          {job.companyName || "公司"} • {job.location || "地点"}
        </p>

        {mapQuery && (
          <div className="job-map">
            <iframe
              title="map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                mapQuery
              )}&output=embed`}
              loading="lazy"
              style={{ border: 0, width: "100%", height: "320px" }}
            ></iframe>
          </div>
        )}
      </div>

      {/* Description + requirements */}
      <div className="card">
        <section className="job-section">
          <h3>职位描述</h3>
          <p className="job-text">
            {job.description || "暂无描述。"}
          </p>
        </section>

        <section className="job-section">
          <h3>技能/要求</h3>
          {job.skills && job.skills.length > 0 ? (
            <ul className="job-list">
              {job.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          ) : (
            <p className="job-text">暂无特别要求。</p>
          )}
        </section>
      </div>

      {/* Sticky apply bar */}
      <div className="job-apply-bar">
        <button className="job-fav-btn">⭐ 收藏</button>

        <input className="job-input" placeholder="姓名" />
        <input className="job-input" placeholder="手机" />

        <label className="job-upload">
          <span>上传简历</span>
          <input type="file" style={{ display: "none" }} />
        </label>

        <button className="btn job-apply-btn">✅ 立刻申请</button>
      </div>
    </div>
  );
}
