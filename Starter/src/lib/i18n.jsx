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

    // --- Profile page ---
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

    // --- Post Job page ---
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
  },

  zh: {
    // --- Nav ---
    nav_brand: "FastJob",
    nav_jobs: "Jobs",
    nav_employer: "Employer",
    nav_postJob: "发布职位",
    nav_dashboard: "Dashboard",
    nav_profile: "Profile",
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
    login_after: "登录后可以查看 Dashboard，修改 Profile，以及作为雇主发布职位。",

    // --- Profile page ---
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
    profile_website_placeholder: "例如：你的作品集 / GitHub / Behance 链接",
    profile_save: "保存资料",

    // --- Post Job page ---
    post_title: "发布职位",
    post_subtitle: "请填写清楚职位信息，让打工人一眼看到重点。",
    post_notLoggedIn: "当前未登录，提交时会要求你先登录账号。",
    post_success: "职位已发布成功！",
    post_error: "发布失败，请稍后再试。",
    post_validation_titleCompany: "职位名称和公司名称不能为空。",

    post_field_title: "职位名称",
    post_field_title_placeholder: "例如：Software Engineer / 厨房帮手",
    post_field_company: "公司名称",
    post_field_company_placeholder: "例如：Webstation Computer Centre",

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
