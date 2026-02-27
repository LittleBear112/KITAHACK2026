// src/components/Footer.jsx - FIXED VERSION
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';

export default function Footer() {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      marginTop: 'auto',
      padding: '40px 0 24px',
      background: 'var(--card)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
          marginBottom: 32,
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{ 
              fontSize: 20, 
              fontWeight: 800, 
              color: 'var(--primary)',
              marginBottom: 12,
              letterSpacing: '0.05em',
            }}>
              OneJob
            </h3>
            <p style={{ 
              fontSize: 13, 
              color: 'var(--muted)', 
              lineHeight: 1.6,
              margin: 0,
            }}>
              {isChinese 
                ? '马来西亚最快的小时工平台'
                : "Malaysia's Fastest Hourly Job Platform"}
            </p>
            <div style={{ 
              marginTop: 12, 
              fontSize: 12, 
              color: 'var(--muted)',
              padding: '8px 12px',
              background: 'rgba(249, 115, 22, 0.1)',
              borderRadius: 8,
              display: 'inline-block',
            }}>
              Beta Version
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontSize: 14, 
              fontWeight: 600, 
              marginBottom: 12,
              color: 'var(--text)',
            }}>
              {isChinese ? '快速链接' : 'Quick Links'}
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
            }}>
              <FooterLink to="/jobs">{isChinese ? '浏览职位' : 'Browse Jobs'}</FooterLink>
              <FooterLink to="/people">{isChinese ? '找人才' : 'Find Talent'}</FooterLink>
              <FooterLink to="/employer/post">{isChinese ? '发布职位' : 'Post a Job'}</FooterLink>
              <FooterLink to="/employer/plan">{isChinese ? '定价' : 'Pricing'}</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ 
              fontSize: 14, 
              fontWeight: 600, 
              marginBottom: 12,
              color: 'var(--text)',
            }}>
              {isChinese ? '法律信息' : 'Legal'}
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
            }}>
              <FooterLink to="/terms">{isChinese ? '用户协议' : 'Terms of Service'}</FooterLink>
              <FooterLink to="/disclaimer">{isChinese ? '免责声明' : 'Disclaimer'}</FooterLink>
              <FooterLink to="/privacy">{isChinese ? '隐私政策' : 'Privacy Policy'}</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ 
              fontSize: 14, 
              fontWeight: 600, 
              marginBottom: 12,
              color: 'var(--text)',
            }}>
              {isChinese ? '帮助与支持' : 'Help & Support'}
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
            }}>
              <li style={{ marginBottom: 10 }}>
                <a 
                  href="mailto:support@onejob.my"
                  style={{
                    fontSize: 13,
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  📧 support@onejob.my
                </a>
              </li>
              <FooterLink to="/faq">{isChinese ? '常见问题' : 'FAQ'}</FooterLink>
              <FooterLink to="/safety">{isChinese ? '安全指南' : 'Safety Guide'}</FooterLink>
            </ul>
          </div>
        </div>

        {/* Beta Notice */}
        <div style={{
          padding: 16,
          background: 'rgba(249, 115, 22, 0.08)',
          border: '1px solid rgba(249, 115, 22, 0.2)',
          borderRadius: 12,
          marginBottom: 24,
          fontSize: 12,
          color: 'var(--muted)',
          textAlign: 'center',
          lineHeight: 1.6,
        }}>
          <strong>{isChinese ? '测试版提示：' : 'Beta Notice:'}</strong>{' '}
          {isChinese 
            ? '本平台处于测试阶段。我们尽力审核雇主，但无法保证 100% 安全。如发现可疑情况，请立即举报。'
            : 'This platform is in Beta. We verify employers to the best of our ability but cannot guarantee 100% security. Please report suspicious activities immediately.'}
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 20,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          color: 'var(--muted)',
        }}>
          <div>
            © {currentYear} OneJob. {isChinese ? '保留所有权利。' : 'All rights reserved.'}
          </div>
          <div style={{ 
            display: 'flex', 
            gap: 20, /* 增加间距 20px */
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <Link 
              to="/terms" 
              style={{ 
                color: 'var(--muted)', 
                textDecoration: 'none',
                fontSize: 12,
              }}
            >
              {isChinese ? '服务条款' : 'Terms'}
            </Link>
            <span style={{ color: 'var(--border)' }}>•</span> {/* 添加分隔符 */}
            <Link 
              to="/disclaimer" 
              style={{ 
                color: 'var(--muted)', 
                textDecoration: 'none',
                fontSize: 12,
              }}
            >
              {isChinese ? '免责声明' : 'Disclaimer'}
            </Link>
            <span style={{ color: 'var(--border)' }}>•</span> {/* 添加分隔符 */}
            <Link 
              to="/privacy" 
              style={{ 
                color: 'var(--muted)', 
                textDecoration: 'none',
                fontSize: 12,
              }}
            >
              {isChinese ? '隐私' : 'Privacy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <li style={{ marginBottom: 10 }}> {/* 增加间距 10px */}
      <Link 
        to={to}
        style={{
          fontSize: 13,
          color: 'var(--muted)',
          textDecoration: 'none',
          transition: 'color 0.2s',
          display: 'block', /* 确保是块级元素 */
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--muted)';
        }}
      >
        {children}
      </Link>
    </li>
  );
}