import { useAuth } from "../../contexts/authContext/authContext";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { cookies } = useAuth();

  // If token exists, show the protected page; else redirect to /auth
  return cookies.token ? <Outlet /> : <Navigate to="/auth" replace />;
}