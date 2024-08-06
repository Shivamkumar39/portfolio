// src/components/HomePage.js
import React from 'react';
import homeImage0 from '../assets/Image/HomeImage.png';
import sampleCV from '../assets/Shivam-CV.pdf';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import 'animate.css';

const HomePage = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-20 px-6 bg-gray-50">
      <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          HI, I AM Shivam
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeInLeft animate__delay-1s">
          A Full-Stack Developer & Design Enthusiast
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg animate__animated animate__fadeInUp animate__delay-2s flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300">
          <Link to="https://www.linkedin.com/in/shivam-kumar--/" className="flex items-center space-x-2">
            <span>Download CV</span>
            <FiDownload />
          </Link>
        </button>
      </div>
      <div className="md:w-1/2 animate__animated animate__fadeInRight">
        <img src={homeImage0} alt="Developer at work" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HomePage;
