import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import DashboardLayout from "./layouts/DashboardLaylout";
import HomePage from "./pages/dashboard/HomePage";
import CowRecordsPage from "./pages/dashboard/CowRecordsPage";
import MilkRecordPage from "./pages/dashboard/MilkRecordsPage";
import UserProfilePage from './pages/auth/UserProfilePage'
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./pages/ProtectedRoute";


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<HomePage />} />
          <Route path="cow-records" element={<CowRecordsPage />} />
          <Route path="milk-records" element={<MilkRecordPage />} />
          <Route path="profile" element={<UserProfilePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>

  );
};

export default App;