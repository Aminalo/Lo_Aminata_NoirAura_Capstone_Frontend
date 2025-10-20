import "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";

export default function Navbar() {
  const { cookies, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/auth");
  }

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "10px" }}>
      <Link to="/">Home</Link>
      {cookies.token ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/auth">Login</Link>
      )}
    </nav>
  );
}