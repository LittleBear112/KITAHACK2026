// src/components/JobCategorySelector.jsx - COMPLETE FILE
import React, { useState } from 'react';
import { JOB_CATEGORIES, generateJobTitle, getSalarySuggestion } from '../lib/jobCategories';
import { useLanguage } from '../lib/i18n';

export default function JobCategorySelector({ 
  onSelect, 
  selectedCategory, 
  selectedRole,
  onTitleGenerate,
  onSalaryHint 
}) {
  const { lang } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState(selectedCategory || null);

  const handleCategoryClick = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const handleRoleClick = (categoryId, role) => {
    // Call the parent callback
    if (onSelect) {
      onSelect(categoryId, role.id);
    }

    // Auto-generate job title
    if (onTitleGenerate) {
      const title = generateJobTitle(categoryId, role.id, lang);
      onTitleGenerate(title);
    }

    // Provide salary hint
    if (onSalaryHint) {
      const hint = getSalarySuggestion(categoryId, role.id);
      onSalaryHint(hint);
    }
  };

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Section Title */}
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
          {lang === 'zh' ? '选择职位类别' : 'Select Job Category'}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--muted)' }}>
          {lang === 'zh' ? '点击图标快速选择职位类型' : 'Click icon to quickly select job type'}
        </p>
      </div>

      {/* Category Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 12,
          marginBottom: expandedCategory ? 16 : 0,
        }}
      >
        {JOB_CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => handleCategoryClick(category.id)}
            style={{
              padding: 16,
              borderRadius: 12,
              border: expandedCategory === category.id 
                ? `2px solid ${category.color}` 
                : '2px solid var(--border)',
              background: expandedCategory === category.id
                ? `${category.color}15`
                : 'var(--card)',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{category.icon}</div>
            <div style={{ 
              fontSize: 14, 
              fontWeight: 600,
              color: expandedCategory === category.id ? category.color : 'var(--text)'
            }}>
              {category.name[lang]}
            </div>
          </button>
        ))}
      </div>

      {/* Role Chips - Expand when category selected */}
      {expandedCategory && (
        <div
          style={{
            padding: 16,
            background: 'var(--card)',
            borderRadius: 12,
            border: '1px solid var(--border)',
            animation: 'slideDown 0.3s ease-out',
          }}
        >
          <div style={{ 
            fontSize: 13, 
            color: 'var(--muted)', 
            marginBottom: 12,
            fontWeight: 500 
          }}>
            {lang === 'zh' ? '选择具体职位：' : 'Select specific role:'}
          </div>
          
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {getCategoryRoles(expandedCategory).map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleClick(expandedCategory, role)}
                style={{
                  padding: '10px 16px',
                  borderRadius: 20,
                  border: selectedRole === role.id
                    ? `2px solid ${getCategoryColor(expandedCategory)}`
                    : '1px solid var(--border)',
                  background: selectedRole === role.id
                    ? `${getCategoryColor(expandedCategory)}20`
                    : 'var(--bg)',
                  color: selectedRole === role.id
                    ? getCategoryColor(expandedCategory)
                    : 'var(--text)',
                  fontSize: 14,
                  fontWeight: selectedRole === role.id ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (selectedRole !== role.id) {
                    e.currentTarget.style.background = 'var(--card)';
                    e.currentTarget.style.borderColor = getCategoryColor(expandedCategory);
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedRole !== role.id) {
                    e.currentTarget.style.background = 'var(--bg)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }
                }}
              >
                {role[lang]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {selectedCategory && selectedRole && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: `${getCategoryColor(selectedCategory)}10`,
            border: `1px solid ${getCategoryColor(selectedCategory)}40`,
            borderRadius: 8,
            fontSize: 13,
            color: 'var(--text)',
          }}
        >
          <span style={{ fontWeight: 600 }}>
            {lang === 'zh' ? '已选择：' : 'Selected: '}
          </span>
          <span>
            {getCategoryName(selectedCategory, lang)} - {getRoleName(selectedCategory, selectedRole, lang)}
          </span>
        </div>
      )}
    </div>
  );
}

// Helper functions
function getCategoryRoles(categoryId) {
  const category = JOB_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.roles : [];
}

function getCategoryColor(categoryId) {
  const category = JOB_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.color : '#9ca3af';
}

function getCategoryName(categoryId, lang) {
  const category = JOB_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.name[lang] : '';
}

function getRoleName(categoryId, roleId, lang) {
  const category = JOB_CATEGORIES.find(cat => cat.id === categoryId);
  if (!category) return '';
  const role = category.roles.find(r => r.id === roleId);
  return role ? role[lang] : '';
}

// Add slide down animation to global CSS if not already present
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
if (!document.querySelector('#jobCategorySelectorStyles')) {
  style.id = 'jobCategorySelectorStyles';
  document.head.appendChild(style);
}