import React from 'react';
import myimage from '../assets/Image/myimage.jpeg';
import { FiBox, FiGithub, FiGlobe, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Aboutme = () => {
    return (
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ">
            <div
                id="profile"
                className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-50 opacity-75 mx-6 lg:mx-0"
            >
                <div className="p-4 md:p-12 text-center lg:text-left">
                    {/* Image for mobile view */}
                    <div
                        className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${myimage})` }}
                    ></div>

                    <h1 className="text-3xl font-bold pt-8 lg:pt-0">Shivam Kumar</h1>
                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                        <svg
                            className="h-4 fill-current text-green-700 pr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <FiBox />            </svg>
                        Study-Iam Currently persuing BTech CSE(Parul University)
                    </p>
                    <p className="pt-8 text-sm">
                        Totally optional short description about yourself, what you do, and so on.
                    </p>

                    <div className="pt-12 pb-8">
                        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                            Get In Touch
                        </button>
                    </div>

                    <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                        <a className="link" href="#" data-tippy-content="@facebook_handle">

                            <title>Facebook</title>
                            <FiLinkedin />
                        </a>
                        <a className="link" href="#" data-tippy-content="@twitter_handle">

                            <title>Twitter</title>
                            <FiTwitter />
                        </a>
                        <a className="link" href="#" data-tippy-content="@github_handle">

                            <title>GitHub</title>
                            <FiGithub />

                        </a>
                    </div>
                </div>
            </div>

            {/* Image for large screens */}
            <div className=" lg:w-2/5   ">
                <img
                    src={myimage}
                    className=" shadow-2xl hidden lg:block rounded-3xl"
                    alt="Your Name"
                />
            </div>
        </div>
    );
};

export default Aboutme;
