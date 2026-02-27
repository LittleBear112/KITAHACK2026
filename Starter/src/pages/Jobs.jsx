// src/pages/Jobs.jsx
import React, { useEffect, useState, useMemo } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import { Link, useSearchParams } from "react-router-dom";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const initialKeyword = searchParams.get("q") || "";
  const initialLocation = searchParams.get("loc") || "";

  const [keyword, setKeyword] = useState(initialKeyword);
  const [location, setLocation] = useState(initialLocation);
  const [type, setType] = useState("all"); // all | parttime | fulltime

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
        const data = snap.val();
        const list = Object.entries(data)
          .map(([id, v]) => ({ id, ...v }))
          .sort((a, b) => (b.postedAt || 0) - (a.postedAt || 0));
        setJobs(list);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError(err.message || "Failed to load jobs");
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const text =
        `${job.title || ""} ${job.companyName || ""} ${
          job.location || ""
        }`.toLowerCase();
      const kw = keyword.trim().toLowerCase();
      const loc = location.trim().toLowerCase();

      if (kw && !text.includes(kw)) return false;
      if (loc && !(job.location || "").toLowerCase().includes(loc)) return false;
      if (type !== "all" && job.employmentType !== type) return false;

      return true;
    });
  }, [jobs, keyword, location, type]);

  const recommendedJobs = filteredJobs.slice(0, 6);

  function resetFilters() {
    setKeyword("");
    setLocation("");
    setType("all");
  }

  return (
    <div className="container">
      {/* Filter card */}
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 12 }}>搜索职位</h2>
        <div className="jobs-filter">
          <input
            className="jobs-filter-input"
            placeholder="关键词，例如: 服务员 / Software Engineer"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            className="jobs-filter-input"
            placeholder="地点，例如: Sunway / Ipoh"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="jobs-filter-row">
            <div className="jobs-filter-type">
              <button
                type="button"
                className={
                  "jobs-chip" +
                  (type === "parttime" ? " jobs-chip--active" : "")
                }
                onClick={() => setType("parttime")}
              >
                小时工
              </button>
              <button
                type="button"
                className={
                  "jobs-chip" + (type === "fulltime" ? " jobs-chip--active" : "")
                }
                onClick={() => setType("fulltime")}
              >
                全职
              </button>
              <button
                type="button"
                className={
                  "jobs-chip" + (type === "all" ? " jobs-chip--active" : "")
                }
                onClick={() => setType("all")}
              >
                全部
              </button>
            </div>
            <button type="button" className="btn" onClick={resetFilters}>
              重置筛选
            </button>
          </div>
        </div>
      </div>

      {/* Recommended jobs */}
      <div className="card">
        <h3 style={{ marginBottom: 12 }}>推荐职位</h3>

        {loading && <p>Loading...</p>}
        {error && (
          <p style={{ color: "var(--danger)" }}>
            Error loading jobs: {error}
          </p>
        )}

        {!loading && !error && recommendedJobs.length === 0 && (
          <p style={{ color: "var(--muted)" }}>
            暂时没有符合条件的职位，试试修改筛选条件？
          </p>
        )}

        {!loading && !error && recommendedJobs.length > 0 && (
          <div className="grid" style={{ gap: 12 }}>
            {recommendedJobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.id}`}
                className="card"
                style={{
                  textDecoration: "none",
                  padding: 16,
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <h4 style={{ marginBottom: 6 }}>{job.title}</h4>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  {job.companyName || "公司"} · {job.location || "地点"}
                </p>
                <p style={{ fontWeight: 600, fontSize: 14 }}>
                  {job.salaryMin || job.salaryMax
                    ? `RM ${job.salaryMin || ""}${
                        job.salaryMax ? " - " + job.salaryMax : ""
                      } / 小时`
                    : "薪资面议"}
                </p>
                <div style={{ marginTop: 8 }}>
                  {job.employmentType === "parttime" && (
                    <span className="badge">兼职 / 小时工</span>
                  )}
                  {job.employmentType === "fulltime" && (
                    <span className="badge">全职</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
