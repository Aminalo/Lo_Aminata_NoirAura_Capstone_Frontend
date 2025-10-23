import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext/authContext";
import { getFavorites, addFavorite, removeFavorite } from "../../lib/api";
import api from "../../lib/api";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ icons
import "./salons.css";

export default function SalonList() {
  const { cookies } = useAuth();
  const token = cookies.token;
  const [salons, setSalons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // --- Fetch salons + favorites ---
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const [{ data: salonData }, favRes] = await Promise.all([
          api.get("/salons"),
          token ? getFavorites(token) : Promise.resolve({ data: [] }),
        ]);
        if (isMounted) {
          setSalons(salonData || []);
          setFavorites(favRes?.data?.map((s) => s._id) || []);
        }
      } catch (e) {
        if (isMounted)
          setErr(e.response?.data?.msg || "Failed to load salons.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [token]);

  // --- Toggle favorite ---
  async function toggleFavorite(id) {
    if (!token) return alert("Please log in to use favorites");

    try {
      if (favorites.includes(id)) {
        await removeFavorite(id, token);
        setFavorites((prev) => prev.filter((f) => f !== id));
      } else {
        await addFavorite(id, token);
        setFavorites((prev) => [...prev, id]);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  if (loading) return <div className="salon-loading">Loading salons…</div>;
  if (err) return <div className="salon-error">{err}</div>;
  if (!salons.length) return <div className="salon-empty">No salons yet.</div>;

  return (
    <section className="salon-list">
      <h1 className="salon-title">Our Selected Salons</h1>

      <div className="salon-grid">
        {salons.map((s) => (
          <article className="salon-card" key={s._id}>
            <div className="salon-img-wrap">
              <img src={s.photo} alt={s.name} />

              {/* Heart button top-right */}
              {token && (
                <button
                  className="heart-btn"
                  onClick={() => toggleFavorite(s._id)}
                  title={
                    favorites.includes(s._id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {favorites.includes(s._id) ? (
                    <FaHeart className="heart filled" />
                  ) : (
                    <FaRegHeart className="heart" />
                  )}
                </button>
              )}
            </div>

            <div className="salon-body">
              <h2 className="salon-name">{s.name}</h2>
              <p className="salon-city">{s.city}</p>

              {Array.isArray(s.services) && s.services.length > 0 && (
                <div className="salon-services">
                  <h3>Popular Services</h3>
                  <ul>
                    {s.services.slice(0, 3).map((svc, i) => (
                      <li key={i}>
                        <span>{svc.name}</span>
                        <span className="svc-meta">
                          ${svc.price} • {svc.duration}m
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className="salon-cta" disabled title="Booking coming soon">
                Take Appointment (soon)
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}