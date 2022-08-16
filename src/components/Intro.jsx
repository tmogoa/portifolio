import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="flex flex-col justify-center items-center flex-grow gap-y-5">
            <div className="text-white text-3xl">I am</div>
            <div className="font-bold text-6xl text-blue-500 font-heading bg-white p-6 rounded">
                Tony Mogoa
            </div>
            <span className="text-xs text-white font-bold uppercase">
                <Link to="/about">About me</Link>
            </span>
        </div>
    );
};

export default Intro;
