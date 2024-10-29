import React, { useState } from 'react';
import './signup.css';
// import { Eye, EyeOff } from 'react-icons/fa';
import { Eye, EyeOff } from 'lucide-react';
import googleLogo from './assets/images/google-logo.jpg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', { email, password });
  };

  const handleGoogleSignup = () => {
    console.log('Google Signup clicked');
  };

  return (
    <>
    <div id='signup-body'>
    <div className="signup-wrapper">
      <div className="header">
      <h1>DOMOTICAI</h1>
    </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <a href="/login" className="login-link">or if you already have an account</a> 
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'password' : 'text'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-icon"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'password' : 'text'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle-icon"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <p className="or-text">OR</p>
          <button onClick={handleGoogleSignup} className="google-signup-button">
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
          </button>
        </form>
      </div>
      {/* <div className="signup-image-container">
        <img src={signupLogo} alt="Signup Logo" className="signup-logo" />
      </div> */}
    </div>
    </div>
    </>
  );
};

export default Signup;











// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(true);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(true);
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }
//     console.log('Form submitted:', { email, password });
//   };

//   const handleGoogleSignup = () => {
//     console.log('Google Signup clicked');
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center font-sans text-[#8c4600]">
//       <div className="relative flex items-center">
//         {/* Header */}
//         <div className="absolute top-5 left-5 z-10">
//           <h1 className="text-2xl text-[#782704]">DOMOTICAI</h1>
//         </div>

//         {/* Main Container */}
//         <div className="w-[450px] p-10 border border-[#F9F1F0] rounded bg-white/80 mr-8 text-2xl">
//           <h2 className="text-center">Sign Up</h2>
//           <a href="/login" className="block text-base text-blue-800 underline mb-5">
//             or if you already have an account
//           </a>

//           <form onSubmit={handleSubmit} className="flex flex-col items-center">
//             {/* Email Field */}
//             <div className="flex items-center mb-4 w-full">
//               <label htmlFor="email" className="w-32 mr-3 text-base">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded text-base"
//               />
//             </div>

//             {/* Password Field */}
//             <div className="flex items-center mb-4 w-full">
//               <label htmlFor="password" className="w-32 mr-3 text-base">
//                 Password:
//               </label>
//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? 'password' : 'text'}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded text-base"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c4600]"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password Field */}
//             <div className="flex items-center mb-4 w-full">
//               <label htmlFor="confirmPassword" className="w-32 mr-3 text-base">
//                 Confirm Password:
//               </label>
//               <div className="relative w-full">
//                 <input
//                   type={showConfirmPassword ? 'password' : 'text'}
//                   id="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded text-base"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c4600]"
//                 >
//                   {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <p className="text-red-500 text-base mb-4">{error}</p>
//             )}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-[300px] p-3 mt-4 bg-[#8c4600] text-white rounded hover:bg-[#be4205] active:bg-[#4e2d12]"
//             >
//               Sign Up
//             </button>

//             <p className="my-4 font-bold text-[#8c4600]">OR</p>

//             {/* Google Sign Up Button */}
//             <button
//               type="button"
//               onClick={handleGoogleSignup}
//               className="w-[100px] p-5 flex justify-center items-center border border-[#8c4600] rounded"
//             >
//               <img
//                 src="/api/placeholder/55/55"
//                 alt="Google Logo"
//                 className="w-14 h-14"
//               />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;