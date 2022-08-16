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
        let xDown = null;
        let yDown = null;
        window.addEventListener("keydown", onArrowKeyDown);
        document.addEventListener("touchstart", handleTouchStart, false);
        document.addEventListener("touchmove", handleTouchMove, false);

        return () => {
            window.removeEventListener("keydown", onArrowKeyDown);
            document.removeEventListener("touchstart", handleTouchStart, false);
            document.removeEventListener("touchmove", handleTouchMove, false);
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

        function getTouches(evt) {
            return (
                evt.touches || // browser API
                evt.originalEvent.touches
            ); // jQuery
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    /* right swipe */
                    if (currentSection < sections.length - 1) {
                        setCurrentSection(currentSection + 1);
                    }
                } else {
                    /* left swipe */
                    if (currentSection > 0) {
                        setCurrentSection(currentSection - 1);
                    }
                }
            } else {
                if (yDiff > 0) {
                    /* down swipe */
                } else {
                    /* up swipe */
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }, [currentSection, sections.length]);

    return (
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-cyan-400 to-blue-800">
            <div className="block lg:hidden text-end  bg-white p-1 w-full text-xs font-semibold">
                swipe right → or left ← to navigate
            </div>
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

            <div className="flex-grow lg:max-h-max flex overflow-y-scroll lg:overflow-auto">
                {sections[currentSection]}
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white p-2 w-full text-xs font-semibold">
                <span>Designed and built by me.</span>
                <span className="hidden lg:block">
                    Use right → and left ← keys to navigate
                </span>
            </div>
        </div>
    );
};

export default Home;
