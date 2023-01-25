import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/Dashboard";

import WorkoutPage from "./pages/Workout";

export default function App() {
  return (<>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth" element={}/> */}
        {/* <Route path="/enroll" element={}/> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="workout" element={<WorkoutPage />} />
          {/* <Route path="profile" element={< />} /> */}
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
