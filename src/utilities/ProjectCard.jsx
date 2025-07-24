import React from "react";
import { Github } from "lucide-react";

const ProjectCard = ({ imageUrl, title, githubUrl, demoUrl }) => {
    return (
        <div className="border border-black rounded-3xl p-6 text-center bg-white shadow-sm transition-all hover:shadow-lg">
            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`Snapshot of ${title}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            <div className="flex justify-center gap-4 mt-4">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white border border-gray-400 text-gray-800 font-semibold py-2 px-5 rounded-full transition-all hover:bg-black hover:text-white"
                >
                    <Github size={20} />
                    GitHub
                </a>
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white font-semibold py-2 px-5 rounded-full transition-all hover:bg-gray-900 "
                >
                    Live Demo
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
