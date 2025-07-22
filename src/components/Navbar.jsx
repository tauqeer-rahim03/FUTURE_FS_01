import React from "react";

const Navbar = () => {
    return (
        <div className="py-16 flex justify-evenly items-center">
            <div className="text-4xl font-semibold text-nowrap">
                Tauqeer Rahim
            </div>
            <div className="flex items-center content-stretch gap-4 text-3xl">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#project">Project</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
