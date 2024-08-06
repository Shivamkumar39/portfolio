// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoreProjects from './Components/MoreProjects';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} element={<Home/>}/>
        <Route path="/more-projects" component={MoreProjects} element={<MoreProjects/>} />
      </Routes>
    </Router>
  );
};

export default App;
