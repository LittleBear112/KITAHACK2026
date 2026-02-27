// src/main.jsx - COMPLETE FILE
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "./App.jsx";

// --- Pages ---
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Job from "./pages/Job.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";
import Applicants from "./pages/Applicants.jsx";
import MyApplications from "./pages/MyApplications.jsx";
import PostJob from "./pages/PostJob.jsx";
import EditJob from "./pages/EditJob.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ChooseRole from "./pages/ChooseRole.jsx";
import People from "./pages/People.jsx";
import PublicProfile from "./pages/PublicProfile.jsx";
import EmployerPricing from "./pages/EmployerPricing.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Terms from "./pages/Terms.jsx";
import FAQ from './pages/FAQ';
import Safety from './pages/Safety';
import Privacy from './pages/Privacy';

// --- Context ---
import {
  AuthProvider,
  useAuthState,
} from "./lib/useAuthState.jsx";
import { ThemeProvider } from "./ThemeToggle.jsx";
import { LanguageProvider } from "./lib/i18n.jsx";

// Gate
import PostJobGate from "./components/PostJobGate.jsx";

function RouterLogic() {
  const { user, loading } = useAuthState();

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* ==================== PUBLIC ROUTES ==================== */}
        
        {/* Root: Landing page for guests, Home for logged-in users */}
        <Route index element={user ? <Home /> : <Landing />} />

        {/* Authentication */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="choose-role"
          element={user ? <ChooseRole /> : <Navigate to="/login" replace />}
        />

        {/* Legal Pages */}
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="terms" element={<Terms />} />

        {/* Job browsing (public) */}
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:jobId" element={<Job />} />

        {/* ✅ Applicants page - accessible via /jobs/:jobId/applicants */}
        <Route
          path="jobs/:jobId/applicants"
          element={
            <PostJobGate>
              <Applicants />
            </PostJobGate>
          }
        />

        {/* ==================== USER ROUTES (Logged-in only) ==================== */}
        
        <Route
          path="dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />

        <Route
          path="my-applications"
          element={user ? <MyApplications /> : <Navigate to="/login" />}
        />

        {/* People search & profiles */}
        <Route
          path="people"
          element={user ? <People /> : <Navigate to="/login" />}
        />
        <Route
          path="people/:uid"
          element={user ? <PublicProfile /> : <Navigate to="/login" />}
        />

        {/* ==================== EMPLOYER ROUTES ==================== */}
        
        {/* Employer Dashboard */}
        <Route
          path="employer"
          element={
            <PostJobGate>
              <EmployerDashboard />
            </PostJobGate>
          }
        />

        {/* 🔥 Employer Pricing/Plan - 所有人都能访问（不需要 PostJobGate）*/}
        <Route
          path="employer/plan"
          element={user ? <EmployerPricing /> : <Navigate to="/login" replace />}
        />

        {/* Post New Job - 需要套餐权限 */}
        <Route
          path="employer/post"
          element={
            <PostJobGate>
              <PostJob />
            </PostJobGate>
          }
        />

        {/* Edit Job - 需要套餐权限 */}
        <Route
          path="employer/jobs/:jobId/edit"
          element={
            <PostJobGate>
              <EditJob />
            </PostJobGate>
          }
        />

        {/* ✅ Applicants page - also accessible via /employer/jobs/:jobId/applicants */}
        <Route
          path="employer/jobs/:jobId/applicants"
          element={
            <PostJobGate>
              <Applicants />
            </PostJobGate>
          }
        />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/privacy" element={<Privacy />} />
        
      </Route>
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <RouterLogic />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);