import React from "react";
import ProjectCard from "../utilities/ProjectCard";

const projectsData = [
    {
        imageUrl: "/YouTube-clone.png",
        title: "YouTube Clone",
        githubUrl: "https://github.com/tauqeer-rahim03/youtube-clone",
        demoUrl: "https://youtube-clone-one-plum.vercel.app/",
    },
    {
        imageUrl: "/SpaceX-clone.png",
        title: "SpaceX Clone",
        githubUrl: "https://github.com/tauqeer-rahim03/SpaceX-clone",
        demoUrl: "https://space-x-clone-ten.vercel.app/",
    },
    {
        imageUrl: "/Netflix-clone.png",
        title: "Netflix Clone",
        githubUrl: "https://github.com/tauqeer-rahim03/Netflix-clone",
        demoUrl: "https://netflix-clone-three-liard-18.vercel.app/",
    },
];

const ProjectsSection = () => {
    return (
        <section
            id="project"
            className="py-24 min-h-screen flex flex-col justify-center items-center"
        >
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-gray-500">Browse My Recent</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-12">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            githubUrl={project.githubUrl}
                            demoUrl={project.demoUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
