import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lesson from './components/Lesson';
import FormPage from './components/FormPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
