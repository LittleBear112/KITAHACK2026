// src/pages/Terms.jsx - COMPLETE FILE
import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Link } from 'react-router-dom';

export default function Terms() {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';

  return (
    <div className="card" style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ 
        borderBottom: '2px solid var(--primary)', 
        paddingBottom: 16, 
        marginBottom: 24 
      }}>
        <h1 style={{ 
          fontSize: 28, 
          fontWeight: 700, 
          margin: 0, 
          marginBottom: 8,
          color: 'var(--primary)' 
        }}>
          {isChinese ? '用户协议与服务条款' : 'Terms of Service'}
        </h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>
          {isChinese 
            ? '最后更新：2025年12月' 
            : 'Last Updated: December 2025'}
        </p>
      </div>

      <div style={{ lineHeight: 1.8, fontSize: 15 }}>
        <Section title={isChinese ? '1. 服务条款的接受' : '1. Acceptance of Terms'}>
          <p>
            {isChinese ? (
              <>
                欢迎使用 OneJob！通过访问或使用本平台，您同意受这些条款的约束。
                如果您不同意这些条款，请不要使用本平台。
              </>
            ) : (
              <>
                Welcome to OneJob! By accessing or using this platform, you agree to be bound by these terms. 
                If you do not agree to these terms, please do not use the platform.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '2. 用户资格' : '2. User Eligibility'}>
          <p>
            {isChinese ? (
              <>
                您必须年满 18 岁才能使用本平台。通过使用本平台，您声明并保证您已满 18 岁。
              </>
            ) : (
              <>
                You must be at least 18 years old to use this platform. By using this platform, 
                you represent and warrant that you are at least 18 years of age.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '3. 账户注册' : '3. Account Registration'}>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              {isChinese 
                ? '您必须提供准确、完整和最新的信息' 
                : 'You must provide accurate, complete, and current information'}
            </li>
            <li>
              {isChinese 
                ? '您有责任维护账户密码的安全' 
                : 'You are responsible for maintaining the security of your password'}
            </li>
            <li>
              {isChinese 
                ? '您对账户下发生的所有活动负责' 
                : 'You are responsible for all activities under your account'}
            </li>
            <li>
              {isChinese 
                ? '禁止与他人共享账户' 
                : 'Account sharing is prohibited'}
            </li>
          </ul>
        </Section>

        <Section title={isChinese ? '4. 禁止行为' : '4. Prohibited Conduct'}>
          <p>{isChinese ? '用户不得：' : 'Users must not:'}</p>
          <ul style={{ paddingLeft: 20 }}>
            <li>{isChinese ? '发布虚假或误导性信息' : 'Post false or misleading information'}</li>
            <li>{isChinese ? '从事欺诈或非法活动' : 'Engage in fraudulent or illegal activities'}</li>
            <li>{isChinese ? '骚扰、辱骂或威胁其他用户' : 'Harass, abuse, or threaten other users'}</li>
            <li>{isChinese ? '发布色情、暴力或仇恨内容' : 'Post pornographic, violent, or hate content'}</li>
            <li>{isChinese ? '侵犯他人知识产权' : 'Infringe on intellectual property rights'}</li>
            <li>{isChinese ? '试图破坏平台安全' : 'Attempt to compromise platform security'}</li>
          </ul>
        </Section>

        <Section title={isChinese ? '5. 职位发布规则' : '5. Job Posting Rules'}>
          <p>{isChinese ? '雇主必须：' : 'Employers must:'}</p>
          <ul style={{ paddingLeft: 20 }}>
            <li>{isChinese ? '提供真实准确的职位信息' : 'Provide truthful and accurate job information'}</li>
            <li>{isChinese ? '遵守马来西亚劳动法' : 'Comply with Malaysian labor laws'}</li>
            <li>{isChinese ? '不得要求求职者提前付款' : 'Not request upfront payments from job seekers'}</li>
            <li>{isChinese ? '不得发布歧视性招聘信息' : 'Not post discriminatory job listings'}</li>
          </ul>
        </Section>

        <Section title={isChinese ? '6. 付费服务' : '6. Paid Services'}>
          <p>
            {isChinese ? (
              <>
                本平台可能提供付费套餐服务。所有付款均不可退还，除非法律另有规定。
                我们保留随时更改定价的权利。
              </>
            ) : (
              <>
                The platform may offer paid subscription plans. All payments are non-refundable 
                unless otherwise required by law. We reserve the right to change pricing at any time.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '7. 知识产权' : '7. Intellectual Property'}>
          <p>
            {isChinese ? (
              <>
                本平台的所有内容、功能和设计均为 OneJob 或其许可方的专有财产，受版权、商标和其他知识产权法保护。
              </>
            ) : (
              <>
                All content, features, and design of the platform are the exclusive property of OneJob 
                or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '8. 账户终止' : '8. Account Termination'}>
          <p>
            {isChinese ? (
              <>
                我们保留随时暂停或终止违反这些条款的账户的权利，恕不另行通知。
              </>
            ) : (
              <>
                We reserve the right to suspend or terminate accounts that violate these terms 
                at any time without prior notice.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '9. 免责声明' : '9. Disclaimer'}>
          <p>
            {isChinese ? (
              <>
                请阅读我们的完整{' '}
                <Link to="/disclaimer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  免责声明
                </Link>
                {' '}了解更多信息。
              </>
            ) : (
              <>
                Please read our full{' '}
                <Link to="/disclaimer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  Disclaimer
                </Link>
                {' '}for more information.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '10. 条款变更' : '10. Changes to Terms'}>
          <p>
            {isChinese ? (
              <>
                我们保留随时修改这些条款的权利。继续使用本平台即表示接受修订后的条款。
              </>
            ) : (
              <>
                We reserve the right to modify these terms at any time. Continued use of the platform 
                constitutes acceptance of the revised terms.
              </>
            )}
          </p>
        </Section>

        <Section title={isChinese ? '11. 联系我们' : '11. Contact Us'}>
          <p>
            {isChinese ? (
              <>
                如对这些条款有任何疑问，请通过{' '}
                <a href="mailto:support@onejob.my" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  support@onejob.my
                </a>
                {' '}联系我们。
              </>
            ) : (
              <>
                If you have any questions about these terms, please contact us at{' '}
                <a href="mailto:support@onejob.my" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  support@onejob.my
                </a>
              </>
            )}
          </p>
        </Section>
      </div>

      <div style={{
        marginTop: 32,
        padding: 16,
        background: 'rgba(249, 115, 22, 0.1)',
        borderRadius: 12,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 14, margin: 0 }}>
          {isChinese ? (
            <>
              使用 OneJob 即表示您同意这些条款和我们的{' '}
              <Link to="/disclaimer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                免责声明
              </Link>
            </>
          ) : (
            <>
              By using OneJob, you agree to these terms and our{' '}
              <Link to="/disclaimer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Disclaimer
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ 
        fontSize: 18, 
        fontWeight: 700, 
        marginBottom: 12,
        color: 'var(--text)'
      }}>
        {title}
      </h2>
      <div style={{ color: 'var(--text)' }}>
        {children}
      </div>
    </div>
  );
}