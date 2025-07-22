import { Github, Linkedin } from "lucide-react";
import React from "react";

const HeroSection = () => {
    return (
        <div
            id="hero-section"
            className="mx-auto h-screen"
            style={{ height: "80vh" }}
        >
            <div className="flex flex-col justify-center items-center gap-20 h-full lg:flex-row">
                <div>
                    <img
                        className="rounded-full w-80 lg:w-100"
                        src="/profile-image.jpg"
                        alt="Profile"
                    />
                </div>
                <div className="align-middle text-center w-fit">
                    <p className="font-semibold text-gray-500 text-2xl">
                        Hello I'm
                    </p>
                    <h1 className="text-6xl font-semibold mb-6">
                        Tauqeer Rahim
                    </h1>
                    <h2 className="text-4xl text-gray-500 font-semibold text-nowrap mb-4">
                        Front End Developer
                    </h2>
                    <div className="flex flex-row justify-center items-center gap-4 ">
                        <button className="border-1 rounded-full px-6 py-2 mt-4 text-lg font-semibold hover:bg-black hover:text-white transition duration-200 cursor-pointer">
                            Download CV
                        </button>
                        <button className="border-1 rounded-full px-6 py-2 mt-4 text-lg text-white font-semibold bg-black cursor-pointer">
                            Contact Info
                        </button>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4 mt-4 text-2xl">
                        <a
                            href="https://www.linkedin.com/in/tauqeer-rahim"
                            target="_blank"
                            className=" bg-black text-white rounded-full p-2"
                        >
                            <Linkedin />
                        </a>
                        <a
                            href="https://github.com/tauqeer-rahim03"
                            target="_blank"
                            className=" bg-black text-white rounded-full p-2"
                        >
                            <Github />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
