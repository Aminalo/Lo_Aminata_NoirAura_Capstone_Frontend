import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext/authContext";
import { getFavorites, removeFavorite } from "../../lib/api";
import "./favorites.css";

export default function FavoritesPage() {
  const { cookies } = useAuth();
  const token = cookies.token;
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // --- Fetch favorites on mount ---
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

  // --- Toggle selection (for multi-delete) ---
  function toggleSelect(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  // --- Delete a single favorite ---
  async function deleteOne(id) {
    try {
      await removeFavorite(id, token);
      setFavorites((prev) => prev.filter((s) => s._id !== id));
      setSelected((prev) => prev.filter((s) => s !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  // --- Delete selected favorites ---
  async function deleteSelected() {
    if (!selected.length) return alert("No salons selected.");
    if (!confirm("Remove selected salons from favorites?")) return;

    try {
      for (const id of selected) {
        await removeFavorite(id, token);
      }
      setFavorites((prev) => prev.filter((s) => !selected.includes(s._id)));
      setSelected([]);
    } catch (err) {
      console.error(err.message);
    }
  }

  if (loading) return <div className="salon-loading">Loading favorites…</div>;
  if (err) return <div className="salon-error">{err}</div>;
  if (!favorites.length)
    return <div className="salon-empty">No favorites yet ❤️</div>;

  return (
    <section className="salon-list">
      <h1 className="salon-title">Your Favorite Salons</h1>

      {}
      {selected.length > 0 && (
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <button className="bulk-delete-btn" onClick={deleteSelected}>
             Remove Selected ({selected.length})
          </button>
        </div>
      )}

      <div className="salon-grid">
        {favorites.map((s) => (
          <article className="salon-card" key={s._id}>
            <div className="salon-img-wrap">
              <img src={s.photo} alt={s.name} />
            </div>

            <div className="salon-body">
              <h2 className="salon-name">{s.name}</h2>
              <p className="salon-city">{s.city}</p>

              {/* --- Action buttons --- */}
              <div className="fav-actions">
                <label>
                  <input
                    type="checkbox"
                    checked={selected.includes(s._id)}
                    onChange={() => toggleSelect(s._id)}
                  />{" "}
                  Select
                </label>
                <button
                  className="delete-one-btn"
                  onClick={() => deleteOne(s._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}