import React from 'react';
//import { Globe, Linkedin } from 'lucide-react';
import { FiGithub, FiGlobe, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white py-6 mb-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold">Home Page</h3>
                    <h3 className="text-lg font-semibold">About Page</h3>
                    <h3 className="text-lg font-semibold">Projects</h3>
                </div>

                <div className="flex flex-col space-y-4">
                    <input className="border border-gray-300 p-2 rounded" placeholder="Your email" />
                    <Button>Submit</Button>
                </div>

            </div>
            <hr className='bg-black w-90 mt-5'/>
            <div className="container mx-auto px-4 mt-6 text-center  ">
            <div className="flex justify-center items-center space-x-4  mb-3 ">
                    <Link href="#" aria-label="Website">
                        <FiGlobe className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="#" aria-label="GitHub">
                        <FiGithub className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                        <FiTwitter className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                        <FiLinkedin className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="#" aria-label="YouTube">
                        <FiYoutube className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </Link>
                </div>
                <p className="text-sm text-gray-500">© 2024 React & Tailwind CSS Portfolio. STOMAN</p>
            </div>
        </footer>
    );
};

export default Footer;
