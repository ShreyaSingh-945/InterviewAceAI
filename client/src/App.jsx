import { Routes, Route } from 'react-router-dom';
import LandingLayout from "./components/layout/LandingLayout";
import AuthLayout from "./components/layout/AuthLayout";
import AppLayout from "./components/layout/AppLayout";

import LandingPage from "./pages/landing/LandingPage";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from "./pages/dashboard/Home";
import ResumeAnalyzer from "./pages/dashboard/ResumeAnalyzer";
import JDMatcher from "./pages/dashboard/JDMatcher";
import ProtectedRoute from "./components/ProtectedRoute";
import MockInterview from "./pages/dashboard/MockInterview";
import FeedbackReport from './pages/dashboard/FeedbackReport';
import Analytics from './pages/dashboard/Analytics';
import Settings from './pages/dashboard/Settigs';
function App() {
  return (


    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>


      <Route path="/dashboard" element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Home />} />
        <Route path="resume" element={<ResumeAnalyzer />} />
        <Route path="jd" element={<JDMatcher />} />
        <Route path="mock-interview" element={<MockInterview />} />
        <Route path="feedback-report" element={<FeedbackReport />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>

  );
}
export default App;