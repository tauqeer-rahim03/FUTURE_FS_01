import { Award, GraduationCap } from "lucide-react";
import React from "react";
import InfoCard from "../utilities/InfoCard";

const aboutData = [
    {
        icon: <Award size={32} className="text-gray-700" />,
        title: "Experience",
        details: (
            <>
                Fresher <br />
                Front-End Developer
            </>
        ),
    },
    {
        icon: <GraduationCap size={32} className="text-gray-700" />,
        title: "Education",
        details: (
            <>
                12th at Dayananda Sagar PU College, 2021 - 2023 <br />
                B.C.A. at Dayananda Sagar College, 2023 - Present
            </>
        ),
    },
];

const AboutSection = () => {
    return (
        <section
            id="about"
            className="h-screen flex flex-col justify-center items-center container mx-auto px-4 text-center"
        >
            <p className="font-semibold text-gray-500">Get To Know More</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto mt-12">
                {aboutData.map((item, index) => (
                    <InfoCard key={index} icon={item.icon} title={item.title}>
                        {item.details}
                    </InfoCard>
                ))}
            </div>

            <div className="max-w-4xl w-full mx-auto mt-8 text-center text-black p-6 border border-black rounded-3xl">
                <p>
                    A Front-End Developer who turns complex challenges into
                    beautiful user experiences. My curiosity for technology,
                    backed by a BCA degree, fuels my passion for building
                    responsive apps and my journey toward becoming a Full-Stack
                    Developer.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
