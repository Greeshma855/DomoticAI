import React from 'react';
import { Route, Routes } from "react-router-dom";
import Hero from './Hero';
import Custom404 from './Custom404';
import Pricing from './Pricing';
import Signup from './Signup';
import Login from './Login';



const App = () => {
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
