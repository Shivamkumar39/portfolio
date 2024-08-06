// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoreProjects from './Components/MoreProjects';
import Home from './pages/Home';
import PostProject from './Components/PostProject';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
//import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} >
        <Route path='/Projects' element={<Project/>}/>
        </Route>
        <Route path="/MoreProjects" element={<MoreProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
