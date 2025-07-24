import React from "react";
import { Linkedin, Github, Download } from "lucide-react";

const PROFILE_IMAGE_URL = "/profile-image.jpg";
const CV_URL = "/Tauqeer_Rahim_CV.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/tauqeer-rahim";
const GITHUB_URL = "https://github.com/tauqeer-rahim03";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center text-center md:text-left pt-20"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
                <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                    <img
                        src={PROFILE_IMAGE_URL}
                        alt="A picture of Tauqeer Rahim"
                        className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <p className="font-semibold text-gray-500 text-lg">
                        Hello, I'm
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold mt-1 text-black">
                        Tauqeer Rahim
                    </h1>
                    <p className="text-2xl font-medium mt-2 text-gray-700">
                        Front End Developer
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                        <a
                            href={CV_URL}
                            download="Tauqeer_Rahim_CV.pdf"
                            className="flex items-center gap-2 bg-white border border-black text-black font-semibold py-2 px-6 rounded-full transition-all hover:bg-black hover:text-white hover:shadow-md"
                        >
                            <Download size={20} />
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="bg-black text-white font-semibold py-2 px-6 rounded-full transition-all hover:shadow-md "
                        >
                            Contact Info
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="text-gray-600 transition-transform hover:text-gray-900 hover:scale-110"
                        >
                            <Linkedin size={32} />
                        </a>
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="text-gray-600 transition-transform hover:text-gray-900 hover:scale-110"
                        >
                            <Github size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
