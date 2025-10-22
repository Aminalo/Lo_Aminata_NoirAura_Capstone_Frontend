import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext/authContext";
import { getFavorites } from "../../lib/api";
import "./favorites.css";

export default function FavoritesPage() {
  const { cookies } = useAuth();
  const token = cookies.token;
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const { data } = await getFavorites(token);
        setFavorites(data);
      } catch (e) {
        setErr(e.response?.data?.msg || "Failed to load favorites.");
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [token]);

  if (loading) return <div className="salon-loading">Loading favorites…</div>;
  if (err) return <div className="salon-error">{err}</div>;
  if (!favorites.length)
    return <div className="salon-empty">No favorites yet ❤️</div>;

  return (
    <section className="salon-list">
      <h1 className="salon-title">Your Favorite Salons</h1>

      <div className="salon-grid">
        {favorites.map((s) => (
          <article className="salon-card" key={s._id}>
            <div className="salon-img-wrap">
              <img src={s.photo} alt={s.name} />
            </div>
            <div className="salon-body">
              <h2 className="salon-name">{s.name}</h2>
              <p className="salon-city">{s.city}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}