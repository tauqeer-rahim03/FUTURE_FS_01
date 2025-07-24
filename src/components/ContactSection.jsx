// src/components/ContactSection.jsx
import React from "react";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import ContactForm from "../utilities/ContactForm"; // Import the new form component

const contactDetails = [
    {
        icon: <Mail size={28} />,
        info: "Mail Me",
        href: "mailto:tauqeer.rahim03@gmail.com",
    },
    {
        icon: <Linkedin size={28} />,
        info: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/tauqeer-rahim",
    },
    {
        icon: <Instagram size={28} />,
        info: "Instagram Profile",
        href: "https://www.instagram.com/tauqeer.rahim03",
    },
    {
        icon: <Twitter size={28} />,
        info: "X (Twitter) Profile",
        href: "https://x.com/TauqeerRahim",
    },
];

const ContactSection = () => {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="font-semibold text-gray-500">Get in Touch</p>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        Contact Me
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="flex flex-col justify-center gap-6">
                        {contactDetails.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 transition-all hover:bg-gray-200 hover:shadow-md"
                            >
                                <div className="bg-gray-200 p-3 rounded-full">
                                    {contact.icon}
                                </div>
                                <p className="font-semibold text-lg text-black">
                                    {contact.info}
                                </p>
                            </a>
                        ))}
                    </div>
                    <div className="border border-gray-300 rounded-2xl p-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
