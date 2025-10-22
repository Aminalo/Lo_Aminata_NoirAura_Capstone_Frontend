import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export function getSalons() {
  return api.get("/salons");
}

export function getFavorites(token) {
  return api.get("/favorites", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function addFavorite(id, token) {
  return api.post(`/favorites/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function removeFavorite(id, token) {
  return api.delete(`/favorites/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export default api;