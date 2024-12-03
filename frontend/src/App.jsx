// import React from 'react';
// import { useState } from 'react';
// // import { Navigate } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
// import Hero from './Hero';
// import Custom404 from './pages/Custom404';
// import Pricing from './pages/Pricing';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// // import SmartHomeDashboard from './SmartHomeDashboard';
// import AnalyticsDashboard from './AnalyticsDashboard';
// import Faq from './pages/faqsec';
// import SmartHome from './newpages/SmartHome';
// // import AboutSmartHome from './AboutSmartHome';
// // import FAQ from './newpages/FAQ'
// // import Window from './newpages/Window';
// // import  Contactus from './newpages/Contactus';
// // import  Footer from './newpages/Footer';
// const App = () => {

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     // Set isAuthenticated to true after a successful login
//     setIsAuthenticated(true);
//   };
//   // const navigate = useNavigate();
 
//   return (
//     <Routes>
//       <Route path="*" element={<Custom404/>} />
//       <Route path="/" element={<Hero/>} />
//       <Route path="/pricing" element={<Pricing/>} />
//       <Route path="/register" element={<Signup/>} />
//       <Route path="/login" element={<Login onLogin={handleLogin} />} />





//       <Route path="/dashboard" element={<SmartHome/>} />
//       {/* <Route path="/dashboard" element={<AboutSmartHome/>} /> */}
//       {/* <Route path="/dashboard" element={<FAQ/>} /> */}
//       {/* <Route path="/dashboard" element={<Window/>} /> */}
//       {/* <Route path="/dashboard" element={<Contactus/>} /> */}
//       {/* <Route path="/dashboard" element={<Footer/>} /> */}







//       <Route path="/dashboard/analytics" element={<AnalyticsDashboard/>} />
//       <Route path='/faq' element={<Faq />} />
//     </Routes>
      
//   );
// }
// export default App;




import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./newpages/LandingPage";
import Hero from './Hero';
import Custom404 from './pages/Custom404';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmartHome from "./newpages/SmartHome";
import AboutSmartHome from "./newpages/AboutSmartHome";
import Features from "./newpages/Features";
import Window from "./newpages/Window";
import FAQ from "./newpages/FAQ";
import ContactUs from "./newpages/Contactus";
import Pricing from './pages/Pricing'; 
import Signup from './pages/Signup'; 
import Login from './pages/Login'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const [isLandingComplete, setIsLandingComplete] = useState(false);

  return (
    <Routes>
      <Route path="*" element={<Custom404 />} />

      {/* Home Route */}
      <Route
        path="/"
        element={
          <div>
            {/* Landing Page and Navbar */}
            <LandingPage onComplete={() => setIsLandingComplete(true)} />
            {isLandingComplete && <Navbar />}

            {/* Main Content */}
            <main>
              <section id="smart-home">
                <SmartHome />
              </section>
              <section id="about">
                <AboutSmartHome />
              </section>
              <section id="features">
                <Features />
              </section>
              <section id="window">
                <Window />
              </section>
              <section id="faq">
                <FAQ />
              </section>
              <section id="contact">
                <ContactUs />
              </section>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        }
      />

      {/* Other Routes */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;
