import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext/authContext";

import Navbar from "./components/navbar/index.jsx";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import AuthPage from "./pages/auth/index.jsx";
import SalonList from "./pages/salons/index.jsx";
import FavoritesPage from "./pages/favorites/index.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoutes from "./components/protected_routes/ProtectedRoutes.jsx";

export default function App() {
  const { cookies } = useAuth();

  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing: if logged in, skip to salons */}
        <Route path="/" element={<Home />} />

        {/* Public */}
        <Route path="/about" element={<About />} />
        <Route
          path="/auth"
          element={
            cookies.token ? <Navigate to="/salons" replace /> : <AuthPage />
          }
        />
        <Route path="/favorites" element={<FavoritesPage />} />


        {/* Protected */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/salons" element={<SalonList />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}