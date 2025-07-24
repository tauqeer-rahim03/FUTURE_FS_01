import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-4">
                    <a href="#about" className="hover:text-gray-300">
                        About
                    </a>
                    <a href="#experience" className="hover:text-gray-300">
                        Experience
                    </a>
                    <a href="#project" className="hover:text-gray-300">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-gray-300">
                        Contact
                    </a>
                </nav>
                <p className="text-gray-400">
                    Copyright &copy; {currentYear} Tauqeer Rahim. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
