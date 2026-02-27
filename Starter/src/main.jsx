// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

// --- Pages ---
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Job from "./pages/Job.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";
import Applicants from "./pages/Applicants.jsx";
import PostJob from "./pages/PostJob.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// --- Context providers ---
import { AuthProvider } from "./lib/useAuthState.jsx";
import { ThemeProvider } from "./ThemeToggle.jsx";
import { LanguageProvider } from "./lib/i18n.jsx";

// 🔥 注意：这里用的是 components/PostJobGate.jsx
import PostJobGate from "./components/PostJobGate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                {/* 首页 */}
                <Route index element={<Home />} />

                {/* 求职者端：职位列表 & 详情 */}
                <Route path="jobs" element={<Jobs />} />
                <Route path="jobs/:jobId" element={<Job />} />

                {/* 雇主端：需要通过 PostJobGate 保护 */}
                <Route
                  path="employer"
                  element={
                    <PostJobGate>
                      <EmployerDashboard />
                    </PostJobGate>
                  }
                />

                <Route
                  path="employer/post"
                  element={
                    <PostJobGate>
                      <PostJob />
                    </PostJobGate>
                  }
                />

                <Route
                  path="employer/jobs/:jobId/applicants"
                  element={
                    <PostJobGate>
                      <Applicants />
                    </PostJobGate>
                  }
                />

                {/* 通用页面 */}
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
