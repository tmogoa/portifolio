import React, { useState, useEffect } from "react";

import { SiLinkedin, SiGithub } from "react-icons/si";

import { colors } from "../colors";

import Intro from "../components/Intro";
import End from "../components/End";
import Edu from "../components/Edu";
import Interests from "../components/Interest";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
    const [sections] = useState([
        <Intro />,
        <Edu />,
        <Skills />,
        <Projects />,
        <Interests />,
        <End />,
    ]);
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
            <div className="w-full p-6 flex flex-row">
                <div className="text-xs uppercase font-bold text-cyan-500 rounded-sm align-middle py-1 px-2 bg-white">
                    {currentSection + 1} of {sections.length}
                </div>

                <div className="flex-grow flex flex-row justify-end items-center text-white gap-x-6">
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
            </div>

            <div className="flex-grow max-h-max flex">
                {sections[currentSection]}
            </div>

            <div className="flex flex-row justify-between items-center bg-white p-2 w-full text-xs font-semibold">
                <span>Designed and built by me.</span>
                <span>Use right → and left ← keys to navigate</span>
            </div>
        </div>
    );
};

export default Home;
