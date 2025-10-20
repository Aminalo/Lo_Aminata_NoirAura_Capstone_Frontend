import { useAuth } from "../../contexts/authContext/authContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { cookies, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/auth");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to NoirAura Dashboard</h1>
      <p>Your token: {cookies.token ? "Active ✅" : "Not found ❌"}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}