import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext/authContext";

// Pages & Components
import AuthPage from "./pages/auth/index";
import SalonList from "./pages/salons/index";
import Navbar from "./components/navbar/index";
import ProtectedRoutes from "./components/protected_routes/ProtectedRoutes";
import NotFound from "./pages/NotFound.jsx";


export default function App() {
  const { cookies } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            cookies.token ? (
              <Navigate to="/salons" replace />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />

        {/* Auth */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Private pages */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/salons" element={<SalonList />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}