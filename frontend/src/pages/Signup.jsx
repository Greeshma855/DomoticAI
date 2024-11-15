// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Eye, EyeOff } from 'lucide-react';
// // import googleLogo from '../assets/images/google-logo.jpg';
// // import { useNavigate } from 'react-router-dom';

// // const Signup = () => {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [showPassword, setShowPassword] = useState(true);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(true);
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     if (password !== confirmPassword) {
// //       alert('Passwords do not match!');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/register', {
// //         email,
// //         password,
// //         confirmPassword,
// //       });

// //       console.log('Signup successful:', response.data);
// //       // Redirect or update the UI to show successful signup
// //     } catch (err) {
// //       console.error('Signup error:', err);
// //       setError(err.response?.data?.message || 'Something went wrong.');
// //     }
// //   };

// //   const handleGoogleSignup = () => {
// //     console.log('Google Signup clicked');
// //   };

// //   return (
// //     <div className="bg-cover bg-center h-screen flex justify-center items-center text-[#8c4600] font-nunito"
// //       style={{ backgroundImage: "url('./assets/images/background.logo.jpg')" }}>
// //       <div className="flex items-center">
// //         {/* <div className="absolute top-5 left-5 text-2xl font-bold text-[#782704]">DOMOTICAI</div> */}
// //         <button 
// //           className="absolute top-5 left-5 text-2xl font-bold text-[#782704]"
// //           onClick={ () => navigate('/') }
// //         >DOMOTICAI</button>
// //         <div className="bg-white/80 p-10 rounded-md border border-[#F9F1F0] shadow-lg w-[450px] text-center mr-8">
// //           <h2 className="text-2xl mb-2">Sign Up</h2>
// //           <a href="/login" className="text-[#2200cc] underline mb-5 block">or if you already have an account</a>
// //           {error && <p className="text-red-500">{error}</p>}
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label htmlFor="email" className="block text-left text-lg">Email:</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password" className="block text-left text-lg">Password:</label>
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? 'password' : 'text'}
// //                   id="password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   required
// //                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
// //                 />
// //                 <span
// //                   onClick={() => setShowPassword(!showPassword)}
// //                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#8c4600]"
// //                 >
// //                   {showPassword ? <EyeOff /> : <Eye />}
// //                 </span>
// //               </div>
// //             </div>
// //             <div>
// //               <label htmlFor="confirmPassword" className="block text-left text-lg">Confirm Password:</label>
// //               <div className="relative">
// //                 <input
// //                   type={showConfirmPassword ? 'password' : 'text'}
// //                   id="confirmPassword"
// //                   value={confirmPassword}
// //                   onChange={(e) => setConfirmPassword(e.target.value)}
// //                   required
// //                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
// //                 />
// //                 <span
// //                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#8c4600]"
// //                 >
// //                   {showConfirmPassword ? <EyeOff /> : <Eye />}
// //                 </span>
// //               </div>
// //             </div>
// //             <button type="submit" className="w-3/4 py-3 bg-[#8c4600] text-white rounded-md hover:bg-[#be4205] active:bg-[#4e2d12] transition">
// //               Sign Up
// //             </button>
// //             <p className="my-4 font-semibold">OR</p>
// //             <button onClick={handleGoogleSignup} className="w-[100px] mx-auto py-4 flex justify-center items-center border border-[#8c4600] rounded-md">
// //               <img src={googleLogo} alt="Google Logo" className="w-10 h-10" />
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { Eye, EyeOff } from 'lucide-react';
// import googleLogo from '../assets/images/google-logo.jpg';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(true);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(true);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/register', {
//         email,
//         password,
//         confirmPassword,
//       });

//       console.log('Signup successful:', response.data);
//       // Redirect or update the UI to show successful signup
//     } catch (err) {
//       console.error('Signup error:', err);
//       setError(err.response?.data?.message || 'Something went wrong.');
//     }
//   };

//   const handleGoogleSignup = () => {
//     console.log('Google Signup clicked');
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex justify-center items-center text-[#1d4b3e] font-nunito"
//       style={{ backgroundImage: "url('./assets/images/background.logo.jpg')" }}>
//       <div className="flex items-center">
//         <button 
//           className="absolute top-5 left-5 text-2xl font-bold text-[#1d4b3e]"
//           onClick={() => navigate('/')}>
//           DOMOTICAI
//         </button>
//         <div className="bg-[#fbf7f0]/80 p-10 rounded-md border border-[#F9F1F0] shadow-lg w-[450px] text-center mr-8">
//           <h2 className="text-2xl mb-2">Sign Up</h2>
//           <a href="/login" className="text-[#1d4b3e] underline mb-5 block">or if you already have an account</a>
//           {error && <p className="text-red-500">{error}</p>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-left text-lg">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-left text-lg">Password:</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'password' : 'text'}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#1d4b3e]"
//                 >
//                   {showPassword ? <EyeOff /> : <Eye />}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block text-left text-lg">Confirm Password:</label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? 'password' : 'text'}
//                   id="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//                 <span
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#1d4b3e]"
//                 >
//                   {showConfirmPassword ? <EyeOff /> : <Eye />}
//                 </span>
//               </div>
//             </div>
//             <button type="submit" className="w-3/4 py-3 bg-[#1d4b3e] text-white rounded-md hover:bg-[#be4205] active:bg-[#4e2d12] transition">
//               Sign Up
//             </button>
//             <p className="my-4 font-semibold">OR</p>
//             <button onClick={handleGoogleSignup} className="w-[40px] mx-auto py-0 flex justify-center items-center rounded-md">
//               <img src={googleLogo} alt="Google Logo" className="w-10 h-10" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Eye, EyeOff } from 'lucide-react';
// import googleLogo from '../assets/images/google-logo.jpg';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';


// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(true);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(true);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/register', {
//         email,
//         password,
//         confirmPassword,
//       });

//       console.log('Signup successful:', response.data);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Signup error:', err);
//       setError(err.response?.data?.message || 'Something went wrong.');
//     }
//   };

//   const handleGoogleSignup = async (response) => {
//     try {
//       const { tokenId } = response;
//       const res = await axios.post('http://localhost:5000/api/auth/google', { idToken: tokenId });
//       console.log('Google Signup successful:', res.data);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Google Signup error:', error);
//       setError('Failed to sign up with Google. Please try again.');
//     }
//   };

//   const handleGoogleFailure = (error) => {
//     console.error('Google Sign In Failed:', error);
//     setError('Google Sign In was unsuccessful. Please try again.');
//   };

//   return (
//     <div className="bg-white flex justify-center items-center h-screen text-[#1d4b3e] font-nunito">
//       <div className="flex items-center">
//         <button 
//           className="absolute top-5 left-5 text-2xl font-bold text-[#1d4b3e]"
//           onClick={() => navigate('/')}
//         >
//           DOMOTICAI
//         </button>
//         <div className="bg-[#fbf7f0] p-10 rounded-md border border-[#F9F1F0] shadow-lg w-[450px] text-center">
//           <h2 className="text-2xl mb-2 text-[#1d4b3e]">Sign Up</h2>
//           <a href="/login" className="text-[#1d4b3e] underline mb-5 block">or if you already have an account</a>
//           {error && <p className="text-red-500">{error}</p>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-left text-lg text-[#1d4b3e]">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-left text-lg text-[#1d4b3e]">Password:</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'password' : 'text'}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#1d4b3e]"
//                 >
//                   {showPassword ? <EyeOff /> : <Eye />}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block text-left text-lg text-[#1d4b3e]">Confirm Password:</label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? 'password' : 'text'}
//                   id="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//                 <span
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#1d4b3e]"
//                 >
//                   {showConfirmPassword ? <EyeOff /> : <Eye />}
//                 </span>
//               </div>
//             </div>
//             <button type="submit" onClick={handleSubmit} className="w-3/4 py-3 bg-[#8c4600] text-white rounded-md hover:bg-[#be4205] active:bg-[#4e2d12] transition">
//               Sign Up
//             </button>
//             <p className="my-4 font-semibold text-[#1d4b3e]">OR</p>
//             <GoogleLogin
//               clientId="YOUR_GOOGLE_CLIENT_ID" 
//               buttonText={<img src={googleLogo} alt="Google Logo" className="w-10 h-10" />}
//               onSuccess={handleGoogleSignup}
//               onFailure={handleGoogleFailure}
//               cookiePolicy={'single_host_origin'}
//               className="w-[40px] mx-auto py-0 flex justify-center items-center"
//               style={{ border: 'none', background: 'none' }} 
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        initializeGoogleSignIn();
      };
    };

    loadGoogleScript();
  }, []);

  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '1097973174997-sdiba1acvnivgh89qhgfbp7scjj27e83.apps.googleusercontent.com', 
        callback: handleGoogleSignIn,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large', width: '100%' }
      );
    }
  };

  const handleGoogleSignIn = async (response) => {
    try {
      const result = await axios.post('http://localhost:5000/api/google-auth', {
        token: response.credential,
      });

      console.log('Google sign-in successful:', result.data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Google sign-in error:', err);
      setError(err.response?.data?.message || 'Google sign-in failed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        confirmPassword,
      });

      console.log('Signup successful:', response.data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="bg-[#fbf7f0] flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[white] p-8 rounded-lg shadow-lg">
        <button 
          className="absolute top-5 left-5 text-2xl p-4 font-bold text-[#1d4b3e] bg-white rounded-lg"
          onClick={() => navigate('/')}
        >
          DOMOTICAI
        </button>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1d4b3e]">
            Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-[#1d4b3e]">
            Or{' '}
            <a href="/login" className="font-medium text-blue-500 hover:text-blue-700 hover:underline active:text-blue-800">
              if you already have an account
            </a>
          </p>
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1d4b3e]">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#1d4b3e] focus:outline-none focus:ring-blue-500 focus:border-[#1d4b3e] sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#1d4b3e]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'password' : 'text'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#1d4b3e] focus:outline-none focus:ring-blue-500 focus:border-[#1d4b3e] sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[#1d4b3e]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[#1d4b3e]" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1d4b3e]">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'password' : 'text'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#1d4b3e] focus:outline-none focus:ring-blue-500 focus:border-[#1d4b3e] sm:text-sm"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-[#1d4b3e]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[#1d4b3e]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1d4b3e] hover:bg-[#80b5a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A0612B]"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="my-4 font-semibold text-[#1d4b3e] text-center">OR</p>

        <div id="googleSignInButton" className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default Signup;