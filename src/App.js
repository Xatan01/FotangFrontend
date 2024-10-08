import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/homePage.js';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
