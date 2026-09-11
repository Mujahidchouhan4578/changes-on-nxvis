import React from "react";
import { motion } from "framer-motion";
import "./Collaboration.css";

function Incubations() {
  const partners = [
    {
      name: "iTIC IIT Hyderabad",
      type: "Incubated At",
      logo: "/partners/itic.png",
    },
    {
      name: "SIIC IIT Kanpur",
      type: "Incubated At",
      logo: "/partners/siic.png",
    },
    {
      name: "IIT Ropar",
      type: "Incubated At",
      logo: "/partners/ropar.png",
    },
    {
      name: "ABIF IIT Kharagpur",
      type: "Incubated At",
      logo: "/partners/abif.png",
    },
    {
      name: "Engineering College Bikaner",
      type: "Incubated & Collaborated",
      logo: "/partners/ecb.png",
    },
    {
      name: "SKRAU Bikaner",
      type: "Research Collaboration",
      logo: "/partners/skrau.png",
    },
  ];

  const incubationPartners = partners.filter(
    (partner) => partner.type === "Incubated At"
  );

  const collaborationPartners = partners.filter(
    (partner) =>
      partner.type === "Incubated & Collaborated" ||
      partner.type === "Research Collaboration"
  );

  return (
    <div className="incubations-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="incubations-hero">

        <div className="incubations-grid-bg"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <motion.div
          className="incubations-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="incubations-badge">
            <span className="badge-dot"></span>
            Our Ecosystem
          </div>

          <h1>
            Incubations &
            <span> Research Partnerships</span>
          </h1>

          <p>
            Building meaningful connections with leading academic institutions,
            incubation centres and research organizations to transform ideas
            into impactful solutions.
          </p>

          <div className="hero-line"></div>
        </motion.div>

      </section>


      {/* =====================================================
          INTRO / STATS
      ===================================================== */}

      <section className="incubations-intro">

        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            CONNECT • INNOVATE • GROW
          </span>

          <h2>
            Stronger Together,
            <br />
            <span>Greater Impact</span>
          </h2>

          <p>
            Our collaborations bring together technology, research,
            entrepreneurship and academic expertise. These partnerships help
            us accelerate innovation and create solutions with real-world
            impact.
          </p>
        </motion.div>


        <div className="incubation-stats">

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <strong>06</strong>
            <span>Key Institutions</span>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <strong>04</strong>
            <span>Incubation Partners</span>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <strong>02</strong>
            <span>Research Collaborations</span>
          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INCUBATION PARTNERS
      ===================================================== */}

      <section className="partners-section">

        <div className="partners-heading">

          <div>
            <span className="section-label">
              INCUBATION NETWORK
            </span>

            <h2>
              Incubated <span>At</span>
            </h2>
          </div>

          <p>
            Proud to be part of leading innovation ecosystems supporting
            entrepreneurship, technology and research.
          </p>

        </div>


        <div className="partners-grid">

          {incubationPartners.map((partner, index) => (

            <motion.div
              key={index}
              className="partner-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >

              <div className="partner-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="partner-logo-container">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  className="partner-logo"
                />

                <div className="logo-glow"></div>

              </div>


              <div className="partner-info">

                <span className="partner-type">
                  {partner.type}
                </span>

                <h3>
                  {partner.name}
                </h3>

                <div className="partner-arrow">
                  →
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          RESEARCH COLLABORATIONS
      ===================================================== */}

      <section className="partners-section research-section">

        <div className="partners-heading">

          <div>
            <span className="section-label">
              ACADEMIC & RESEARCH
            </span>

            <h2>
              Research <span>Collaborations</span>
            </h2>
          </div>

          <p>
            Working with academic institutions to bridge research and
            practical innovation.
          </p>

        </div>


        <div className="partners-grid research-grid">

          {collaborationPartners.map((partner, index) => (

            <motion.div
              key={index}
              className="partner-card research-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >

              <div className="partner-number">
                {String(index + 5).padStart(2, "0")}
              </div>

              <div className="partner-logo-container">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  className="partner-logo"
                />

                <div className="logo-glow"></div>

              </div>


              <div className="partner-info">

                <span className="partner-type">
                  {partner.type}
                </span>

                <h3>
                  {partner.name}
                </h3>

                <div className="partner-arrow">
                  →
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="incubations-cta">

        <div className="cta-pattern"></div>

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-label">
            BUILD THE FUTURE
          </span>

          <h2>
            Let's Create Something
            <span> Impactful Together.</span>
          </h2>

          <p>
            We are open to collaborating with institutions, researchers,
            innovators and organizations working towards meaningful change.
          </p>

          <button className="cta-button">
            Explore Collaboration
            <span>→</span>
          </button>

        </motion.div>

      </section>

    </div>
  );
}

export default Incubations;