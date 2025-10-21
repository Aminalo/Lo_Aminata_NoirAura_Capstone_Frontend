import "./about.css";
import aboutImg from "../../assets/about.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-text">
          <h1>More Than Just Beauty</h1>
          <p>
            At NoirAura, we believe that beauty is an expression of identity,
            confidence, and soul. Our services are designed to enhance your
            natural glow and celebrate your individuality.
          </p>
          <button
            className="discover-btn"
            onClick={() => navigate("/auth")}
          >
            Discover NoirAura
          </button>
        </div>
        <div className="about-hero-image">
          <img src={aboutImg} alt="NoirAura Studio" />
        </div>
      </div>

      {}
      <div className="about-details">
        <div className="about-photo">
          <img src={aboutImg} alt="NoirAura Beauty" />
        </div>
        <div className="about-info">
          <h2>About NoirAura</h2>
          <p>
            NoirAura was born from a deep desire to redefine beauty through
            simplicity, authenticity, and grace. Every product and experience is
            crafted to empower women to feel elegant, confident, and radiant —
            inside and out.
          </p>
          <p>
            From luxurious treatments to mindful beauty rituals, we focus on
            creating harmony between your skin, your spirit, and your style.
          </p>
          <div className="signature">
            <p className="signature-name">Aminata Lo</p>
            <p className="signature-title">Founder & Creative Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}