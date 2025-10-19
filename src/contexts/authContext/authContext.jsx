import { createContext, useMemo, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

// Create Context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();

  // Base URL for backend API
  const baseURL = "http://localhost:4000/api/auth";

  // --- SIGNUP ---
  async function signUp(formData) {
    try {
      const res = await axios.post(`${baseURL}/signup`, formData);
      if (res.data.token) {
        setCookie("token", res.data.token);
      }
      console.log("✅ User registered:", res.data);
    } catch (err) {
      console.error("❌ Signup failed:", err.response?.data || err.message);
      throw err;
    }
  }

  // --- LOGIN ---
  async function login(formData) {
    try {
      const res = await axios.post(`${baseURL}/login`, formData);
      if (res.data.token) {
        setCookie("token", res.data.token);
      }
      console.log("✅ User logged in:", res.data);
    } catch (err) {
      console.error("❌ Login failed:", err.response?.data || err.message);
      throw err;
    }
  }

  // --- LOGOUT ---
  function logout() {
    removeCookie("token");
    console.log("🚪 User logged out");
  }

  // --- Context Value ---
  const value = useMemo(
    () => ({
      cookies,
      login,
      signUp,
      logout,
    }),
    [cookies]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Helper Hook
export function useAuth() {
  return useContext(AuthContext);
}