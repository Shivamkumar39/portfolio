import React, { useState } from 'react';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Static username and password
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
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex items-center">
        <div className="bg-blue-700 text-white rounded-full p-2 w-10 h-10 text-center">
          <span className="text-lg font-bold">S</span>
        </div>
        <span className="ml-2 font-semibold text-xl">Shivam</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#projects" className="text-gray-700">Projects</a>
        <a href="#about" className="text-gray-700">About Me</a>
        <a href="#contact" className="text-gray-700">Contact</a>
        {isLoggedIn && <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</button>}
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Hire Me</button>
        <FaMoon className="text-gray-700 text-2xl" />
        {isLoggedIn && <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Admin Button</button>}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10 flex flex-col items-center space-y-4 py-4">
          <a href="#projects" className="text-gray-700" onClick={toggleMenu}>Projects</a>
          <a href="#about" className="text-gray-700" onClick={toggleMenu}>About Me</a>
          <a href="#contact" className="text-gray-700" onClick={toggleMenu}>Contact</a>
          {isLoggedIn && <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={toggleMenu}>Admin Button</button>}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={toggleMenu}>Hire Me</button>
          <FaMoon className="text-gray-700 text-2xl" />
          {isLoggedIn && <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</button>}
        </div>
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
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
            </form>
          </div>
        </div>
      )}
      {!isLoggedIn && (
        <button
          onClick={() => setIsLoginFormOpen(true)}
          className="md:hidden bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Login
        </button>
      )}
      {!isLoggedIn && (
        <button
          onClick={() => setIsLoginFormOpen(true)}
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
