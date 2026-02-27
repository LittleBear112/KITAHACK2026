// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (location.trim()) params.set("loc", location.trim());
    navigate(`/jobs?${params.toString()}`);
  }

  function quickCategory(k) {
    const params = new URLSearchParams();
    params.set("q", k);
    navigate(`/jobs?${params.toString()}`);
  }

  return (
    <div className="container">
      {/* Hero card */}
      <div className="card" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>
          马来西亚最快的 <span style={{ color: "var(--primary)" }}>小时工平台</span>
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 16 }}>
          专注兼职 / 临时工，让老板和打工人都能 <strong>快速匹配</strong>。
        </p>

        <form className="search-row" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="关键词 (服务员、司机、客服…)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="text"
            placeholder="📍 地点 (如: Sunway, Ipoh)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit" className="btn search-btn">
            🔍 搜索工作
          </button>
        </form>
      </div>

      {/* Quick categories */}
      <div className="card">
        <h3 style={{ marginBottom: 12 }}>热门分类</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button
            type="button"
            className="btn"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            onClick={() => quickCategory("餐饮")}
          >
            🍔 餐饮
          </button>
          <button
            type="button"
            className="btn"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            onClick={() => quickCategory("零售")}
          >
            🛍 零售
          </button>
          <button
            type="button"
            className="btn"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            onClick={() => quickCategory("司机")}
          >
            🚗 司机
          </button>
          <button
            type="button"
            className="btn"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            onClick={() => quickCategory("客服")}
          >
            🎧 客服
          </button>
        </div>

        <p style={{ marginTop: 16, fontSize: 13, color: "var(--muted)" }}>
          我是老板，要招人？{" "}
          <a href="/employer" style={{ fontWeight: 600 }}>
            进入雇主后台 →
          </a>
        </p>
      </div>
    </div>
  );
}
