import React from "react";
import avatar from "../img/avatar.webp";

const Intro = () => {
    return (
        <div className="flex flex-row justify-center items-center flex-grow">
            <div className="w-1/2">
                <img
                    className="h-[36.9rem]"
                    src={avatar}
                    alt="Avatar of Tony Mogoa"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5">
                <div className="text-white text-3xl">I am</div>
                <div className="font-bold text-6xl text-blue-500 font-heading bg-white p-6 rounded">
                    Tony Mogoa
                </div>
                <span className="text-xs text-white font-bold uppercase">
                    Programmer
                </span>
            </div>
        </div>
    );
};

export default Intro;
