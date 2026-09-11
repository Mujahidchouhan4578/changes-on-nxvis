import { useState } from "react";
import CustomerForm from "../Component/CustomerForm";
import CustomerList from "../Component/CustomerList";
import "./CustomerService.css";

function CustomerService() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setSelectedCustomer(null);
    setRefresh(!refresh);
  };

  return (
    <div className="customer-service-page">

      {/* ================= HERO ================= */}

      <section className="customer-hero">

        <div className="hero-content">

          <div className="support-badge">
            <span className="badge-dot"></span>
            CUSTOMER SUPPORT
          </div>

          <h1>
            We're here to
            <span> help you.</span>
          </h1>

          <p>
            Having trouble with something? Submit a support request
            and our team will help you get things sorted.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Support available</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>Fast</strong>
              <span>Response time</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>100%</strong>
              <span>Secure information</span>
            </div>
          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-circle circle-one"></div>
          <div className="hero-circle circle-two"></div>
          <div className="hero-icon">
            💬
          </div>
        </div>

      </section>


      <div className="customer-service-container">

        {/* ================= SUPPORT FEATURES ================= */}

        <section className="support-info">

          <div className="info-card">

            <div className="info-icon">
              <span>💬</span>
            </div>

            <div className="info-content">
              <span className="info-number">01</span>
              <h3>Tell us your problem</h3>

              <p>
                Describe what's going wrong and provide
                as much detail as possible.
              </p>
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              <span>⚡</span>
            </div>

            <div className="info-content">
              <span className="info-number">02</span>
              <h3>We'll review it</h3>

              <p>
                Our support team will review your request
                and work on the solution.
              </p>
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              <span>✓</span>
            </div>

            <div className="info-content">
              <span className="info-number">03</span>
              <h3>Get your solution</h3>

              <p>
                Track your request and get the help
                you need from our team.
              </p>
            </div>

          </div>

        </section>


        {/* ================= FORM ================= */}

        <section className="support-form-section">

          <div className="section-heading">

            <div className="section-heading-icon">
              ✦
            </div>

            <div>
              <span className="section-eyebrow">
                SUPPORT REQUEST
              </span>

              <h2>
                {selectedCustomer
                  ? "Update your request"
                  : "How can we help?"}
              </h2>

              <p>
                {selectedCustomer
                  ? "Make changes to your existing support request."
                  : "Fill out the form below and tell us what you're facing."}
              </p>
            </div>

          </div>


          <CustomerForm
            selectedCustomer={selectedCustomer}
            onSuccess={handleSuccess}
          />

        </section>


        {/* ================= CUSTOMER REQUESTS ================= */}

        <section className="customer-list-section">

          <CustomerList
            key={refresh}
            onEdit={setSelectedCustomer}
          />

        </section>

      </div>

    </div>
  );
}

export default CustomerService;