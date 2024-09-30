import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import NewUser from './components/NewUserPage';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/NewUserPage" element={<NewUser />} />
    </Routes>
  );
};

export default App;
