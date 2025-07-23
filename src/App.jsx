import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

const App = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
        </>
    );
};

export default App;
