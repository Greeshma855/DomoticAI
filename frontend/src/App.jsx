import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from './components/Hero';
import Custom404 from './pages/Custom404';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  const navigate = useNavigate()
 
  return (
    <Routes>
      <Route path="*" element={<Custom404/>} />
      <Route path="/" element={<Hero/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/signup" element={<Signup/>} /> */}
    </Routes>
      
  );
}

export default App;
