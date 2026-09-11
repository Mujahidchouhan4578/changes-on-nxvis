import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import deliveryDroneImg from "../assests/delivery_drone.png";
import roverImg from "../assests/rover_custom.png";
import jetsonImg from "../assests/jetson_custom.png";
import piImg from "../assests/pi_custom.png";
import droneVideo from "../assests/drone_video.mp4";
import roverVideo from "../assests/rover_video.mp4";
import { assets } from "../assests/assests";

import "./ProductsPage.css";

function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* Prevent body scroll when modal is open */
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  /* =========================================================
     PRODUCT DATA
     Core product data kept unchanged
     ========================================================= */

  const products = [
    {
      id: "uav-delivery",
      title: "Unmanned Aerial Vehicle (UAV) for logistic dilivery",
      subtitle: "Medical & Goods Delivery Drone",
      image:
        "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=800&auto=format&fit=crop",
      video: droneVideo,
      color: "#10b981",
      shortDesc:
        "Engineered for high-speed, autonomous aerial delivery of critical medical supplies and emergency goods across difficult terrains.",
      specs: [
        { label: "Max Payload Capacity", value: "5.5 kg - 10 kg" },
        { label: "Operational Range", value: "25 km (Round Trip)" },
        {
          label: "Navigation System",
          value: "RTK GPS + LiDAR Obstacle Avoidance",
        },
        { label: "Cruising Speed", value: "65 km/h (Wind Resistant)" },
      ],
      detailedDesc:
        "Our Autonomous Delivery Drone is a heavy-duty, weather-resistant aerial vehicle designed specifically for rapid logistics. It integrates dual-redundant GPS, automated winch-drop mechanisms, and real-time cloud tracking to ensure safe, zero-human-intervention delivery to remote hospitals, farms, and industrial sites.",
    },

    {
      id: "ag-rover",
      title: "unmanned ground vehicle (UGV) for automate agriculture process",
      subtitle: "Autonomous Farming & Soil Testing Rover",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      video: roverVideo,
      color: "#ef4444",
      shortDesc:
        "All-terrain unmanned ground rover equipped with automated soil sampling probes, precision weed eradication, and LiDAR mapping.",
      specs: [
        {
          label: "Soil Sensors",
          value: "NPK, Moisture, pH & Temp Probes",
        },
        {
          label: "Terrain Mobility",
          value: "4x4 / 6x6 Rock-Crawler Suspension",
        },
        {
          label: "AI Vision Core",
          value: "Onboard Deep Learning Weed Detection",
        },
        {
          label: "Battery Endurance",
          value: "8 Hours Continuous Field Run",
        },
      ],
      detailedDesc:
        "Designed for modern precision farming, the Agri-Smart Rover autonomously navigates crop rows using LiDAR and RTK guidance. It performs non-destructive soil testing, maps nutrient deficiencies in real-time, and applies micro-doses of organic treatments directly to target roots, reducing fertilizer waste by up to 60%.",
    },

    {
      id: "snt-printer",
      title: "Smart NXV Printer",
      subtitle: "Scan, Cloud Upload & Instant Document Print",
      image:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop",
      color: "#3b82f6",
      shortDesc:
        "Automated document printing kiosk that features built-in optical scanning, direct cloud syncing, and high-speed precision printing.",
      specs: [
        {
          label: "Optical Scanner",
          value: "High-Res Document & ID Scanner",
        },
        {
          label: "Cloud Engine",
          value: "Direct Cloud Sync & Print Queue",
        },
        {
          label: "Print Speed",
          value: "Ultra-Fast Laser Printing",
        },
        {
          label: "Connectivity",
          value: "Wi-Fi, Ethernet & App Sync",
        },
      ],
      detailedDesc:
        "The SNT Smart Kiosk Printer revolutionizes document workflows. Simply upload your documents to the cloud or place them on the scanner bed, and our proprietary cloud engine automatically formats, queues, and prints them with high precision. Ideal for remote campuses and automated office environments.",
    },

    {
      id: "motor-driver",
      title: "Custom Motor Driver PCB",
      subtitle: "In-House Designed Dual-H-Bridge Motor Driver",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      color: "#f59e0b",
      shortDesc:
        "Custom-engineered high-efficiency motor control architecture designed for heavy rovers, industrial actuators, and brushless motors.",
      specs: [
        {
          label: "Current Rating",
          value: "40A Continuous / 80A Peak",
        },
        {
          label: "Voltage Range",
          value: "12V - 48V DC Input",
        },
        {
          label: "Thermal Control",
          value: "Active MOSFET Cooling & Temp Cutoff",
        },
        {
          label: "Control Interface",
          value: "CAN Bus, PWM, UART & RS485",
        },
      ],
      detailedDesc:
        "Built from scratch by NXV INTELLIGENT SYSTEMS engineers, this proprietary motor driver PCB delivers industrial-grade power management. Featuring ultra-low RDS(on) MOSFETs, hardware over-current protection, and seamless ROS/ROS2 telemetry integration, it serves as the muscular backbone for our robotics lineup.",
    },

    {
      id: "ai-attendance",
      title: "Smart AI Attendance System",
      subtitle: "Biometric Vision & Contactless Attendance Portal",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      color: "#a855f7",
      shortDesc:
        "High-speed facial recognition and dual-frequency RFID attendance terminal engineered for schools, industrial factories, and corporate campuses.",
      specs: [
        {
          label: "Recognition Speed",
          value: "< 0.2 Seconds per Person",
        },
        {
          label: "Anti-Spoofing",
          value: "3D Infrared Liveness Detection",
        },
        {
          label: "Cloud Sync",
          value: "Real-time HRMS & Payroll Push",
        },
        {
          label: "Capacity",
          value: "50,000 Offline Face Templates",
        },
        
        
      ],
      detailedDesc:
        "Our standalone Smart Attendance Terminal combines edge AI computer vision with industrial robustness. It operates flawlessly in low light, detects masked individuals with 99.7% accuracy, and synchronizes attendance records directly to decentralized cloud servers without requiring continuous internet connectivity.",
    },
    {
      id: "PCB_and circuit",
      title: "PCB Design and Circuit Design",
      subtitle: "",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      color: "#a855f7",
      shortDesc:
        "We provide professional PCB design and hardware circuit engineering for a wide range of industries. Turn your product vision into flawless, production-grade hardware with our fast turnaround and precision layout services.",
      specs: [
        {
          label: "Recognition Speed",
          value: "< 0.2 Seconds per Person",
        },
        {
          label: "Anti-Spoofing",
          value: "3D Infrared Liveness Detection",
        },
        {
          label: "Cloud Sync",
          value: "Real-time HRMS & Payroll Push",
        },
        {
          label: "Capacity",
          value: "50,000 Offline Face Templates",
        },
      ],
      detailedDesc:
        "Our standalone Smart Attendance Terminal combines edge AI computer vision with industrial robustness. It operates flawlessly in low light, detects masked individuals with 99.7% accuracy, and synchronizes attendance records directly to decentralized cloud servers without requiring continuous internet connectivity.",
    },

  ];

  return (
    <div className="product-showcase">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="product-hero">

        <div className="product-hero-grid"></div>

        <div className="product-hero-glow product-glow-one"></div>
        <div className="product-hero-glow product-glow-two"></div>

        <motion.div
          className="product-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="product-badge">
            <span className="product-badge-dot"></span>
            Our Technology
          </div>

          <h1>
            Engineered
            <span> For The Future</span>
          </h1>

          <p>
            Explore our proprietary hardware and intelligent systems built
            to solve real-world challenges through robotics, automation,
            embedded technology and artificial intelligence.
          </p>

          <div className="product-hero-line"></div>
        </motion.div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="products-intro">

        <motion.div
          className="products-intro-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="product-section-label">
            PROPRIETARY TECHNOLOGY
          </span>

          <h2>
            Products Built
            <br />
            <span>With Purpose.</span>
          </h2>

          <p>
            From autonomous drones and agricultural robotics to embedded
            electronics and AI-powered systems, our products combine
            engineering precision with intelligent automation.
          </p>
        </motion.div>


        <div className="product-stats">

          <div className="product-stat">
            <strong>05</strong>
            <span>Core Products</span>
          </div>

          <div className="product-stat">
            <strong>AI</strong>
            <span>Intelligent Systems</span>
          </div>

          <div className="product-stat">
            <strong>24/7</strong>
            <span>Designed For Real Use</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="products-section">

        <div className="products-section-heading">

          <div>
            <span className="product-section-label">
              PRODUCT ECOSYSTEM
            </span>

            <h2>
              Explore Our <span>Products</span>
            </h2>
          </div>

          <p>
            Select a product to explore its technology, specifications,
            capabilities and interactive preview.
          </p>

        </div>


        <div className="products-grid">

          {products.map((item, index) => (

            <motion.div
              key={item.id}
              className="product-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProduct(item)}
            >

              {/* Number */}

              <div className="product-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Image */}

              <div className="product-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />

                <div className="product-image-overlay"></div>

                <div
                  className="product-image-glow"
                  style={{
                    backgroundColor: item.color,
                  }}
                ></div>

                <div className="product-view">
                  <span>Explore</span>
                  <span>↗</span>
                </div>

              </div>


              {/* Content */}

              <div className="product-card-content">

                <span
                  className="product-subtitle"
                  style={{ color: item.color }}
                >
                  {item.subtitle}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.shortDesc}
                </p>

              </div>


              {/* Footer */}

              <div className="product-card-footer">

                <span>
                  VIEW PRODUCT
                </span>

                <div className="product-arrow">
                  →
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="product-cta">

        <div className="product-cta-pattern"></div>

        <div className="product-cta-content">

          <span className="product-section-label">
            HAVE A REQUIREMENT?
          </span>

          <h2>
            Let's Build The
            <span>Right Solution.</span>
          </h2>

          <p>
            Looking for a customized robotics, AI or embedded technology
            solution? Let's discuss your requirements.
          </p>

          <a
            href="#contact"
            className="product-cta-button"
          >
            Discuss Your Requirement
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =====================================================
          FULL SCREEN PRODUCT MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedProduct && (

          <motion.div
            className="product-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Modal Navigation */}

            <div className="product-modal-nav">

              <button
                className="modal-back"
                onClick={() => setSelectedProduct(null)}
              >
                ←
              </button>

              <div className="modal-product-title">
                {selectedProduct.title}
              </div>

              <button
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>

            </div>


            {/* =================================================
                MEDIA
            ================================================= */}

            <div className="product-modal-media">

              <div className="product-media-container">

                {selectedProduct.video ? (

                  <video
                    src={selectedProduct.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="product-modal-video"
                  />

                ) : (

                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="product-modal-video"
                  />

                )}

              </div>

            </div>


            {/* =================================================
                DETAILS
            ================================================= */}

            <div className="product-modal-details">

              <div className="product-detail-header">

                <span
                  className="product-detail-subtitle"
                  style={{
                    color: selectedProduct.color,
                  }}
                >
                  {selectedProduct.subtitle}
                </span>

                <h1>
                  {selectedProduct.title}
                </h1>

                <p>
                  {selectedProduct.detailedDesc}
                </p>

              </div>


              {/* Specifications */}

              <div className="technical-section">

                <div className="technical-heading">

                  <span
                    style={{
                      backgroundColor: selectedProduct.color,
                    }}
                  ></span>

                  <h2>
                    Technical Specifications
                  </h2>

                </div>


                <div className="spec-grid">

                  {selectedProduct.specs.map((spec, index) => (

                    <div
                      className="spec-card"
                      key={index}
                    >

                      <span>
                        {spec.label}
                      </span>

                      <strong>
                        {spec.value}
                      </strong>

                    </div>

                  ))}

                </div>

              </div>


              {/* Actions */}

              <div className="product-modal-actions">

                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="technical-button"
                  style={{
                    backgroundColor: selectedProduct.color,
                  }}
                >
                  Request Technical Quotation
                  <span>→</span>
                </a>

                <button
                  className="modal-bottom-back"
                  onClick={() => setSelectedProduct(null)}
                >
                  ←
                </button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default ProductShowcase;