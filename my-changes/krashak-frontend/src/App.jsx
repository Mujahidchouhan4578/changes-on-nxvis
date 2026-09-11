import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import TeamPage from "./Pages/TeamPage";
import LoginPage from "./Pages/LoginPage";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import UserAccount from "./UserAccount/UserAccount";
import ResetPassword from "./Pages/ResetPassword";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import Support from "./UserAccount/Support";
import RequestDemoPage from "./Pages/RequestDemoPage";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./Component/PageTransition";
import { ReactLenis } from 'lenis/react';
import Collab from "../src/Pages/Collaboration"
import Customer_service from "../src/Pages/CustomerService"
import Booking from "../src/Pages/BookingPage"
import Products from "../src/Pages/ProductsPage"
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [islogin, SetIsLogin] = useState(false);
  const [userSidebar, setUserSidebar] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className="app">
        <Navbar islogin={islogin} setUserSidebar={setUserSidebar} />

        <Routes>
            <Route
              path="/"
              element={
                  <HomePage
                    islogin={islogin}
                    setUserSidebar={setUserSidebar}
                  />
              }
            />
           <Route path="/Products" element={<Products />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/customer-service" element={<Customer_service />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/services" element={<ServicesPage islogin={islogin} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<Support />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route
              path="/login"
              element={
                  <LoginPage
                    islogin={islogin}
                    SetIsLogin={SetIsLogin}
                    name={name}
                    email={email}
                    setEmail={setEmail}
                    setName={setName}
                  />
              }
            />
          </Routes>

        {/* User Account component */}
        <UserAccount
          name={name}
          email={email}
          userSidebar={userSidebar}
          setUserSidebar={setUserSidebar}
          SetIsLogin={SetIsLogin}
        />

        <ToastContainer />
      </div>
    </ReactLenis>
  );
}

export default App;
