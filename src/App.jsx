import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default App;
