import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Enroll from "./pages/Auth/Enroll";
import Login from "./pages/Auth/Login";
import Signin from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Dashboard/Home/HomePage";
import SettingsPage from "./pages/Dashboard/Settings/SettingsPage";

import WorkoutPage from "./pages/Dashboard/Workout/WorkoutPage";
import WelcomePage from "./pages/Welcome/WelcomePage";

export default function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="workout" element={<WorkoutPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="home" element={<Home />} />
            <Route index path="*" element={<WorkoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// function ProtectedRouteGuard({ children }) {
//   const token = useToken();

//   if (!token) {
//     return <Navigate to="/sign-in" />;
//   }

//   return <>
//     {children}
//   </>;
// }
