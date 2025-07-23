import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Project", href: "#project" },
    { title: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-m z-50">
            <div className="container mx-auto flex justify-between items-center h-20 px-4">
                <a href="#" className="text-2xl font-bold text-gray-900">
                    Tauqeer Rahim
                </a>

                <nav className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={toggleMenu}
                                className="text-lg font-medium text-gray-600 hover:text-gray-900"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
