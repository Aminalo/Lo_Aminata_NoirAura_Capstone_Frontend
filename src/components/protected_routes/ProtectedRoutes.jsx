import { useAuth } from "../../contexts/authContext/authContext";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { cookies } = useAuth();

  // If no token in cookies, redirect to /auth
  if (!cookies.token) {
    return <Navigate to="/auth" replace />;
  }

  // Otherwise, allow access
  return <Outlet />;
}