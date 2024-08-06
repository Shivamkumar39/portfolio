// src/components/MoreProjects.js
import React from 'react';
import homeImage0 from '../assets/Image/HomeImage.png';

const MoreProjects = () => {
  const projects = Array.from({ length: 10 }).map((_, index) => ({
    title: `Project ${index + 1}`,
    category: 'Web Application',
    image: homeImage0,
  }));

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">More Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
        {projects.slice(6).map((project, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <img src={project.image} alt="Project" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.category}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
