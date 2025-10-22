import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import "./navbar.css";

export default function Navbar() {
  const { cookies, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/auth");
  }

  return (
    <nav className="navbar">
      {}
      <Link to="/" className="logo">NoirAura</Link>

      {}
      <div className="nav-links">
        <Link to="/about">About</Link>
        {cookies.token ? (
          <>
            <Link to="/salons">Salons</Link>
            <Link to="/favorites">Favorites</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/auth">Login</Link>
        )}
      </div>
    </nav>
  );
}