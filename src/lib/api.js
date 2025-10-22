import axios from "axios";

// Base URL from Vite env. Example in .env: VITE_API_BASE="http://localhost:4000/api"
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:4000/api",
});

// Attach token from cookies (if present)
api.interceptors.request.use((config) => {
  // read cookies safely without React hooks
  const cookieStr = document.cookie || "";
  const tokenMatch = cookieStr.match(/(?:^|;\s*)token=([^;]+)/);
  const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;