export default function About() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>About NoirAura</h1>
      <p style={{ maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
        NoirAura is a modern beauty and wellness platform that connects users with
        curated salons and services. This capstone showcases a full-stack app using
        React, Node/Express, and MongoDB: secure authentication, protected routes,
        and a clean REST API for salon data.
      </p>
      <p style={{ color: "#666" }}>
        Roadmap: appointment booking, service selection, user profiles, and richer UI.
      </p>
    </section>
  );
}