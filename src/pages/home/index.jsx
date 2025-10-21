import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import heroImg from "../../assets/hero.jpg";  
import "./home.css";

export default function Home() {
  const { cookies } = useAuth();
  if (cookies.token) return <Navigate to="/salons" replace />;

  return (
    <section className="home-hero">
      <div className="home-text">
        <h1>Soft, Glowy Beauty For Every Style</h1>
        <p>
          Discover NoirAura, your space for elegance, wellness, and confidence.
          Our curated salons are ready to bring your natural glow to life.
        </p>
        <Link to="/auth" className="cta-btn">Get Started</Link>
      </div>

      <div className="home-image">
        <img src={heroImg} alt="NoirAura beauty showcase" />
      </div>
    </section>
  );
}