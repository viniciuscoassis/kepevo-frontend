import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import useToken from "./hooks/useToken";

import Enroll from "./pages/Auth/Enroll";
import Login from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Dashboard/Home/HomePage";
import SettingsPage from "./pages/Dashboard/Settings/SettingsPage";

import WorkoutPage from "./pages/Dashboard/Workout/WorkoutPage";
import WelcomePage from "./pages/Welcome/WelcomePage";

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/signup" element={<SignUpPage />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            >
              <Route path="workout" element={<WorkoutPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="home" element={<Home />} />
              <Route index path="*" element={<WorkoutPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
