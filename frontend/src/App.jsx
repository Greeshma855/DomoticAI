import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from './Hero';
import Custom404 from './pages/Custom404';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SmartHomeDashboard from './SmartHomeDashboard';
import AnalyticsDashboard from './AnalyticsDashboard';



const App = () => {
 
  return (
    <Routes>
      <Route path="*" element={<Custom404/>} />
      <Route path="/" element={<Hero/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<SmartHomeDashboard/>} />
      <Route path="/dashboard/analytics" element={<AnalyticsDashboard/>} />
    </Routes>
      
  );
}

export default App;
