import React from "react";

import { GiComputing, GiBrain } from "react-icons/gi";
import {
    SiTailwindcss,
    SiJava,
    SiReact,
    SiLatex,
    SiOpengl,
    SiMicrosoftazure,
    SiFigma,
    SiPhp,
    SiFirebase,
    SiLinux,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandKotlin } from "react-icons/tb";
import { MdAndroid } from "react-icons/md";
import { IoLogoLaravel, IoLogoElectron } from "react-icons/io5";
import { FcDataEncryption } from "react-icons/fc";
import { CgCPlusPlus } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
    return (
        <div className="flex-grow flex flex-col p-6 gap-6">
            <div className="max-w-fit font-bold text-3xl text-cyan-500 font-heading bg-white py-2 px-4 rounded-sm text-center">
                Skills
            </div>
            <div className="grid grid-cols-7 mx-auto gap-10">
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <GiComputing size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">DSA</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiTailwindcss size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Tailwind css
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiJava size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Java
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <CgCPlusPlus size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">C++</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <TbBrandKotlin size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Kotlin
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <GrMysql size={30} />
                    </span>
                    <span className="text-xs font-semibold">MySQL</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiJava size={30} />
                    </span>
                    <span className="text-xs font-semibold">JavaFX</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiReact size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        React
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <TbBrandReactNative size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        React Native
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <IoLogoElectron size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        ElectronJS
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiLatex size={30} />
                    </span>
                    <span className="text-xs font-semibold">LaTeX</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <MdAndroid size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Android
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiPhp size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">PHP</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <IoLogoLaravel size={30} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Laravel
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiOpengl size={35} />
                    </span>
                    <span className=" text-xs font-semibold">OpenGL</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <FcDataEncryption size={30} />
                    </span>
                    <span className=" text-xs font-semibold">Cryptography</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiMicrosoftazure size={30} />
                    </span>
                    <span className=" text-xs font-semibold">Azure</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiFigma size={30} />
                    </span>
                    <span className=" text-xs font-semibold">Figma</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiFirebase size={30} />
                    </span>
                    <span className=" text-xs font-semibold">Firebase</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiLinux size={30} />
                    </span>
                    <span className=" text-xs font-semibold">Linux</span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-36 h-24 text-blue-700">
                    <span>
                        <SiLinux size={30} />
                    </span>
                    <span className=" text-xs font-semibold">
                        Machine Learning
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
