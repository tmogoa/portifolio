import React from "react";

import { HiOutlineMail } from "react-icons/hi";

const End = () => {
    return (
        <div className="flex-grow flex flex-col justify-center items-center gap-y-5">
            <div className="font-bold text-6xl text-blue-500 font-heading bg-white p-6 rounded w-1/3 text-center">
                Contact me
            </div>
            <div className="text-gray-800 text-sm font-semibold bg-white p-6 rounded w-1/3 flex flex-row items-center gap-x-2">
                <span>
                    <HiOutlineMail size={30} className="text-blue-800" />
                </span>
                <span>mogoa.tonny@gmail.com</span>
            </div>
        </div>
    );
};

export default End;
