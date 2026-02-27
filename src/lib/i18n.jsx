// src/lib/i18n.jsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const LanguageContext = createContext();

const dict = {
  en: {
    // --- Nav ---
    nav_brand: "FastJob",
    nav_jobs: "Jobs",
    nav_employer: "Employer",
    nav_postJob: "Post a Job",
    nav_dashboard: "Dashboard",
    nav_profile: "Profile",
    nav_signIn: "Sign in",
    nav_signOut: "Sign out",
    nav_hi: "Hi",

    theme_light: "Light",
    theme_dark: "Dark",

    // --- Login page ---
    login_title: "Sign in to FastJob",
    login_subtitle: "Use your email and password.",
    login_email: "Email",
    login_password: "Password",
    login_submit: "Sign in",
    login_google: "Continue with Google",
    login_noAccount:
      "No account? Please contact the admin to create a test account.",
    login_after:
      "After signing in you can view the Dashboard, edit your Profile and post jobs as an employer.",

    // --- Home page ---
    home_title_prefix: "Malaysia's fastest",
    home_title_highlight: "hourly job platform",
    home_subtitle:
      "Focused on part-time and temp jobs so bosses and workers can match quickly.",
    home_search_keyword_placeholder:
      "Keyword (waiter, driver, customer service…)",
    home_search_location_placeholder: "📍 Location (e.g. Sunway, Ipoh)",
    home_search_button: "Search jobs",
    home_hot_categories: "Hot categories",
    home_cat_fnb: "🍔 F&B",
    home_cat_retail: "🛍 Retail",
    home_cat_driver: "🚗 Driver",
    home_cat_cs: "🎧 Customer service",
    home_employer_cta_prefix: "I’m an employer, want to hire?",
    home_employer_cta_link: "Go to employer dashboard →",

    // --- Jobs page ---
    jobs_title: "Search jobs",
    jobs_keyword_placeholder:
      "Keyword, e.g. Waiter / Software Engineer",
    jobs_location_placeholder: "Location, e.g. Sunway / Ipoh",
    jobs_filter_parttime: "Hourly / Part-time",
    jobs_filter_fulltime: "Full-time",
    jobs_filter_all: "All",
    jobs_filter_reset: "Reset filters",
    jobs_recommended_title: "Recommended jobs",
    jobs_empty:
      "No jobs match your filters for now. Try adjusting your search?",
    jobs_fallback_company: "Company",
    jobs_fallback_location: "Location",
    jobs_salary_hourly_suffix: "/ hour",
    jobs_salary_negotiable: "Salary negotiable",
    jobs_badge_parttime: "Part-time / Hourly",
    jobs_badge_fulltime: "Full-time",

    // --- Profile page (old flat keys used by some components) ---
    profile_title: "Profile",
    profile_currentRole: "Current role",
    profile_role_employee: "Job seeker",
    profile_role_employer: "Employer",
    profile_role_user: "User",
    profile_roleLabel: "Account role",
    profile_loading: "Loading…",
    profile_needLogin: "Please sign in first to edit your profile.",
    profile_saved: "Profile saved.",
    profile_saveError: "Save failed, please try again later.",
    profile_name: "Name / Nickname",
    profile_phone: "Phone",
    profile_city: "City",
    profile_headline: "One-line headline",
    profile_about: "About me",
    profile_about_placeholder:
      "Briefly introduce your experience, skills, and what kind of job you want…",
    profile_socialTitle: "Social media / Links",
    profile_linkedin: "LinkedIn",
    profile_instagram: "Instagram",
    profile_website: "Personal website / Portfolio",
    profile_website_placeholder:
      "For example: your portfolio / GitHub / Behance etc.",
    profile_save: "Save profile",

    // --- Post Job page (old flat keys) ---
    post_title: "Post a Job",
    post_subtitle:
      "Fill in clear job information so workers can quickly understand your position.",
    post_notLoggedIn:
      "You are not logged in yet. You will be asked to login before submitting.",
    post_success: "Job posted successfully!",
    post_error: "Failed to publish, please try again later.",
    post_validation_titleCompany:
      "Job title and company name cannot be empty.",
    post_field_title: "Job title",
    post_field_title_placeholder:
      "e.g. Software Engineer / Kitchen Helper",
    post_field_company: "Company name",
    post_field_company_placeholder:
      "e.g. Webstation Computer Centre",
    post_field_location: "Work location (city / area)",
    post_field_location_placeholder: "e.g. Ipoh / Sunway",
    post_field_mapLocation: "Map address (optional, used for map)",
    post_field_mapLocation_placeholder:
      "e.g. Webstation Computer Centre, Ipoh",
    post_field_type: "Employment type",
    post_field_type_parttime: "Part-time",
    post_field_type_fulltime: "Full-time",
    post_field_type_intern: "Internship",
    post_field_salaryMin: "Minimum hourly wage (RM)",
    post_field_salaryMax: "Maximum hourly wage (RM)",
    post_field_description: "Job description",
    post_field_description_placeholder:
      "Briefly describe who you’re looking for, main duties, working hours etc…",
    post_field_skills:
      "Skills required (separated by comma, e.g. HTML, CSS, JS)",
    post_field_skills_placeholder: "e.g. C, C++, HTML, CSS, JS",
    post_submit: "Post job",
    post_submitting: "Posting…",

    // --- Profile page (new flat dotted keys) ---
    "profile.title": "Profile",
    "profile.currentRole": "Current role",
    "profile.loading": "Loading profile...",
    "profile.needLogin": "Please log in to edit your profile.",
    "profile.saved": "Profile saved successfully.",
    "profile.saveError": "Failed to save profile. Please try again.",
    "profile.roleLabel": "Choose your main identity",
    "profile.role.employer": "Employer",
    "profile.role.employee": "Job seeker",
    "profile.role.user": "User",
    "profile.name": "Name",
    "profile.phone": "Phone",
    "profile.city": "City",
    "profile.headline": "Short headline",
    "profile.about": "About me",
    "profile.about.placeholder":
      "Briefly introduce yourself, experience, and what type of jobs you are looking for.",
    "profile.socialTitle": "Social links (optional)",
    "profile.linkedin": "LinkedIn",
    "profile.instagram": "Instagram",
    "profile.website": "Website or portfolio",
    "profile.website.placeholder": "https://your-site.com",
    "profile.save": "Save profile",

    // --- Post job page (new flat dotted keys) ---
    "post.title": "Post a job",
    "post.subtitle":
      "Fill in the details below to publish your job to FastJob.",
    "post.notLoggedIn":
      "You are not logged in. Please log in before posting a job.",
    "post.validation.titleCompany":
      "Job title and company name cannot be empty.",
    "post.success": "Job posted successfully.",
    "post.error": "Failed to post job. Please try again later.",
    "post.field.title": "Job title",
    "post.field.title.placeholder":
      "e.g. Software Engineer / Kitchen helper",
    "post.field.company": "Company name",
    "post.field.company.placeholder":
      "e.g. Webstation Computer Centre",
    "post.field.location": "Work location (city / area)",
    "post.field.location.placeholder": "e.g. Ipoh / Sunway",
    "post.field.mapLocation": "Map address (optional)",
    "post.field.mapLocation.placeholder":
      "e.g. Webstation Computer Centre, Ipoh",
    "post.field.type": "Employment type",
    "post.field.type.parttime": "Hourly / Part-time",
    "post.field.type.fulltime": "Full-time",
    "post.field.type.intern": "Internship",
    "post.field.salaryMin": "Minimum hourly rate (RM)",
    "post.field.salaryMax": "Maximum hourly rate (RM)",
    "post.field.description": "Job description",
    "post.field.description.placeholder":
      "Briefly describe what you need, main tasks, working hours, etc.",
    "post.field.skills": "Skills / requirements",
    "post.field.skills.placeholder": "e.g. HTML, CSS, JS",
    "post.submitting": "Submitting...",
    "post.submit": "Post job",

    // --- Dashboard page ---
    "dashboard.title": "Dashboard",
    "dashboard.loginRequired": "Please log in to view your data.",
    "dashboard.loginButton": "Go to login",
    "dashboard.welcomeBack": "Welcome back",
    "dashboard.currentRole": "Current role",
    "dashboard.role.employer": "Employer",
    "dashboard.role.employee": "Job seeker",
    "dashboard.cta.findJobs": "🔍 Find jobs",
    "dashboard.cta.postJob": "➕ Post a job",
    "dashboard.cta.employerDashboard": "📊 Employer dashboard",
    "dashboard.plan.title": "Employer plan status",
    "dashboard.plan.loading": "Loading plan...",
    "dashboard.plan.none":
      "No active plan yet. You can start a free trial (3 free postings) on the post job page.",
    "dashboard.plan.current": "Current plan",
    "dashboard.plan.credits": "Remaining posting credits",
    "dashboard.plan.type.trial": "Trial (3 free postings)",
    "dashboard.plan.type.per_post": "Pay per post",
    "dashboard.plan.type.monthly": "Monthly plan",
    "dashboard.plan.type.unknown": "Not set",
    "dashboard.stats.myApplications": "My applications",
    "dashboard.stats.myJobs": "Jobs I posted",
    "dashboard.stats.offers": "Offers received",
    "dashboard.stats.rejections": "Rejections",
    "dashboard.apps.title": "My applications",
    "dashboard.apps.loading": "Loading...",
    "dashboard.apps.empty": "You haven't applied to any jobs yet.",
    "dashboard.apps.defaultStatus": "Applied",
    "dashboard.jobs.title": "Jobs I posted (employer)",
    "dashboard.jobs.loading": "Loading...",
    "dashboard.jobs.empty": "You haven't posted any jobs yet.",

    // --- Employer dashboard page ---
    "employer.needEmployerTitle": "Employer access required",
    "employer.needEmployerDesc":
      'This account is currently a "job seeker" and cannot post jobs. An admin can change your role to "employer" in the database.',
    "employer.backToDashboard": "Back to dashboard",
    "employer.plan.title": "Employer plan status",
    "employer.plan.current": "Current plan",
    "employer.plan.credits": "Remaining posting credits (credits)",
    "employer.title": "Employer dashboard",
    "employer.newJobButton": "+ Post a new job",
    "employer.jobs.title": "Jobs I posted",
    "employer.jobs.loading": "Loading jobs...",
    "employer.jobs.empty": "You have no jobs yet.",
    "employer.jobs.hourSuffix": "/ hour",
    "employer.jobs.status.open": "Open",
    "employer.jobs.status.closed": "Closed",
    "employer.jobs.edit": "Edit",
    "employer.jobs.close": "Close job",
    "employer.jobs.open": "Open job",
    "employer.jobs.delete": "Delete",
    "employer.confirm.delete":
      "Are you sure you want to delete this job? This cannot be undone.",
    "employer.confirm.open": "Reopen this job?",
    "employer.confirm.close": "Close this job?",
    "employer.status.deleted": "Job has been deleted.",
    "employer.status.opened": "Job is now open.",
    "employer.status.closed": "Job is now closed.",
    "employer.status.errorDelete":
      "Failed to delete job. Please try again.",
    "employer.status.errorToggle":
      "Failed to update job status. Please try again.",

    // --- Job detail page ---
    job_description_title: "Job description",
    job_description_empty: "No description provided.",
    job_skills_title: "Skills / Requirements",
    job_skills_empty: "No specific requirements.",
    job_apply_cta: "Apply now",
    job_apply_modal_title: "Apply for this job",
    job_apply_name: "Name",
    job_apply_phone: "Phone",
    job_apply_submit: "Send application",
    job_apply_cancel: "Cancel",
    job_apply_success: "Application sent.",
    job_apply_error: "Failed to send application. Please try again.",
    job_apply_needLogin: "Please sign in before applying.",
    job_favourite: "Save",

    // salary unit for fulltime
    jobs_salary_monthly_suffix: "/ month",

    // Jobs search button text
    jobs_search_button: "Search",

        nav_people: "People",

    // People search
    people_title: "Search people",
    people_subtitle: "Find job seekers and employers on FastJob.",
    people_search_placeholder: "Search by name, city, headline…",
    people_empty: "No profiles match your search yet.",

    // Public profile
    publicProfile_back: "Back to people",
    publicProfile_editOwn: "Edit my profile",
    publicProfile_isOwnHint: "This is how others see your profile.",
    publicProfile_noProfile: "This user has not set up a profile yet.",
    publicProfile_noPosts: "No posts yet.",

    // en
    nav_people: "People",

  },

  zh: {
    // --- Nav ---
    nav_brand: "FastJob",
    nav_jobs: "职位",          // ⬅️ changed
    nav_employer: "雇主",      // ⬅️ changed
    nav_postJob: "发布职位",
    nav_dashboard: "仪表盘",   // ⬅️ changed (or keep 'Dashboard' if you prefer)
    nav_profile: "个人资料",   // ⬅️ changed
    nav_signIn: "登录",
    nav_signOut: "退出",
    nav_hi: "Hi",

    theme_light: "浅色",
    theme_dark: "深色",

    // --- Login page ---
    login_title: "登录 FastJob",
    login_subtitle: "使用邮箱和密码登录。",
    login_email: "邮箱",
    login_password: "密码",
    login_submit: "登录",
    login_google: "使用 Google 登录",
    login_noAccount: "没有账号？请联系管理员创建测试账号。",
    login_after:
      "登录后可以查看 Dashboard，修改 Profile，以及作为雇主发布职位。",

    // --- Home page ---
    home_title_prefix: "马来西亚最快的",
    home_title_highlight: "小时工平台",
    home_subtitle:
      "专注兼职 / 临时工，让老板和打工人都能快速匹配。",
    home_search_keyword_placeholder:
      "关键词 (服务员、司机、客服…)",
    home_search_location_placeholder:
      "📍 地点 (如: Sunway, Ipoh)",
    home_search_button: "🔍 搜索工作",
    home_hot_categories: "热门分类",
    home_cat_fnb: "🍔 餐饮",
    home_cat_retail: "🛍 零售",
    home_cat_driver: "🚗 司机",
    home_cat_cs: "🎧 客服",
    home_employer_cta_prefix: "我是老板，要招人？",
    home_employer_cta_link: "进入雇主后台 →",

    // --- Jobs page ---
    jobs_title: "搜索职位",
    jobs_keyword_placeholder:
      "关键词，例如: 服务员 / Software Engineer",
    jobs_location_placeholder:
      "地点，例如: Sunway / Ipoh",
    jobs_filter_parttime: "小时工",
    jobs_filter_fulltime: "全职",
    jobs_filter_all: "全部",
    jobs_filter_reset: "重置筛选",
    jobs_recommended_title: "推荐职位",
    jobs_empty: "暂时没有符合条件的职位，试试修改筛选条件？",
    jobs_fallback_company: "公司",
    jobs_fallback_location: "地点",
    jobs_salary_hourly_suffix: "/ 小时",
    jobs_salary_negotiable: "薪资面议",
    jobs_badge_parttime: "兼职 / 小时工",
    jobs_badge_fulltime: "全职",

    // --- Profile page (old flat keys) ---
    profile_title: "个人资料",
    profile_currentRole: "当前身份",
    profile_role_employee: "求职者",
    profile_role_employer: "雇主",
    profile_role_user: "用户",
    profile_roleLabel: "账号角色",
    profile_loading: "载入中…",
    profile_needLogin: "请先登录账号才能编辑个人资料。",
    profile_saved: "个人资料已保存。",
    profile_saveError: "保存失败，请稍后再试。",
    profile_name: "姓名 / 昵称",
    profile_phone: "电话",
    profile_city: "所在城市",
    profile_headline: "一句话简介",
    profile_about: "关于我",
    profile_about_placeholder:
      "简单介绍你的经验、技能、想找怎样的工作…",
    profile_socialTitle: "社交媒体 / 链接",
    profile_linkedin: "LinkedIn",
    profile_instagram: "Instagram",
    profile_website: "个人网站 / 作品集",
    profile_website_placeholder:
      "例如：你的作品集 / GitHub / Behance 链接",
    profile_save: "保存资料",

    // --- Post Job page (old flat keys) ---
    post_title: "发布职位",
    post_subtitle: "请填写清楚职位信息，让打工人一眼看到重点。",
    post_notLoggedIn: "当前未登录，提交时会要求你先登录账号。",
    post_success: "职位已发布成功！",
    post_error: "发布失败，请稍后再试。",
    post_validation_titleCompany: "职位名称和公司名称不能为空。",
    post_field_title: "职位名称",
    post_field_title_placeholder: "例如：Software Engineer / 厨房帮手",
    post_field_company: "公司名称",
    post_field_company_placeholder:
      "例如：Webstation Computer Centre",
    post_field_location: "工作地点（城市 / 区域）",
    post_field_location_placeholder: "例如：Ipoh / Sunway",
    post_field_mapLocation: "地图地址（可选，用于地图）",
    post_field_mapLocation_placeholder:
      "例如：Webstation Computer Centre, Ipoh",
    post_field_type: "雇佣类型",
    post_field_type_parttime: "小时工 / Part-time",
    post_field_type_fulltime: "全职 / Full-time",
    post_field_type_intern: "实习 / Internship",
    post_field_salaryMin: "最低时薪 (RM)",
    post_field_salaryMax: "最高时薪 (RM)",
    post_field_description: "职位描述",
    post_field_description_placeholder:
      "简单介绍你们需要什么样的人、主要工作内容、上班时间等等…",
    post_field_skills: "技能要求（用逗号分隔，例如：HTML, CSS, JS）",
    post_field_skills_placeholder: "例如：C, C++, HTML, CSS, JS",
    post_submit: "发布职位",
    post_submitting: "发布中…",

    // --- Profile page (new dotted keys) ---
    "profile.title": "个人资料",
    "profile.currentRole": "当前身份",
    "profile.loading": "载入资料中…",
    "profile.needLogin": "请先登录再编辑个人资料。",
    "profile.saved": "资料已保存。",
    "profile.saveError": "保存失败，请稍后再试。",
    "profile.roleLabel": "选择你的主要身份",
    "profile.role.employer": "雇主",
    "profile.role.employee": "求职者",
    "profile.role.user": "用户",
    "profile.name": "姓名",
    "profile.phone": "手机",
    "profile.city": "城市",
    "profile.headline": "一句话简介",
    "profile.about": "关于我",
    "profile.about.placeholder":
      "简单介绍你自己、经验，以及你在找什么类型的工作。",
    "profile.socialTitle": "社交链接（可选）",
    "profile.linkedin": "LinkedIn",
    "profile.instagram": "Instagram",
    "profile.website": "个人网站 / 作品集",
    "profile.website.placeholder": "https://你的网址.com",
    "profile.save": "保存资料",

    // --- Post job page (new dotted keys) ---
    "post.title": "发布职位",
    "post.subtitle": "填写以下信息，把职位发布到 FastJob。",
    "post.notLoggedIn": "你还没有登录，请先登录再发布职位。",
    "post.validation.titleCompany": "职位名称和公司名称不能为空。",
    "post.success": "职位已发布。",
    "post.error": "发布失败，请稍后再试。",
    "post.field.title": "职位名称",
    "post.field.title.placeholder": "例如：Software Engineer / 厨房帮手",
    "post.field.company": "公司名称",
    "post.field.company.placeholder":
      "例如：Webstation Computer Centre",
    "post.field.location": "工作地点（城市 / 区域）",
    "post.field.location.placeholder": "例如：Ipoh / Sunway",
    "post.field.mapLocation": "地图地址（可选）",
    "post.field.mapLocation.placeholder":
      "例如：Webstation Computer Centre, Ipoh",
    "post.field.type": "雇佣类型",
    "post.field.type.parttime": "小时工 / Part-time",
    "post.field.type.fulltime": "全职 / Full-time",
    "post.field.type.intern": "实习 / Internship",
    "post.field.salaryMin": "最低时薪 (RM)",
    "post.field.salaryMax": "最高时薪 (RM)",
    "post.field.description": "职位描述",
    "post.field.description.placeholder":
      "简单介绍你们需要什么样的人、主要工作内容、上班时间等等…",
    "post.field.skills": "技能要求",
    "post.field.skills.placeholder": "例如：HTML, CSS, JS",
    "post.submitting": "提交中…",
    "post.submit": "发布职位",

    // --- Dashboard page ---
    "dashboard.title": "Dashboard",
    "dashboard.loginRequired": "请先登录查看你的数据。",
    "dashboard.loginButton": "去登录",
    "dashboard.welcomeBack": "欢迎回来",
    "dashboard.currentRole": "当前身份",
    "dashboard.role.employer": "雇主",
    "dashboard.role.employee": "求职者",
    "dashboard.cta.findJobs": "🔍 找工作",
    "dashboard.cta.postJob": "➕ 发布职位",
    "dashboard.cta.employerDashboard": "📊 雇主仪表盘",
    "dashboard.plan.title": "雇主套餐状态",
    "dashboard.plan.loading": "读取中...",
    "dashboard.plan.none":
      "还没有开通套餐。在发布职位页面可以开通试用（3 次免费发布）。",
    "dashboard.plan.current": "当前套餐",
    "dashboard.plan.credits": "剩余发布次数",
    "dashboard.plan.type.trial": "试用（3 次免费发布）",
    "dashboard.plan.type.per_post": "按帖计费",
    "dashboard.plan.type.monthly": "月度套餐",
    "dashboard.plan.type.unknown": "未设置",
    "dashboard.stats.myApplications": "我的申请",
    "dashboard.stats.myJobs": "我发布的职位",
    "dashboard.stats.offers": "获得 Offer",
    "dashboard.stats.rejections": "被拒记录",
    "dashboard.apps.title": "我的申请",
    "dashboard.apps.loading": "读取中...",
    "dashboard.apps.empty": "你还没有投递任何职位。",
    "dashboard.apps.defaultStatus": "已投递",
    "dashboard.jobs.title": "我发布的职位（雇主）",
    "dashboard.jobs.loading": "读取中...",
    "dashboard.jobs.empty": "你还没有发布任何职位。",

    // --- Employer dashboard page ---
    "employer.needEmployerTitle": "雇主权限需要开通",
    "employer.needEmployerDesc":
      '当前账号是「求职者」身份，不能发布职位。管理员可以在数据库中把你的 role 改成 "employer"。',
    "employer.backToDashboard": "返回仪表盘",
    "employer.plan.title": "雇主套餐状态",
    "employer.plan.current": "当前套餐",
    "employer.plan.credits": "剩余发布次数（credits）",
    "employer.title": "雇主仪表盘",
    "employer.newJobButton": "+ 发布一个新职位",
    "employer.jobs.title": "我发布的职位",
    "employer.jobs.loading": "载入职位中…",
    "employer.jobs.empty": "还没有职位。",
    "employer.jobs.hourSuffix": "/ 小时",
    "employer.jobs.status.open": "开放中",
    "employer.jobs.status.closed": "已关闭",
    "employer.jobs.edit": "编辑",
    "employer.jobs.close": "关闭职位",
    "employer.jobs.open": "打开职位",
    "employer.jobs.delete": "删除",
    "employer.confirm.delete": "确定要删除这个职位吗？删除后无法恢复。",
    "employer.confirm.open": "确定要打开这个职位吗？",
    "employer.confirm.close": "确定要关闭这个职位吗？",
    "employer.status.deleted": "职位已删除。",
    "employer.status.opened": "职位已打开（当前状态：开放中）。",
    "employer.status.closed": "职位已关闭。",
    "employer.status.errorDelete": "删除失败，请稍后再试。",
    "employer.status.errorToggle": "更新职位状态失败，请稍后再试。",

        // --- Job detail page ---
    job_description_title: "职位描述",
    job_description_empty: "暂无职位描述。",
    job_skills_title: "技能 / 要求",
    job_skills_empty: "暂无特别要求。",
    job_apply_cta: "立即申请",
    job_apply_modal_title: "申请这个职位",
    job_apply_name: "姓名",
    job_apply_phone: "手机",
    job_apply_submit: "确认发送",
    job_apply_cancel: "取消",
    job_apply_success: "申请已发送。",
    job_apply_error: "申请失败，请稍后再试。",
    job_apply_needLogin: "申请前请先登录。",
    job_favourite: "收藏",

    // 全职单位
    jobs_salary_monthly_suffix: "/ 月",

    // Jobs 搜索按钮
    jobs_search_button: "开始搜索",

        nav_people: "用户",

    // People search
    people_title: "搜索用户",
    people_subtitle: "在 FastJob 上查找求职者和雇主。",
    people_search_placeholder: "按姓名 / 城市 / 简介搜索…",
    people_empty: "暂时没有符合条件的用户。",

    // Public profile
    publicProfile_back: "返回用户列表",
    publicProfile_editOwn: "编辑我的资料",
    publicProfile_isOwnHint: "这是其他人看到的你的公开资料。",
    publicProfile_noProfile: "这个用户还没有完善个人资料。",
    publicProfile_noPosts: "暂时还没有发布作品。",

    // zh
    nav_people: "用户",

  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "zh";
    return localStorage.getItem("lang") || "zh";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useCallback(
    (key) => {
      const pack = dict[lang] || dict.en;
      return pack[key] || dict.en[key] || key;
    },
    [lang]
  );

  const value = { lang, setLang, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
