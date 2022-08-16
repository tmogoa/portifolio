import React from "react";

import { TbExternalLink } from "react-icons/tb";

const Projects = () => {
    return (
        <div className="flex-grow flex flex-col p-6 gap-6">
            <div className="max-w-fit font-bold text-3xl text-cyan-500 font-heading bg-white py-2 px-4 rounded-sm text-center">
                Projects
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-gray-800 pb-4 lg:pb-0">
                <a
                    href="https://github.com/Jahaslito/adc-frontend"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            Jenner
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            A hospital system consiting of a React frontend and
                            an API-based Laravel backend as a project for
                            Microsoft ADC University Mentorship Program Cohort 2
                            2021
                        </span>
                    </div>
                </a>

                <a
                    href="https://github.com/Leto-Carpooling"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            Leto
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            A e-hailing carpooling cross-platform mobile
                            application, to allow riders plying a similar route
                            to share the same ride. React Native frontend and
                            PHP backend.
                        </span>
                    </div>
                </a>

                <a
                    href="https://sbc.or.ke/"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            SBC
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            A hosted, informational React-Laravel CRUD website
                            for an organization (pro bono).
                        </span>
                    </div>
                </a>

                <a
                    href="https://play.google.com/store/apps/details?id=com.vitalware.succ"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            SUCC
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            Published (Play Store) Android mobile app for CRUD
                            management of hymn texts, voice audios and music
                            scores(min API level 19).
                        </span>
                    </div>
                </a>

                <a
                    href="https://github.com/Jahaslito/cogniverse"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            Cogniverse
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            Developed 3d racing game based on OpenGL allowing
                            for simple 3D navigation using a car model.
                        </span>
                    </div>
                </a>

                <a
                    href="https://github.com/tmogoa/vlcng"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            VLCng
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            VLC Next Generation, a video and player built using
                            ElectronJS.
                        </span>
                    </div>
                </a>

                <a
                    href="https://github.com/tmogoa/vlcng"
                    target="blank_"
                    className="bg-white p-5 rounded w-full ring-4 ring-transparent hover:ring-gray-300"
                >
                    <div className="flex flex-row justify-between gap-2">
                        <span className="font-heading font-semibold text-lg">
                            August Examen
                        </span>
                        <span className="text-cyan-500">
                            <TbExternalLink size={17} />
                        </span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-800">
                            An exam proctoring desktop app (JavaFX), a helper
                            mobile app (ExamCam) with a Bluetooth module, image
                            cropper and to-PDF exporter.
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Projects;
