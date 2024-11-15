// import React from 'react';
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Hero from './Hero';
// import Custom404 from './pages/Custom404';
// import Pricing from './pages/Pricing';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import SmartHomeDashboard from './SmartHomeDashboard';
// import AnalyticsDashboard from './AnalyticsDashboard';
// import { useState } from 'react';

// const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     // Set isAuthenticated to true after a successful login
//     setIsAuthenticated(true);
//   };

// const App = () => {
 
//   return (
//     <Routes>
//       <Route path="*" element={<Custom404/>} />
//       <Route path="/" element={<Hero/>} />
//       <Route path="/pricing" element={<Pricing/>} />
//       <Route path="/register" element={<Signup/>} />
//       {/* <Route path="/login" element={<Login/>} /> */}
//       <Route path="/login" element={<Login onLogin={handleLogin} />} />
//       {/* <Route path="/dashboard" element={<SmartHomeDashboard/>} /> */}
//       <Route
//         path="/dashboard"
//         element={isAuthenticated ? <SmartHomeDashboard/> : <Navigate to="/login" />}
//       />
//       <Route path="/dashboard/analytics" element={<AnalyticsDashboard/>} />
//     </Routes>
      
//   );
// }

// export default App;
















import React from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from './Hero';
import Custom404 from './pages/Custom404';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SmartHomeDashboard from './SmartHomeDashboard';
import AnalyticsDashboard from './AnalyticsDashboard';
<<<<<<< HEAD
import Faq from './pages/faqsec';


=======
import { Navigate } from 'react-router-dom';
// import Dashboard from './Dashboard';
>>>>>>> edb45654984f80c0bc1652b2b7227ce85238b04d

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Set isAuthenticated to true after a successful login
    setIsAuthenticated(true);
  };
 
  return (
    <Routes>
      <Route path="*" element={<Custom404/>} />
      <Route path="/" element={<Hero/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/register" element={<Signup/>} />
      {/* <Route path="/dashboardd" element={<Dashboard/>} /> */}
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      {/* <Route path="/dashboard" element={<SmartHomeDashboard/>} /> */}
      <Route
        path="/dashboard"
        element={isAuthenticated ? <SmartHomeDashboard/> : <Navigate to="/login" />}
      />
      <Route path="/dashboard/analytics" element={<AnalyticsDashboard/>} />
      <Route path='/faq' element={<Faq />} />
    </Routes>
      
  );
}

export default App;
