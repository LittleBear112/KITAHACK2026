// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { useLanguage } from '../lib/i18n';

export default function FAQ() {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: isChinese ? '关于平台' : 'About Platform',
      questions: [
        {
          q: isChinese ? 'OneJob 是什么？' : 'What is OneJob?',
          a: isChinese 
            ? 'OneJob 是马来西亚最快的小时工平台，连接雇主和求职者，专注于兼职、全职和实习职位。'
            : 'OneJob is Malaysia\'s fastest hourly job platform, connecting employers and job seekers for part-time, full-time, and internship positions.'
        },
        {
          q: isChinese ? 'OneJob 收费吗？' : 'Is OneJob free?',
          a: isChinese
            ? '求职者完全免费。雇主需要购买套餐才能发布职位，我们提供 Starter、Professional 和 Enterprise 三种套餐。'
            : 'Job seekers use OneJob completely free. Employers need to purchase a plan to post jobs. We offer Starter, Professional, and Enterprise plans.'
        },
        {
          q: isChinese ? '平台支持哪些地区？' : 'Which areas are supported?',
          a: isChinese
            ? '目前支持马来西亚全国，包括吉隆坡、雪兰莪、槟城、新山等主要城市。'
            : 'Currently supports nationwide Malaysia, including Kuala Lumpur, Selangor, Penang, Johor Bahru, and other major cities.'
        },
      ]
    },
    {
      category: isChinese ? '求职者常见问题' : 'Job Seeker FAQ',
      questions: [
        {
          q: isChinese ? '如何申请职位？' : 'How do I apply for a job?',
          a: isChinese
            ? '1) 浏览职位页面\n2) 点击感兴趣的职位\n3) 点击"申请职位"按钮\n4) 填写申请表单\n5) 等待雇主联系'
            : '1) Browse the jobs page\n2) Click on a job that interests you\n3) Click "Apply for Job" button\n4) Fill out the application form\n5) Wait for employer to contact you'
        },
        {
          q: isChinese ? '我需要上传简历吗？' : 'Do I need to upload a resume?',
          a: isChinese
            ? '建议上传简历以提高申请成功率。你可以在个人资料页面上传简历和作品集。'
            : 'We recommend uploading a resume to increase your chances. You can upload your resume and portfolio in your profile page.'
        },
        {
          q: isChinese ? '如何查看我的申请状态？' : 'How do I check my application status?',
          a: isChinese
            ? '登录后，访问"我的申请"页面即可查看所有申请记录和状态。'
            : 'After logging in, visit "My Applications" page to see all your application records and statuses.'
        },
        {
          q: isChinese ? '如果遇到诈骗怎么办？' : 'What if I encounter a scam?',
          a: isChinese
            ? '立即停止联系，不要支付任何费用。请通过support@onejob.my向我们举报，我们会立即调查并封禁该雇主。'
            : 'Stop contact immediately and do not pay any fees. Report to us at support@onejob.my. We will investigate and ban the employer immediately.'
        },
      ]
    },
    {
      category: isChinese ? '雇主常见问题' : 'Employer FAQ',
      questions: [
        {
          q: isChinese ? '如何发布职位？' : 'How do I post a job?',
          a: isChinese
            ? '1) 注册雇主账号\n2) 选择套餐\n3) 点击"发布职位"\n4) 填写职位详情\n5) 提交审核\n职位通常在24小时内审核通过。'
            : '1) Register an employer account\n2) Choose a plan\n3) Click "Post a Job"\n4) Fill in job details\n5) Submit for review\nJobs are usually approved within 24 hours.'
        },
        {
          q: isChinese ? '套餐有什么区别？' : 'What\'s the difference between plans?',
          a: isChinese
            ? 'Starter: 1个职位，基础功能\nProfessional: 5个职位，优先展示\nEnterprise: 无限职位，专属支持'
            : 'Starter: 1 job posting, basic features\nProfessional: 5 job postings, priority display\nEnterprise: Unlimited jobs, dedicated support'
        },
        {
          q: isChinese ? '如何查看申请人？' : 'How do I view applicants?',
          a: isChinese
            ? '在雇主仪表盘，点击职位卡片上的"查看申请人"按钮，即可查看所有申请者的资料和简历。'
            : 'In your employer dashboard, click the "View Applicants" button on the job card to see all applicant profiles and resumes.'
        },
        {
          q: isChinese ? '可以编辑或删除职位吗？' : 'Can I edit or delete a job?',
          a: isChinese
            ? '可以。在雇主仪表盘，点击"编辑"修改职位信息，或点击"删除"移除职位。'
            : 'Yes. In your employer dashboard, click "Edit" to modify job details, or "Delete" to remove the job.'
        },
      ]
    },
    {
      category: isChinese ? '账号与支付' : 'Account & Payment',
      questions: [
        {
          q: isChinese ? '如何注册账号？' : 'How do I create an account?',
          a: isChinese
            ? '点击"注册"按钮，选择角色（求职者/雇主），使用邮箱或Google账号注册即可。'
            : 'Click "Register" button, select your role (Job Seeker/Employer), and sign up with email or Google account.'
        },
        {
          q: isChinese ? '忘记密码怎么办？' : 'What if I forget my password?',
          a: isChinese
            ? '点击登录页面的"忘记密码"链接，输入邮箱，我们会发送重置密码邮件给你。'
            : 'Click "Forgot Password" on the login page, enter your email, and we\'ll send you a password reset link.'
        },
        {
          q: isChinese ? '支持哪些支付方式？' : 'What payment methods are supported?',
          a: isChinese
            ? '我们支持信用卡/借记卡、FPX网银转账、Touch \'n Go、Grab Pay等马来西亚常用支付方式。'
            : 'We support credit/debit cards, FPX online banking, Touch \'n Go, Grab Pay, and other popular Malaysian payment methods.'
        },
        {
          q: isChinese ? '可以申请退款吗？' : 'Can I get a refund?',
          a: isChinese
            ? '套餐购买后7天内，如未使用任何职位名额，可申请全额退款。请联系support@onejob.my。'
            : 'Within 7 days of purchase, if you haven\'t used any job slots, you can request a full refund. Contact support@onejob.my.'
        },
      ]
    },
    {
      category: isChinese ? '技术支持' : 'Technical Support',
      questions: [
        {
          q: isChinese ? '网站无法访问怎么办？' : 'What if the website is down?',
          a: isChinese
            ? '请检查你的网络连接，或尝试清除浏览器缓存。如果问题持续，请联系support@onejob.my。'
            : 'Please check your internet connection or try clearing your browser cache. If the issue persists, contact support@onejob.my.'
        },
        {
          q: isChinese ? '上传文件失败怎么办？' : 'What if file upload fails?',
          a: isChinese
            ? '确保文件大小不超过5MB，格式为PDF、DOC、DOCX、JPG或PNG。如果仍然失败，请联系我们。'
            : 'Make sure your file is under 5MB and in PDF, DOC, DOCX, JPG, or PNG format. If it still fails, contact us.'
        },
        {
          q: isChinese ? '如何联系客服？' : 'How do I contact support?',
          a: isChinese
            ? '发送邮件到support@onejob.my，我们通常在24小时内回复。紧急情况请在邮件标题注明"紧急"。'
            : 'Email support@onejob.my and we usually respond within 24 hours. For urgent matters, mark "URGENT" in the subject line.'
        },
      ]
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ 
          fontSize: 36, 
          fontWeight: 800, 
          marginBottom: 12,
          background: 'linear-gradient(135deg, var(--primary) 0%, #ea580c 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {isChinese ? '常见问题' : 'Frequently Asked Questions'}
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
          {isChinese 
            ? '找不到答案？发送邮件到 support@onejob.my，我们很乐意帮助你！'
            : 'Can\'t find an answer? Email us at support@onejob.my and we\'ll be happy to help!'}
        </p>
      </div>

      {/* FAQ Categories */}
      {faqData.map((category, catIndex) => (
        <div key={catIndex} style={{ marginBottom: 40 }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 700, 
            marginBottom: 20,
            color: 'var(--text)',
          }}>
            {category.category}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {category.questions.map((item, qIndex) => {
              const globalIndex = `${catIndex}-${qIndex}`;
              const isOpen = openIndex === globalIndex;

              return (
                <div
                  key={qIndex}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                    }}
                  >
                    <span style={{ 
                      fontSize: 16, 
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}>
                      {item.q}
                    </span>
                    <span style={{ 
                      fontSize: 20,
                      color: 'var(--primary)',
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: 'var(--muted)',
                      fontSize: 14,
                      lineHeight: 1.8,
                      whiteSpace: 'pre-line',
                    }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Contact CTA */}
      <div style={{
        marginTop: 60,
        padding: 32,
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.05) 100%)',
        border: '1px solid rgba(249, 115, 22, 0.2)',
        borderRadius: 16,
        textAlign: 'center',
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
          {isChinese ? '还有其他问题？' : 'Still have questions?'}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>
          {isChinese 
            ? '我们的支持团队随时为你服务'
            : 'Our support team is here to help'}
        </p>
        <a
          href="mailto:support@onejob.my"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'var(--primary)',
            color: '#ffffff',
            borderRadius: 999,
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          📧 {isChinese ? '联系我们' : 'Contact Us'}
        </a>
      </div>
    </div>
  );
}