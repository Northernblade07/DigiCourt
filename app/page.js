"use client"
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import Navbar from ".././components-landing/Navbar";
import HeroSection from ".././components-landing/HeroSection";
import PublicAccessSection from ".././components-landing/PublicAccessSection";
import FeaturesSection from ".././components-landing/FeaturesSection";
import AIIntegrationSection from ".././components-landing/AIIntegrationSection";
import LoginModal from ".././components-landing/LoginModal";
import NotificationToast from ".././components-landing/NotificationToast";
import StatsChart from ".././components-landing/StatsChart";
import TestimonialsSection from ".././components-landing/TestimonialsSection";
import Footer from ".././components-landing/Footer";
import RegistrationPage from ".././components-landing/RegistrationPage";
import { useSelector, useDispatch } from 'react-redux';


import { Provider } from 'react-redux';
import store from './store';
const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

const HomePage = () => {
    const { showLoginModal, loginType } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [activeSection, setActiveSection] = useState("home");
    // const [showLoginModal, setShowLoginModal] = useState(false);
    // const [loginType, setLoginType] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const validateLogin = () => {
        if (!loginForm.email || !loginForm.password) {
            showToast("Please fill in all fields");
            return false;
        }
        if (!loginForm.email.includes("@")) {
            showToast("Please enter a valid email");
            return false;
        }
        return true;
    };

    const handleLogin = (type) => {
        dispatch({ type: 'SET_LOGIN_TYPE', payload: type });
        dispatch({ type: 'SHOW_LOGIN_MODAL' }); 
        // setLoginType(type);
        // setShowLoginModal(true);
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (!validateLogin()) return;

        const simulateLogin = () => {
            showToast("Logging in...");
            setTimeout(() => {
                if (loginType === "Clerk") {
                    showToast("Welcome, Court Clerk");
                    window.location.href = "/clerk";
                } else if (loginType === "Judge") {
                    showToast("Welcome, Your Honor");
                    window.location.href = "/judge";
                } else {
                    showToast("Welcome to Public Portal");
                    window.location.href = "/public";
                }
            }, 1500);
        };
        simulateLogin();
    };

    const navigate = useNavigate();

    const scrollToSection = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const showToast = (message) => {
        setNotificationMessage(message);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    const handleGetStarted = () => {
        showToast("Redirecting to registration...");
        setTimeout(() => {
            setShowNotification(false);
            navigate("/register"); // Use navigate instead of window.location.href
        }, 1000);
    };

    const handleLearnMore = () => {
        scrollToSection("features");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                handleLogin={handleLogin} //iss line ki ma ki chut 30 min lag gaye 
                scrollToSection={scrollToSection}
            />
            <HeroSection
                handleGetStarted={handleGetStarted}
                handleLearnMore={handleLearnMore}
            />
            <PublicAccessSection />
            <FeaturesSection />
            <AIIntegrationSection />
            <LoginModal
                setShowLoginModal={() => dispatch({ type: 'HIDE_LOGIN_MODAL' })}

                showLoginModal={showLoginModal}
                // setShowLoginModal={setShowLoginModal}
                loginType={loginType}
                loginForm={loginForm}
                setLoginForm={setLoginForm}
                handleSubmitLogin={handleSubmitLogin}

            />

            <NotificationToast
                showNotification={showNotification}
                notificationMessage={notificationMessage}
            />
            <StatsChart />
            <TestimonialsSection />
            <Footer />
        </div>
    );
};

export default App;
