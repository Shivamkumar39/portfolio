import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import PostProject from '../Components/PostProject'; // Import the PostProject component
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [showPostProject, setShowPostProject] = useState(false); // State to manage PostProject visibility
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const staticUsername = 'admin';
    const staticPassword = 'admin123';

    if (username === staticUsername && password === staticPassword) {
      setIsLoggedIn(true);
      setIsLoginFormOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="flex flex-wrap justify-between items-center py-4 px-6 bg-white shadow-md max-w-full">
        <div className="flex items-center mb-4 sm:mb-0">
        
         <div className="bg-blue-700 text-white rounded-full p-2 w-10 h-10 text-center">
            <span className="text-lg font-bold">S</span>
          </div>
          <Link to='/'>
          <span className="ml-2 font-semibold text-xl">Shivam</span>
         </Link>
        </div>

        <div className="hidden sm:flex flex-wrap space-x-4 sm:space-x-6 overflow-x-auto">
          <Link to='/MoreProjects' className="text-gray-700">Projects</Link>
          <a href="#about" className="text-gray-700">About Me</a>
          <a href="#contact" className="text-gray-700">Contact</a>
          {isLoggedIn && <Button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</Button>}
        </div>
        
        <div className="hidden sm:flex items-center space-x-4">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Hire Me</Button>
          {!isLoggedIn && (
          <Button
            onClick={() => setIsLoginFormOpen(true)}
            className="hidden sm:block bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Button>
        )}
          <FaMoon className="text-gray-700 text-2xl" />
          {isLoggedIn && (
            <Button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowPostProject(!showPostProject)}
            >
              {showPostProject ? 'Close Add Projects' : 'Add Projects'}
            </Button>
          )}
          {isLoggedIn && <Button className="bg-green-500 text-white px-4 py-2 rounded-lg">Add Skills</Button>}
        </div>

        <div className="sm:hidden flex items-center">
          <Button onClick={toggleMenu} className="text-gray-700 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>

        {isOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10 flex flex-col items-center space-y-4 py-4">
            <a href="#projects" className="text-gray-700" onClick={toggleMenu}>Projects</a>
            <a href="#about" className="text-gray-700" onClick={toggleMenu}>About Me</a>
            <a href="#contact" className="text-gray-700" onClick={toggleMenu}>Contact</a>
            {isLoggedIn && (
              <Button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  setShowPostProject(!showPostProject);
                  toggleMenu();
                }}
              >
                {showPostProject ? 'Close Add Projects' : 'Admin Button'}
              </Button>
            )}
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={toggleMenu}>Hire Me</Button>
            <FaMoon className="text-gray-700 text-2xl" />
            {isLoggedIn && <Button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</Button>}
          </div>
        )}

        {!isLoggedIn && (
          <Button
            onClick={() => setIsLoginFormOpen(true)}
            className="sm:hidden bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Button>
        )}
       

        {isLoginFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
              <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 rounded-lg"
                />
                <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</Button>
              </form>
            </div>
          </div>
        )}
      </nav>

      {showPostProject && <PostProject isLoggedIn={isLoggedIn} />} {/* Conditionally render PostProject */}
    </>
  );
};

export default Navbar;
