// src/components/SafetyWarning.jsx - COMPLETE FILE
import React from 'react';
import { useLanguage } from '../lib/i18n';

export default function SafetyWarning({ variant = 'default' }) {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';

  if (variant === 'compact') {
    return (
      <div style={{
        padding: '8px 12px',
        background: 'rgba(239, 68, 68, 0.08)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        borderRadius: 8,
        fontSize: 12,
        color: '#b91c1c',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span>⚠️</span>
        <span>
          {isChinese 
            ? '切勿在受聘前支付任何费用' 
            : "Don't pay any money before getting hired"}
        </span>
      </div>
    );
  }

  return (
    <div style={{
      padding: 16,
      background: 'rgba(239, 68, 68, 0.08)',
      border: '1px solid rgba(239, 68, 68, 0.2)',
      borderRadius: 12,
      marginTop: 20,
    }}>
      <div style={{ 
        fontSize: 15, 
        fontWeight: 600, 
        color: '#b91c1c', 
        marginBottom: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span>⚠️</span>
        <span>{isChinese ? '安全提示' : 'Safety Tips'}</span>
      </div>
      
      <ul style={{ 
        margin: 0, 
        paddingLeft: 20, 
        fontSize: 13, 
        color: '#991b1b',
        lineHeight: 1.6,
      }}>
        <li>
          {isChinese 
            ? '凡是要求提前汇款或缴纳押金的职位均涉嫌诈骗，请谨慎求职'
            : 'Beware of jobs requiring upfront payments or deposits - these are scams'}
        </li>
        <li>
          {isChinese 
            ? '在公共场所进行面试，并告知亲友面试时间和地点'
            : 'Meet in public places and inform friends/family of interview time and location'}
        </li>
        <li>
          {isChinese 
            ? '如遇可疑情况，请立即举报'
            : 'Report suspicious activities immediately'}
        </li>
      </ul>
    </div>
  );
}