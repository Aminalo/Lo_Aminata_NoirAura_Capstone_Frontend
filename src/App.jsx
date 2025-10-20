import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Navbar from "./components/navbar/index.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoutes from "./components/protected_routes/ProtectedRoutes.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}