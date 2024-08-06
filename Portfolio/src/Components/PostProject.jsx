// src/components/PostProject.js
import React, { useState } from 'react';
import axios from 'axios';

const PostProject = ({ isLoggedIn }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gitRepoLink, setGitRepoLink] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('gitRepoLink', gitRepoLink);
      formData.append('projectLink', projectLink);
      formData.append('technologies', technologies);
      formData.append('image', image);

      await axios.post('http://localhost:3000/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Project posted successfully!');
    } catch (error) {
      alert('Error posting project: ' + error.message);
    }
  };

  if (!isLoggedIn) return null; // Only show if logged in

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post New Project</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Git Repository Link"
          value={gitRepoLink}
          onChange={(e) => setGitRepoLink(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Project Link"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Technologies"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="block mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post Project</button>
      </form>
    </div>
  );
};

export default PostProject;
