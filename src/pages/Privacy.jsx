// src/pages/Privacy.jsx
import React from 'react';
import { useLanguage } from '../lib/i18n';

export default function Privacy() {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';

  const sections = [
    {
      title: isChinese ? '1. 我们收集的信息' : '1. Information We Collect',
      content: [
        {
          subtitle: isChinese ? '个人信息' : 'Personal Information',
          text: isChinese
            ? '当你注册账号时，我们会收集：姓名、邮箱地址、电话号码、简历和作品集。雇主还需提供公司名称和地址。'
            : 'When you register, we collect: name, email address, phone number, resume, and portfolio. Employers also provide company name and address.'
        },
        {
          subtitle: isChinese ? '使用数据' : 'Usage Data',
          text: isChinese
            ? '我们自动收集你的浏览器类型、IP地址、访问时间、页面浏览记录等信息，以改善服务质量。'
            : 'We automatically collect your browser type, IP address, visit time, page views, etc., to improve service quality.'
        },
        {
          subtitle: isChinese ? 'Cookies' : 'Cookies',
          text: isChinese
            ? '我们使用Cookies来记住你的登录状态和偏好设置。你可以在浏览器设置中禁用Cookies，但这可能影响部分功能。'
            : 'We use Cookies to remember your login status and preferences. You can disable Cookies in browser settings, but this may affect some features.'
        },
      ]
    },
    {
      title: isChinese ? '2. 信息的使用' : '2. How We Use Information',
      content: [
        {
          subtitle: isChinese ? '提供服务' : 'Service Provision',
          text: isChinese
            ? '我们使用你的信息来：创建和管理账号、处理职位申请、连接雇主和求职者、发送通知和更新。'
            : 'We use your information to: create and manage accounts, process job applications, connect employers and job seekers, send notifications and updates.'
        },
        {
          subtitle: isChinese ? '改进平台' : 'Platform Improvement',
          text: isChinese
            ? '分析使用数据以优化用户体验、修复技术问题、开发新功能。'
            : 'Analyze usage data to optimize user experience, fix technical issues, develop new features.'
        },
        {
          subtitle: isChinese ? '安全保障' : 'Security',
          text: isChinese
            ? '检测和防止欺诈、滥用和非法活动，保护用户和平台安全。'
            : 'Detect and prevent fraud, abuse, and illegal activities to protect users and the platform.'
        },
      ]
    },
    {
      title: isChinese ? '3. 信息共享' : '3. Information Sharing',
      content: [
        {
          subtitle: isChinese ? '与雇主共享' : 'With Employers',
          text: isChinese
            ? '当你申请职位时，雇主可以查看你的简历、联系方式和申请信息。你可以选择隐藏部分个人信息。'
            : 'When you apply for a job, employers can view your resume, contact details, and application. You can choose to hide some personal information.'
        },
        {
          subtitle: isChinese ? '服务提供商' : 'Service Providers',
          text: isChinese
            ? '我们可能与第三方服务商（如支付处理、云存储、分析工具）共享必要信息，但他们必须遵守保密协议。'
            : 'We may share necessary information with third-party providers (payment processing, cloud storage, analytics), but they must comply with confidentiality agreements.'
        },
        {
          subtitle: isChinese ? '法律要求' : 'Legal Requirements',
          text: isChinese
            ? '如法律要求或为保护权利和安全，我们可能向执法机关或政府机构披露信息。'
            : 'We may disclose information to law enforcement or government agencies if required by law or to protect rights and safety.'
        },
        {
          subtitle: isChinese ? '我们不会出售信息' : 'We Don\'t Sell Information',
          text: isChinese
            ? 'OneJob 不会向第三方出售你的个人信息。'
            : 'OneJob does not sell your personal information to third parties.'
        },
      ]
    },
    {
      title: isChinese ? '4. 数据安全' : '4. Data Security',
      content: [
        {
          subtitle: isChinese ? '安全措施' : 'Security Measures',
          text: isChinese
            ? '我们采用SSL加密、防火墙、访问控制等技术措施保护你的数据。所有敏感信息都经过加密存储。'
            : 'We use SSL encryption, firewalls, access controls, and other technical measures to protect your data. All sensitive information is encrypted.'
        },
        {
          subtitle: isChinese ? '数据保留' : 'Data Retention',
          text: isChinese
            ? '我们保留你的信息直到账号被删除。删除账号后，你的个人信息将在30天内从我们的系统中移除。'
            : 'We retain your information until account deletion. After deletion, your personal information will be removed from our systems within 30 days.'
        },
      ]
    },
    {
      title: isChinese ? '5. 你的权利' : '5. Your Rights',
      content: [
        {
          subtitle: isChinese ? '访问和更新' : 'Access & Update',
          text: isChinese
            ? '你可以随时登录账号查看和编辑个人信息。'
            : 'You can log in anytime to view and edit your personal information.'
        },
        {
          subtitle: isChinese ? '删除账号' : 'Delete Account',
          text: isChinese
            ? '你可以在账号设置中删除账号。删除后，你的所有数据将被永久移除。'
            : 'You can delete your account in account settings. After deletion, all your data will be permanently removed.'
        },
        {
          subtitle: isChinese ? '数据导出' : 'Data Export',
          text: isChinese
            ? '你可以请求导出你的个人数据副本。请发送邮件到support@onejob.my。'
            : 'You can request a copy of your personal data. Email support@onejob.my.'
        },
        {
          subtitle: isChinese ? '退出营销' : 'Opt-out Marketing',
          text: isChinese
            ? '你可以随时取消订阅营销邮件，但重要的账号通知仍会发送。'
            : 'You can unsubscribe from marketing emails anytime, but important account notifications will still be sent.'
        },
      ]
    },
    {
      title: isChinese ? '6. 儿童隐私' : '6. Children\'s Privacy',
      content: [
        {
          subtitle: '',
          text: isChinese
            ? 'OneJob 不向18岁以下的儿童提供服务。如果我们发现收集了儿童的个人信息，将立即删除。如果你认为我们无意中收集了儿童信息，请联系我们。'
            : 'OneJob does not provide services to children under 18. If we discover we\'ve collected children\'s personal information, we will delete it immediately. If you believe we\'ve inadvertently collected such information, please contact us.'
        },
      ]
    },
    {
      title: isChinese ? '7. 第三方链接' : '7. Third-Party Links',
      content: [
        {
          subtitle: '',
          text: isChinese
            ? '我们的平台可能包含第三方网站的链接。我们不对这些网站的隐私政策负责，建议你在访问时阅读他们的隐私政策。'
            : 'Our platform may contain links to third-party websites. We are not responsible for their privacy policies. We recommend reading their privacy policies when visiting.'
        },
      ]
    },
    {
      title: isChinese ? '8. 隐私政策更新' : '8. Privacy Policy Updates',
      content: [
        {
          subtitle: '',
          text: isChinese
            ? '我们可能会不时更新本隐私政策。重大变更时，我们会通过邮件或平台通知你。继续使用服务即表示你接受更新后的隐私政策。'
            : 'We may update this privacy policy from time to time. For significant changes, we\'ll notify you via email or platform notification. Continued use of the service indicates your acceptance of the updated policy.'
        },
      ]
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 60, marginBottom: 16 }}>🔒</div>
        <h1 style={{ 
          fontSize: 36, 
          fontWeight: 800, 
          marginBottom: 12,
          background: 'linear-gradient(135deg, var(--primary) 0%, #ea580c 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {isChinese ? '隐私政策' : 'Privacy Policy'}
        </h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
          {isChinese ? '最后更新：2025年12月' : 'Last Updated: December 2025'}
        </p>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 600, margin: '12px auto 0' }}>
          {isChinese 
            ? '我们重视并保护你的隐私。本政策说明我们如何收集、使用和保护你的个人信息。'
            : 'We value and protect your privacy. This policy explains how we collect, use, and protect your personal information.'}
        </p>
      </div>

      {/* Content */}
      <div style={{ marginBottom: 60 }}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              marginBottom: 40,
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 32,
            }}
          >
            <h2 style={{ 
              fontSize: 22, 
              fontWeight: 700,
              marginBottom: 24,
              color: 'var(--primary)',
            }}>
              {section.title}
            </h2>

            {section.content.map((item, itemIndex) => (
              <div key={itemIndex} style={{ marginBottom: item.subtitle ? 24 : 0 }}>
                {item.subtitle && (
                  <h3 style={{ 
                    fontSize: 16, 
                    fontWeight: 600,
                    marginBottom: 12,
                    color: 'var(--text)',
                  }}>
                    {item.subtitle}
                  </h3>
                )}
                <p style={{ 
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'var(--text)',
                  margin: 0,
                }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.05) 100%)',
        border: '1px solid rgba(249, 115, 22, 0.2)',
        borderRadius: 16,
        padding: 32,
        textAlign: 'center',
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
          {isChinese ? '联系我们' : 'Contact Us'}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>
          {isChinese 
            ? '如果你对本隐私政策有任何疑问或担忧，请联系我们：'
            : 'If you have any questions or concerns about this privacy policy, please contact us:'}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <a
            href="mailto:support@onejob.my"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 32px',
              background: 'var(--primary)',
              color: '#ffffff',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            📧 support@onejob.my
          </a>
          <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>
            {isChinese 
              ? '我们通常在24小时内回复'
              : 'We usually respond within 24 hours'}
          </p>
        </div>
      </div>

      {/* Footer Notice */}
      <div style={{
        marginTop: 40,
        padding: 20,
        background: 'rgba(59, 130, 246, 0.08)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        borderRadius: 12,
        fontSize: 13,
        color: 'var(--muted)',
        textAlign: 'center',
      }}>
        {isChinese 
          ? '使用 OneJob 即表示你同意本隐私政策。如果你不同意，请不要使用我们的服务。'
          : 'By using OneJob, you agree to this privacy policy. If you do not agree, please do not use our services.'}
      </div>
    </div>
  );
}