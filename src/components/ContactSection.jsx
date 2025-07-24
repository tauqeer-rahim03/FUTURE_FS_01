import React from "react";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const contactDetails = [
    {
        icon: <Mail size={28} className="text-gray-800" />,
        info: "Mail Me",
        href: "mailto:tauqeer.rahim03@gmail.com",
    },
    {
        icon: <Linkedin size={28} className="text-gray-800" />,
        info: "LinkedIn",
        href: "https://www.linkedin.com/in/tauqeer-rahim",
    },
    {
        icon: <Instagram size={28} className="text-black" />,
        info: "Instagram",
        href: "https://www.instagram.com/tauqeer.rahim03",
    },
    {
        icon: <Twitter size={28} className="text-gray-800" />,
        info: "X",
        href: "https://x.com/tauqeer_rahim03",
    },
];

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-gray-500">Get in Touch</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-12">
                    Contact Me
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-2xl mx-auto">
                    {contactDetails.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 border border-black rounded-full py-3 px-6 w-full justify-center transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                        >
                            {contact.icon}
                            <p className="font-semibold text-lg text-black">
                                {contact.info}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
