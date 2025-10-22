import { useEffect, useState } from "react";
import api from "../../lib/api";
import "./salons.css";

export default function SalonList() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchSalons() {
      try {
        setLoading(true);
        const { data } = await api.get("/salons");
        if (isMounted) setSalons(data || []);
      } catch (e) {
        if (isMounted) setErr(e.response?.data?.msg || "Failed to load salons.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchSalons();
    return () => { isMounted = false; };
  }, []);

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

              {/* Placeholder CTA for future booking flow */}
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