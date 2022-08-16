import React, { useState, useEffect } from "react";

import { SiLinkedin, SiGithub } from "react-icons/si";

import { colors } from "../colors";

import Intro from "../components/Intro";
import About from "../components/About";

const Home = () => {
    const [sections] = useState([<Intro />, <About />]);
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        window.addEventListener("keydown", onArrowKeyDown);

        return () => {
            window.removeEventListener("keydown", onArrowKeyDown);
        };

        function onArrowKeyDown(event) {
            if (event.key === "ArrowLeft") {
                if (currentSection > 0) {
                    setCurrentSection(currentSection - 1);
                }
            } else if (event.key === "ArrowRight") {
                if (currentSection < sections.length - 1) {
                    setCurrentSection(currentSection + 1);
                }
            }
        }
    }, [currentSection, sections.length]);

    return (
        <div className="w-full lg:h-screen flex flex-col bg-gradient-to-r from-cyan-400 to-blue-800">
            <div className="w-full p-6 flex flex-row justify-end text-white gap-x-6">
                <div>
                    <a
                        href="https://www.linkedin.com/in/tony-mogoa-88b39b17a/"
                        target="blank_"
                    >
                        <SiLinkedin color={colors.white} size={24} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/tmogoa" target="blank_">
                        <SiGithub color={colors.white} size={24} />
                    </a>
                </div>
            </div>

            <div className="flex-grow max-h-max flex">
                {sections[currentSection]}
            </div>

            <div className="bg-white p-2 w-full text-end text-xs font-semibold">
                Use right → and left ← keys to navigate
            </div>
        </div>
    );
};

export default Home;
