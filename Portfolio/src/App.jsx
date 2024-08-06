// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoreProjects from './Components/MoreProjects';
import Home from './pages/Home';
import PostProject from './Components/PostProject';
import Navbar from './pages/Navbar';
//import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/more-projects" element={<MoreProjects />} />
        <Route
          path="/post-project"
          element={<PostProject isLoggedIn={isLoggedIn}/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
