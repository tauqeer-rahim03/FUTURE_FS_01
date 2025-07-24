import React from "react";
import { BadgeCheck } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "HTML", level: "Experienced" },
            { name: "CSS", level: "Experienced" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "React", level: "Intermediate" },
            { name: "Tailwind CSS", level: "Intermediate" },
        ],
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Python", level: "Basic" },
            { name: "Java", level: "Basic" },
            { name: "MySQL", level: "Basic" },
        ],
    },
    {
        title: "Other Tools & Skills",
        skills: [
            { name: "Node.JS", level: "Basic" },
            { name: "Git & GitHub", level: "Intermediate" },
            { name: "Figma", level: "Basic" },
            { name: "Responsive Design", level: "Intermediate" },
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-gray-500">Explore My</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-12">
                    Experience
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-3xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-gray-800">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-left">
                                {category.skills.map((skill, skillIndex) => (
                                    <article
                                        key={skillIndex}
                                        className="flex items-center gap-4"
                                    >
                                        <BadgeCheck
                                            size={24}
                                            className="text-gray-800 flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="font-bold">
                                                {skill.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                {skill.level}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
