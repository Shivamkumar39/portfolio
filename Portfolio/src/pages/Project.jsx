// src/components/Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeImage0 from '../assets/Image/HomeImage.png';
import 'animate.css';

const Project = () => {
  const projects = new Map();
  for (let i = 0; i < 10; i++) {
    projects.set(i, {
      title: `Project ${i + 1}`,
      category: 'Web Application',
      image: homeImage0,
    });
  }

  const visibleProjects = Array.from(projects.values()).slice(0, 6);

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
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white hover:bg-blue-gray-400 p-6 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 animate__animated"
          >
            <img
              src={project.image}
              alt="Project"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-900 mb-4">{project.category}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              View Project
            </button>
          </div>
        ))}
      </div>
      {projects.size > 6 && (
        <div className="text-center mt-6 animate__animated animate__fadeInUp">
          <Link to="/more-projects">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
              See More Projects
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Project;
