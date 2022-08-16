import React from "react";

import { BsMenuAppFill } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";
import { GiBrain, GiMaterialsScience } from "react-icons/gi";
import { SiBlender } from "react-icons/si";

const Interests = () => {
    return (
        <div className="flex-grow flex flex-col p-6 gap-6">
            <div className="max-w-fit font-bold text-3xl text-cyan-500 font-heading bg-white py-2 px-4 rounded-sm text-center">
                Interests
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-20 pb-4 lg:pb-0">
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-48 h-36 text-blue-700">
                    <span>
                        <GiMaterialsScience size={50} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        CS Research
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-48 h-36 text-blue-700">
                    <span>
                        <FaGuitar size={50} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Guitar
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-48 h-36 text-blue-700">
                    <span>
                        <GiBrain size={50} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        Machine Learning
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-48 h-36 text-blue-700">
                    <span>
                        <SiBlender size={50} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        3d Animation
                    </span>
                </div>
                <div className="flex flex-col items-center justify-around bg-white rounded p-4 w-48 h-36 text-blue-700">
                    <span>
                        <BsMenuAppFill size={50} />
                    </span>
                    <span className="uppercase text-xs font-semibold">
                        UI/UX
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Interests;
