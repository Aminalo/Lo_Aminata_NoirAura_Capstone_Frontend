import { useEffect, useState } from "react";
import "./salons.css";

export default function SalonList() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSalons() {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_BASE
            ? `${import.meta.env.VITE_API_BASE}/salons`
            : "http://localhost:4000/api/salons"
        );
        const data = await res.json();
        setSalons(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching salons:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSalons();
  }, []);

  if (loading) return <p className="loading">Loading salons...</p>;

  return (
    <section className="salon-list">
      <h1>Available Salons</h1>
      <div className="grid">
        {salons.map((s) => (
          <div key={s._id || s.name} className="card">
            <img
              src={s.photo || "https://placehold.co/400x300?text=NoirAura"}
              alt={s.name}
            />
            <div className="body">
              <h2>{s.name}</h2>
              <p className="city">{s.city}</p>
              <ul className="services">
                {(s.services || []).map((srv, i) => (
                  <li key={i}>
                    {srv.name} — ${srv.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}