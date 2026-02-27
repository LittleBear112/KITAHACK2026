// src/pages/Safety.jsx
import React from 'react';
import { useLanguage } from '../lib/i18n';

export default function Safety() {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';

  const safetyTips = [
    {
      icon: '🚨',
      title: isChinese ? '警惕诈骗信号' : 'Watch for Scam Signs',
      color: '#ef4444',
      tips: [
        isChinese ? '要求提前支付费用（培训费、押金、制服费等）' : 'Requests for upfront payments (training fees, deposits, uniform fees, etc.)',
        isChinese ? '承诺"快速致富"或"轻松赚钱"' : 'Promises of "get rich quick" or "easy money"',
        isChinese ? '工作描述模糊不清' : 'Vague or unclear job descriptions',
        isChinese ? '薪资远高于市场水平' : 'Salary far above market rate',
        isChinese ? '要求提供银行账号或信用卡信息' : 'Requests for bank account or credit card information',
        isChinese ? '面试地点在偏僻或非正规场所' : 'Interview location in remote or unofficial places',
      ]
    },
    {
      icon: '✅',
      title: isChinese ? '安全求职建议' : 'Safe Job Hunting Tips',
      color: '#10b981',
      tips: [
        isChinese ? '研究公司背景，查看公司网站和社交媒体' : 'Research company background, check website and social media',
        isChinese ? '在公共场所进行面试' : 'Conduct interviews in public places',
        isChinese ? '告诉家人或朋友面试的时间和地点' : 'Tell family or friends about interview time and location',
        isChinese ? '不要在未确认雇主身份前提供个人敏感信息' : 'Don\'t provide sensitive personal information before verifying employer identity',
        isChinese ? '相信你的直觉，如果感觉不对就拒绝' : 'Trust your instincts, refuse if something feels wrong',
        isChinese ? '保留所有沟通记录作为证据' : 'Keep all communication records as evidence',
      ]
    },
    {
      icon: '👤',
      title: isChinese ? '保护个人信息' : 'Protect Personal Information',
      color: '#3b82f6',
      tips: [
        isChinese ? '不要在简历中包含身份证号码或护照号' : 'Don\'t include IC or passport numbers in resume',
        isChinese ? '不要提供完整的银行账号信息' : 'Don\'t provide full bank account details',
        isChinese ? '谨慎分享家庭住址，可以只写区域' : 'Share home address carefully, just write the area',
        isChinese ? '使用独立的求职邮箱' : 'Use a separate email for job hunting',
        isChinese ? '定期更改密码，使用强密码' : 'Change passwords regularly, use strong passwords',
        isChinese ? '启用两步验证保护账号' : 'Enable two-factor authentication',
      ]
    },
    {
      icon: '💼',
      title: isChinese ? '面试安全' : 'Interview Safety',
      color: '#f59e0b',
      tips: [
        isChinese ? '确认面试官的真实身份和职位' : 'Verify interviewer\'s identity and position',
        isChinese ? '选择白天时间和公共场所面试' : 'Choose daytime and public places for interviews',
        isChinese ? '可以带朋友或家人陪同（在外等候）' : 'Bring a friend or family member (wait outside)',
        isChinese ? '穿着得体，保持专业形象' : 'Dress appropriately, maintain professional image',
        isChinese ? '准备好问题，了解公司和职位' : 'Prepare questions about company and position',
        isChinese ? '如遇不适，礼貌地结束面试并离开' : 'If uncomfortable, politely end interview and leave',
      ]
    },
    {
      icon: '📝',
      title: isChinese ? '合同与协议' : 'Contracts & Agreements',
      color: '#8b5cf6',
      tips: [
        isChinese ? '仔细阅读合同，不要急于签字' : 'Read contracts carefully, don\'t rush to sign',
        isChinese ? '确保合同包含薪资、工时、福利等详细信息' : 'Ensure contract includes salary, hours, benefits details',
        isChinese ? '了解试用期和离职条款' : 'Understand probation period and resignation terms',
        isChinese ? '保留合同副本' : 'Keep a copy of the contract',
        isChinese ? '如有疑问，咨询律师或劳工局' : 'Consult lawyer or labor department if in doubt',
        isChinese ? '警惕不合理的约束条款' : 'Beware of unreasonable restrictive clauses',
      ]
    },
    {
      icon: '🏢',
      title: isChinese ? '工作场所安全' : 'Workplace Safety',
      color: '#06b6d4',
      tips: [
        isChinese ? '了解紧急出口和安全设施位置' : 'Know emergency exits and safety facility locations',
        isChinese ? '遵守公司安全规定和流程' : 'Follow company safety rules and procedures',
        isChinese ? '报告任何不安全的工作环境' : 'Report any unsafe work environment',
        isChinese ? '了解你的劳工权益' : 'Know your labor rights',
        isChinese ? '保留工作记录和薪资单' : 'Keep work records and pay slips',
        isChinese ? '如遇职场骚扰或歧视，立即举报' : 'Report workplace harassment or discrimination immediately',
      ]
    },
  ];

  const reportSteps = [
    {
      step: '1',
      title: isChinese ? '停止沟通' : 'Stop Communication',
      desc: isChinese ? '立即停止与可疑雇主的所有联系' : 'Immediately stop all contact with suspicious employer'
    },
    {
      step: '2',
      title: isChinese ? '保存证据' : 'Save Evidence',
      desc: isChinese ? '截图保存所有对话记录和职位信息' : 'Screenshot all chat records and job information'
    },
    {
      step: '3',
      title: isChinese ? '向我们举报' : 'Report to Us',
      desc: isChinese ? '发送邮件到 support@onejob.my，附上证据' : 'Email support@onejob.my with evidence'
    },
    {
      step: '4',
      title: isChinese ? '报警' : 'Report to Police',
      desc: isChinese ? '如果涉及金钱损失，请向警方报案' : 'If financial loss involved, report to police'
    },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 60, marginBottom: 16 }}>🛡️</div>
        <h1 style={{ 
          fontSize: 36, 
          fontWeight: 800, 
          marginBottom: 12,
          background: 'linear-gradient(135deg, var(--primary) 0%, #ea580c 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {isChinese ? '安全指南' : 'Safety Guide'}
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
          {isChinese 
            ? '你的安全是我们的首要任务。请仔细阅读以下安全建议。'
            : 'Your safety is our top priority. Please read the following safety tips carefully.'}
        </p>
      </div>

      {/* Safety Tips */}
      <div style={{ display: 'grid', gap: 24, marginBottom: 60 }}>
        {safetyTips.map((section, index) => (
          <div
            key={index}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 32 }}>{section.icon}</span>
              <h2 style={{ 
                fontSize: 22, 
                fontWeight: 700,
                color: section.color,
                margin: 0,
              }}>
                {section.title}
              </h2>
            </div>
            <ul style={{ 
              margin: 0, 
              paddingLeft: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              {section.tips.map((tip, tipIndex) => (
                <li 
                  key={tipIndex}
                  style={{ 
                    fontSize: 15,
                    color: 'var(--text)',
                    lineHeight: 1.6,
                  }}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Report Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
        border: '2px solid rgba(239, 68, 68, 0.3)',
        borderRadius: 16,
        padding: 32,
        marginBottom: 40,
      }}>
        <h2 style={{ 
          fontSize: 24, 
          fontWeight: 700, 
          marginBottom: 20,
          textAlign: 'center',
        }}>
          {isChinese ? '如何举报可疑职位' : 'How to Report Suspicious Jobs'}
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginTop: 24,
        }}>
          {reportSteps.map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'var(--primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                margin: '0 auto 12px',
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 32,
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
          {isChinese ? '紧急联系方式' : 'Emergency Contacts'}
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20,
          marginTop: 24,
        }}>
          <div>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🚓</div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
              {isChinese ? '警方' : 'Police'}
            </h3>
            <p style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary)' }}>
              999
            </p>
          </div>
          <div>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📧</div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
              {isChinese ? '举报诈骗' : 'Report Scam'}
            </h3>
            <a 
              href="mailto:support@onejob.my"
              style={{ 
                fontSize: 14, 
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              support@onejob.my
            </a>
          </div>
          <div>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🏢</div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
              {isChinese ? '劳工局' : 'Labor Dept'}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--muted)' }}>
              1-800-88-2038
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Notice */}
      <div style={{
        marginTop: 40,
        padding: 24,
        background: 'rgba(249, 115, 22, 0.08)',
        border: '1px solid rgba(249, 115, 22, 0.2)',
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--muted)',
      }}>
        <strong>{isChinese ? '重要提醒：' : 'Important:'}</strong>{' '}
        {isChinese 
          ? 'OneJob 永远不会要求你支付任何费用来申请职位。如果有人以OneJob的名义向你索取费用，这是诈骗，请立即向我们举报。'
          : 'OneJob will never ask you to pay any fees to apply for jobs. If someone asks for payment in OneJob\'s name, it\'s a scam - report it to us immediately.'}
      </div>
    </div>
  );
}