// src/pages/Home.jsx - PROFESSIONAL VERSION
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../lib/i18n";
import { useAuthState } from "../lib/useAuthState";

export default function Home() {
  const { t, lang } = useLanguage();
  const { user } = useAuthState();
  const navigate = useNavigate();
  const isChinese = lang === 'zh';

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (location.trim()) params.set("loc", location.trim());
    navigate(`/jobs?${params.toString()}`);
  }

  const isLoggedIn = !!user;

  // 热门分类 - 图标按钮
  const categories = [
    { icon: '🍔', label: isChinese ? '餐饮' : 'F&B', query: '餐饮 服务员' },
    { icon: '🛒', label: isChinese ? '零售' : 'Retail', query: '零售 销售' },
    { icon: '🚗', label: isChinese ? '司机' : 'Driver', query: '司机 配送' },
    { icon: '📦', label: isChinese ? '包装' : 'Packing', query: '包装 仓库' },
    { icon: '💁', label: isChinese ? '客服' : 'CS', query: '客服 接待' },
    { icon: '🏗️', label: isChinese ? '建筑' : 'Construction', query: '建筑 工人' },
  ];

  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      {/* HERO card */}
      <div
        className="card"
        style={{
          marginBottom: 24,
          padding: 24,
          borderRadius: 24,
          background:
            "linear-gradient(135deg, rgba(15,23,42,1), rgba(30,64,175,0.96))",
          color: "#e5e7eb",
          border: "none",
          boxShadow: "0 30px 60px rgba(15,23,42,0.7)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: 24,
            alignItems: "center",
          }}
        >
          {/* Left text & search */}
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#9ca3af",
              }}
            >
              {isChinese ? '马来西亚最快的' : "Malaysia's Fastest"}
            </p>
            <h1
              style={{
                margin: "8px 0 0",
                fontSize: 30,
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: "#f97316" }}>
                {isChinese ? '小时工平台' : 'Hourly Job Platform'}
              </span>
            </h1>
            <p
              style={{
                marginTop: 10,
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 420,
                color: "#e5e7eb",
              }}
            >
              {isChinese 
                ? '专注兼职与临时工。最快 1 小时上岗，工资日结。'
                : 'Focus on part-time & temp work. Start in 1 hour, get paid daily.'}
            </p>

            {/* search form - 横向排列 */}
            <form
              onSubmit={handleSearch}
              style={{ 
                marginTop: 18,
                display: 'grid',
                gridTemplateColumns: '2fr 1fr auto',
                gap: 8,
              }}
            >
              <input
                className="input-glass"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={isChinese ? '关键词（服务员、司机、客服...）' : 'Keywords (waiter, driver, CS...)'}
                style={{
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  background: 'rgba(15, 23, 42, 0.6)',
                  color: '#e5e7eb',
                  fontSize: 14,
                }}
              />
              <input
                className="input-glass"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={isChinese ? '地点（Sunway, Ipoh）' : 'Location (Sunway, Ipoh)'}
                style={{
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  background: 'rgba(15, 23, 42, 0.6)',
                  color: '#e5e7eb',
                  fontSize: 14,
                }}
              />
              <button 
                type="submit" 
                className="btn"
                style={{
                  padding: '12px 32px',
                  borderRadius: 12,
                  background: 'var(--primary)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                🔍 {isChinese ? '搜索工作' : 'Search'}
              </button>
            </form>
          </div>

          {/* Right: Platform Stats - 替换调试面板 */}
          <div
            style={{
              borderRadius: 18,
              padding: 20,
              background:
                "linear-gradient(145deg, rgba(15,23,42,0.9), rgba(15,23,42,0.6))",
              border: "1px solid rgba(148,163,184,0.3)",
              boxShadow: "0 20px 40px rgba(15,23,42,0.9)",
            }}
          >
            <h3 style={{ 
              margin: 0, 
              fontSize: 16, 
              fontWeight: 600,
              marginBottom: 16,
              color: '#f97316',
            }}>
              {isChinese ? '平台数据' : 'Platform Stats'}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 12,
                borderRadius: 10,
                background: 'rgba(249, 115, 22, 0.1)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
              }}>
                <span style={{ fontSize: 13, color: '#fed7aa' }}>
                  📅 {isChinese ? '本周新职位' : 'New Jobs This Week'}
                </span>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#f97316' }}>
                  +128
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 12,
                borderRadius: 10,
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}>
                <span style={{ fontSize: 13, color: '#bfdbfe' }}>
                  ⚡ {isChinese ? '平均回复' : 'Avg Response'}
                </span>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#3b82f6' }}>
                  {isChinese ? '2小时' : '2 hrs'}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 12,
                borderRadius: 10,
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}>
                <span style={{ fontSize: 13, color: '#bbf7d0' }}>
                  📍 {isChinese ? '覆盖城市' : 'Cities'}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#10b981' }}>
                  KL · Ipoh · Penang
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hot categories - 图标按钮 */}
      <div className="card" style={{ marginBottom: 16 }}>
        <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 18 }}>
          {isChinese ? '热门分类' : 'Popular Categories'}
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 12,
          }}
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setKeyword(cat.query);
                const params = new URLSearchParams();
                params.set('q', cat.query);
                navigate(`/jobs?${params.toString()}`);
              }}
              style={{
                padding: '16px 12px',
                borderRadius: 12,
                border: '1px solid var(--border)',
                background: 'var(--card)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: 32 }}>{cat.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Employer CTA - 大按钮 */}
      <div 
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.02) 100%)',
          border: '1px solid rgba(249, 115, 22, 0.2)',
          padding: 24,
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 20,
        }}>
          <div>
            <h3 style={{ 
              marginTop: 0, 
              marginBottom: 8,
              fontSize: 20,
              fontWeight: 700,
            }}>
              {isChinese ? '我是老板，要招人' : "I'm an Employer"}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "var(--muted)",
                maxWidth: 500,
              }}
            >
              {isChinese 
                ? '为餐饮、零售、活动公司等快速补人。你可以发布职位，并在雇主仪表盘查看所有申请。'
                : 'Quickly fill positions for F&B, retail, events, etc. Post jobs and manage applications in employer dashboard.'}
            </p>
          </div>
          <Link 
            to="/employer" 
            style={{
              padding: '14px 28px',
              borderRadius: 12,
              background: 'var(--primary)',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
            }}
          >
            👨‍💼 {isChinese ? '切换到雇主模式' : 'Switch to Employer'}
          </Link>
        </div>
      </div>
    </div>
  );
}