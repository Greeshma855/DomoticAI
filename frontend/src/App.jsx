import React from 'react';
import { Route, Routes } from "react-router-dom";
import Hero from './Hero';
import Custom404 from './Custom404';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Custom404/>} />
      <Route path="/" element={<Hero/>} />
    </Routes>
      
  );
}

export default App;
