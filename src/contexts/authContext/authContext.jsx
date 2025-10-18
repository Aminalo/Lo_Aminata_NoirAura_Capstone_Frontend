import { createContext, useMemo, useContext } from "react";
import { useCookies } from "react-cookie";
import api, { API_BASE } from "../../lib/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();

  // REGISTER
  async function signUp(formData) {
    const res = await api.post(`/auth/signup`, formData);
    // store token if backend returns it (if not, you can do a login immediately after signup)
    if (res.data?.token) setCookie("token", res.data.token, { path: "/" });
  }

  // LOGIN
  async function login(formData) {
    const res = await api.post(`/auth/login`, formData);
    setCookie("token", res.data.token, { path: "/" });
  }

  // LOGOUT
  function logout() {
    removeCookie("token", { path: "/" });
  }

  const value = useMemo(
    () => ({
      cookies,
      login,
      signUp,
      logout,
      API_BASE,
    }),
    [cookies]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}