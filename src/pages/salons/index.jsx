import { useState, useEffect } from "react";
import axios from "axios";
import "./salons.css";

export default function SalonList() {
    const [salons, setSalons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchSalons() {
            try {
                const res = await axios.get("http://localhost:4000/api/salons");
                setSalons(res.data);
            } catch (err) {
                console.error("❌ Failed to fetch salons:", err);
                setError("Could not load salon data");
            } finally {
                setLoading(false);
            }
        }
        fetchSalons();
    }, []);

    if (loading) return <p>Loading salons...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="salon-container">
            <h1>NoirAura Salons</h1>
            <div className="salon-grid">
                {salons.map((salon) => (
                    <div key={salon._id} className="salon-card">
                        <img src={salon.photo} alt={salon.name} />
                        <h2>{salon.name}</h2>
                        <p>📍 {salon.city}</p>
                        <h4>Services:</h4>
                        <ul>
                            {salon.services.map((s, i) => (
                                <li key={i}>
                                    {s.name} - ${s.price} ({s.duration} min)
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}