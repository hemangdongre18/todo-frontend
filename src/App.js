import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import NewUser from './components/NewUserPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/NewUserPage" element={<NewUser />} />
    </Routes>
  );
};

export default App;
