// src/ThemeToggle.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

/**
 * 全局主题 Provider
 * - 把 theme 保存在 state + localStorage
 * - 同时写到 <html data-theme="...">，配合 index.html 里的 CSS 变量
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  // 每次 theme 改变时，同步到 <html data-theme="..."> 和 localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * 供组件使用的 hook：拿到当前 theme 和 toggleTheme 函数
 */
export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * 可选：头部用的小按钮（如果你想直接在 App.jsx 里用现成的）
 * <ThemeSwitch /> 就会显示 Light / Dark 的切换按钮
 */
export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{
        borderRadius: 999,
        border: "1px solid rgba(148,163,184,0.4)",
        padding: "6px 14px",
        fontSize: 13,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: isLight ? "#f97316" : "#020617",
        color: isLight ? "#fff" : "#e5e7eb",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: isLight ? "#fed7aa" : "#e5e7eb",
        }}
      />
      {isLight ? "Light" : "Dark"}
    </button>
  );
}
