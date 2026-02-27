// src/pages/Disclaimer.jsx - COMPLETE FILE
import React from 'react';
import { useLanguage } from '../lib/i18n';

export default function Disclaimer() {
  const { lang } = useLanguage();
  const isChinese = lang === 'zh';

  return (
    <div className="card" style={{ maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
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
          {isChinese ? '免责声明' : 'Disclaimer'}
        </h1>
        <p style={{ 
          fontSize: 14, 
          color: 'var(--muted)', 
          margin: 0 
        }}>
          {isChinese 
            ? '最后更新：2025年12月' 
            : 'Last Updated: December 2025'}
        </p>
      </div>

      {/* Beta Notice */}
      <div style={{
        padding: 16,
        background: 'rgba(249, 115, 22, 0.1)',
        border: '1px solid rgba(249, 115, 22, 0.3)',
        borderRadius: 12,
        marginBottom: 32,
      }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
          {isChinese ? '⚠️ Beta 测试版提示' : '⚠️ Beta Version Notice'}
        </div>
        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6 }}>
          {isChinese
            ? '本平台目前处于测试阶段。我们尽力审核雇主，但无法保证 100% 安全。如发现可疑情况，请立即向我们举报。'
            : 'This platform is currently in Beta. We verify employers to the best of our ability but cannot guarantee 100% security. Please report suspicious activities to us immediately.'}
        </p>
      </div>

      {/* Main Content */}
      <div style={{ lineHeight: 1.8 }}>
        {/* Section 1 */}
        <Section 
          number="1"
          title={isChinese ? '平台性质声明' : 'Platform Nature'}
        >
          <p>
            {isChinese ? (
              <>
                <strong>OneJob</strong>（以下简称"本平台"）仅为求职者和招聘方提供信息发布与互动的网络空间。
                本平台<strong>不是</strong>职业介绍所、猎头公司或雇主。本平台不对任何招聘信息的真实性、准确性、合法性，
                或求职者的履历真实性、工作能力提供任何明示或暗示的担保。
              </>
            ) : (
              <>
                <strong>OneJob</strong> (hereinafter referred to as "the Platform") acts solely as an 
                information exchange platform for job seekers and employers. We are <strong>NOT</strong> a 
                recruitment agency or an employer. The Platform does not guarantee the authenticity, accuracy, 
                or legality of any job postings or user profiles.
              </>
            )}
          </p>
        </Section>

        {/* Section 2 */}
        <Section 
          number="2"
          title={isChinese ? '交易与风险提示' : 'Risk & Transaction Warning'}
          highlight
        >
          <SubSection title={isChinese ? '⚠️ 谨防诈骗' : '⚠️ Scam Alert'}>
            <p>
              {isChinese ? (
                <>
                  求职者在应聘过程中，如遇到招聘方要求<strong>提前支付押金、培训费、体检费</strong>等涉及金钱交易的行为，
                  请务必提高警惕，谨防受骗。本平台<strong>不对任何因私下交易产生的经济损失负责</strong>。
                </>
              ) : (
                <>
                  Job seekers should exercise caution if an employer requests <strong>upfront payments</strong> 
                  (e.g., deposits, training fees, medical fees) before employment. The Platform shall 
                  <strong> not be liable for any financial losses</strong> arising from private transactions.
                </>
              )}
            </p>
          </SubSection>

          <SubSection title={isChinese ? '💰 薪资纠纷' : '💰 Wage Disputes'}>
            <p>
              {isChinese ? (
                <>
                  本平台展示的薪资（如 RM 15/小时）仅供参考。实际薪资发放、工作内容及劳动合同的签订，
                  属于用户双方的私下行为，产生的任何劳务纠纷（如<strong>拖欠工资</strong>），
                  本平台<strong>不承担法律责任</strong>。
                </>
              ) : (
                <>
                  All salary agreements (e.g., RM 15/hour) and employment contracts are strictly between 
                  the job seeker and the employer. The Platform is <strong>not responsible for any labor disputes</strong>, 
                  including unpaid wages.
                </>
              )}
            </p>
          </SubSection>
        </Section>

        {/* Section 3 */}
        <Section 
          number="3"
          title={isChinese ? '线下安全' : 'Offline Safety'}
        >
          <p>
            {isChinese ? (
              <>
                用户双方在线下面试、试工或工作中发生的任何<strong>人身伤害、财产损失或意外事故</strong>，
                本平台概不负责。建议求职者在<strong>公共场所</strong>进行面试，并注意个人安全。
              </>
            ) : (
              <>
                The Platform assumes <strong>no liability</strong> for any personal injury, property damage, 
                or accidents that may occur during offline interviews or employment. Users are advised to 
                meet in <strong>public places</strong> and prioritize personal safety.
              </>
            )}
          </p>
        </Section>

        {/* Section 4 */}
        <Section 
          number="4"
          title={isChinese ? '系统服务' : 'Service Availability'}
        >
          <p>
            {isChinese ? (
              <>
                由于网络环境、黑客攻击、系统维护或不可抗力（如服务器故障）导致的服务中断、数据丢失或信息泄露，
                本平台在法律允许范围内不承担赔偿责任。
              </>
            ) : (
              <>
                The Platform shall not be held responsible for any service interruptions, data loss, 
                or system failures caused by force majeure, technical maintenance, or cyber-attacks.
              </>
            )}
          </p>
        </Section>

        {/* Section 5 */}
        <Section 
          number="5"
          title={isChinese ? '用户行为' : 'User Conduct'}
        >
          <p>
            {isChinese ? (
              <>
                任何用户不得利用本平台发布虚假、诈骗、色情、暴力或违反马来西亚法律的信息。
                一旦发现，本平台有权立即删除相关信息并封禁账号，且<strong>不退还已支付的任何费用</strong>。
              </>
            ) : (
              <>
                Users must not post false, fraudulent, pornographic, violent, or illegal content. 
                The Platform reserves the right to immediately remove such content and ban accounts 
                <strong> without refund</strong>.
              </>
            )}
          </p>
        </Section>

        {/* Section 6 */}
        <Section 
          number="6"
          title={isChinese ? '适用法律' : 'Governing Law'}
        >
          <p>
            {isChinese ? (
              <>
                使用本平台即表示您同意遵守<strong>马来西亚法律</strong>。本平台保留终止违反条款或当地法律的账户的权利。
              </>
            ) : (
              <>
                By using this Platform, you agree to comply with the <strong>laws of Malaysia</strong>. 
                The Platform reserves the right to terminate accounts that violate our terms or local laws.
              </>
            )}
          </p>
        </Section>
      </div>

      {/* Contact */}
      <div style={{
        marginTop: 40,
        padding: 20,
        background: 'var(--bg)',
        borderRadius: 12,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0, marginBottom: 8 }}>
          {isChinese ? '如有疑问，请联系我们：' : 'Questions? Contact us:'}
        </p>
        <a 
          href="mailto:support@onejob.my" 
          style={{ 
            fontSize: 16, 
            fontWeight: 600, 
            color: 'var(--primary)',
            textDecoration: 'none' 
          }}
        >
          support@onejob.my
        </a>
      </div>
    </div>
  );
}

// Helper Components
function Section({ number, title, children, highlight }) {
  return (
    <div style={{ 
      marginBottom: 32,
      paddingBottom: 24,
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12, 
        marginBottom: 16 
      }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: highlight ? 'var(--primary)' : 'rgba(148, 163, 184, 0.2)',
          color: highlight ? '#fff' : 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {number}
        </div>
        <h2 style={{ 
          fontSize: 20, 
          fontWeight: 700, 
          margin: 0,
          color: highlight ? 'var(--primary)' : 'var(--text)'
        }}>
          {title}
        </h2>
      </div>
      <div style={{ paddingLeft: 44 }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ 
        fontSize: 16, 
        fontWeight: 600, 
        marginBottom: 8,
        color: 'var(--text)'
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}