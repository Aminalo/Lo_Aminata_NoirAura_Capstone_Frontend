import { createContext, useMemo, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const baseURL = "http://localhost:4000/api/auth"; // ✅ Backend endpoint

  // REGISTER NEW USER
  async function signUp(formData) {
    const res = await axios.post(`${baseURL}/signup`, formData);
    setCookie("token", res.data.token, { path: "/" });
  }

  // LOGIN EXISTING USER
  async function login(formData) {
    const res = await axios.post(`${baseURL}/login`, formData);
    setCookie("token", res.data.token, { path: "/" });
  }

  // LOGOUT USER
  function logout() {
    removeCookie("token", { path: "/" });
  }

  const value = useMemo(
    () => ({
      cookies,
      login,
      signUp,
      logout,
    }),
    [cookies]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook shortcut
export function useAuth() {
  return useContext(AuthContext);
}