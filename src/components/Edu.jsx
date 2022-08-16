import React from "react";

const Edu = () => {
    return (
        <div className="flex flex-col items-start flex-grow p-6 gap-5">
            <div className="flex-grow-0 bg-white p-6 rounded flex flex-col gap-y-3">
                <span className="font-bold text-2xl text-cyan-500 font-heading">
                    Currently pursuing a Bachelor of Science in Informatics and
                    Computer Science
                </span>
                <span className="text-sm font-medium text-gray-800">
                    From Strathmore University
                </span>
            </div>

            <div className="flex-grow-0 bg-white p-6 rounded flex flex-col gap-y-3">
                <span className="font-bold text-2xl text-blue-800 font-heading">
                    Went to Alliance High School
                </span>
                <span className=" text-xs font-bold text-gray-800">
                    and left with an A of 81 points.
                </span>
            </div>
        </div>
    );
};

export default Edu;
