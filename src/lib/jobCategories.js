// src/lib/jobCategories.js - COMPLETE FILE
// Malaysian Job Categories for Hourly/Low-wage Jobs

export const JOB_CATEGORIES = [
  {
    id: 'fnb',
    name: { zh: '餐饮', en: 'F&B' },
    icon: '🍔',
    color: '#f97316',
    roles: [
      { id: 'waiter', zh: '服务员', en: 'Waiter/Waitress', salary: { min: 10, max: 15 } },
      { id: 'kitchen', zh: '厨房帮手', en: 'Kitchen Helper', salary: { min: 10, max: 14 } },
      { id: 'dishwasher', zh: '洗碗工', en: 'Dishwasher', salary: { min: 10, max: 13 } },
      { id: 'barista', zh: '咖啡师', en: 'Barista', salary: { min: 12, max: 18 } },
      { id: 'stall', zh: '摊位助手', en: 'Stall Assistant', salary: { min: 10, max: 14 } },
    ]
  },
  {
    id: 'retail',
    name: { zh: '零售/销售', en: 'Retail' },
    icon: '🛒',
    color: '#3b82f6',
    roles: [
      { id: 'cashier', zh: '收银员', en: 'Cashier', salary: { min: 10, max: 15 } },
      { id: 'stocker', zh: '理货员', en: 'Store Assistant', salary: { min: 10, max: 14 } },
      { id: 'promoter', zh: '促销员', en: 'Promoter', salary: { min: 12, max: 20 } },
      { id: 'sales', zh: '商场销售', en: 'Sales Associate', salary: { min: 12, max: 18 } },
    ]
  },
  {
    id: 'logistics',
    name: { zh: '物流/司机', en: 'Logistics' },
    icon: '🛵',
    color: '#10b981',
    roles: [
      { id: 'rider', zh: '送餐骑士', en: 'Food Rider', salary: { min: 12, max: 20 } },
      { id: 'driver', zh: '货车司机', en: 'Lorry Driver', salary: { min: 15, max: 25 } },
      { id: 'packer', zh: '仓库打包', en: 'Packer', salary: { min: 10, max: 14 } },
      { id: 'delivery', zh: '送货员', en: 'Delivery', salary: { min: 12, max: 18 } },
    ]
  },
  {
    id: 'services',
    name: { zh: '服务/总务', en: 'General Services' },
    icon: '🧹',
    color: '#8b5cf6',
    roles: [
      { id: 'cleaner', zh: '清洁工', en: 'Cleaner', salary: { min: 10, max: 14 } },
      { id: 'receptionist', zh: '前台/接待', en: 'Receptionist', salary: { min: 12, max: 16 } },
      { id: 'event', zh: '活动兼职', en: 'Event Crew', salary: { min: 15, max: 25 } },
      { id: 'security', zh: '保安', en: 'Security', salary: { min: 12, max: 18 } },
    ]
  },
  {
    id: 'factory',
    name: { zh: '工厂/技工', en: 'Factory/Tech' },
    icon: '🏭',
    color: '#ef4444',
    roles: [
      { id: 'operator', zh: '操作员', en: 'Operator', salary: { min: 12, max: 18 } },
      { id: 'apprentice', zh: '学徒', en: 'Apprentice', salary: { min: 10, max: 15 } },
      { id: 'mechanic', zh: '汽车维修', en: 'Mechanic', salary: { min: 15, max: 30 } },
    ]
  },
  {
    id: 'customer',
    name: { zh: '客服', en: 'Customer Service' },
    icon: '👥',
    color: '#ec4899',
    roles: [
      { id: 'callcenter', zh: '客服专员', en: 'Call Center', salary: { min: 12, max: 18 } },
      { id: 'support', zh: '支援专员', en: 'Support Staff', salary: { min: 12, max: 16 } },
    ]
  },
];

// Helper functions
export function getCategoryById(id) {
  return JOB_CATEGORIES.find(cat => cat.id === id);
}

export function getRoleById(categoryId, roleId) {
  const category = getCategoryById(categoryId);
  if (!category) return null;
  return category.roles.find(role => role.id === roleId);
}

export function getRoleName(categoryId, roleId, lang = 'zh') {
  const role = getRoleById(categoryId, roleId);
  return role ? role[lang] : '';
}

export function getSalarySuggestion(categoryId, roleId) {
  const role = getRoleById(categoryId, roleId);
  if (!role || !role.salary) return null;
  return `RM ${role.salary.min} - ${role.salary.max}`;
}

export function generateJobTitle(categoryId, roleId, lang = 'zh') {
  const roleName = getRoleName(categoryId, roleId, lang);
  if (!roleName) return '';
  
  const prefix = lang === 'zh' ? '招聘' : 'Hiring';
  return `${prefix} ${roleName}`;
}