// src/components/Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeImage0 from '../assets/Image/HomeImage.png';
import 'animate.css';
import { Button } from '@material-tailwind/react';

const Project = () => {
  const projects = [
    {
      title: 'Softwere Downloder',
      category: 'Web Application',
      image: homeImage0,
      link: 'https://github.com/Shivamkumar39/Programmer_media', // Unique link for Project 1
    },
    {
      title: 'Event Manager',
      category: 'Web Application',
      image: homeImage0,
      link: 'https://github.com/Shivamkumar39/Event-Mangment-App', // Unique link for Project 2
    },
    {
      title: 'inotbook',
      category: 'Web Application',
      image: homeImage0,
      link: 'https://github.com/Shivamkumar39/inotbook', // Unique link for Project 3
    },
    {
      title: 'Blogging-page',
      category: 'Web Application',
      image: homeImage0,
      link: 'https://github.com/Shivamkumar39/Blog-page', // Unique link for Project 4
    },
    {
      title: 'shivam_CV-(First-CV)',
      category: 'Web Application',
      image: homeImage0,
      link: 'https://github.com/Shivamkumar39/shivam_CV', // Unique link for Project 5
    },
    {
      title: 'Firebse-Authentication',
      category: 'Web Application',
      image: homeImage0,
      link: 'https://github.com/Shivamkumar39/FirebseAuthentication', // Unique link for Project 6
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
        Projects Portfolio
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 animate__animated animate__fadeIn">
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Projects"
            className="p-2 border rounded-lg w-full md:w-auto mb-4 md:mb-0"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-0 md:ml-4 hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
        <select className="p-2 border rounded-lg w-full md:w-auto ml-0 md:ml-4">
          <option>All Projects</option>
          <option>Web Application</option>
          <option>Mobile Application</option>
          <option>UI/UX Design</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white hover:bg-blue-gray-400 p-6 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 animate__animated"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-900 mb-4">{project.category}</p>
            <Link to={project.link}>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                View Project
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
