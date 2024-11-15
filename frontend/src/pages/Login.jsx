// // import React, { useState } from 'react';
// // import { Eye, EyeOff, ReceiptEuro } from 'lucide-react';
// // import axios from 'axios'; // Make sure to import axios
// // // import './style.css';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //   });
// //   const [showPassword, setShowPassword] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null); // State to store error message

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError(null); // Reset error before submission

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/login', formData);
// //       if (response.status === 200) {
// //         alert('Login successful!');
// //         navigate('/dashboard');
// //       }
// //     } catch (err) {
// //       console.error('Login error:', err);
// //       setError('Something went wrong. Please check your credentials and try again.'); // Update error state
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

  

// //   return (
// //     <div className="max-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
// //         <button 
// //             className="absolute top-5 left-5 text-2xl font-bold text-[#782704]"
// //             onClick={ () => navigate('/') }
// //           >DOMOTICAI
// //         </button>
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-800">
// //             Login
// //           </h2>
// //           <p className="mt-2 text-center text-sm text-yellow-800">
// //             Or{' '}
// //             <a href="/register" className="font-medium text-yellow-800 hover:text-yellow-500">
// //               create a new account
// //             </a>
// //           </p>
// //         </div>

// //         {error && <p className="text-red-600 text-center">{error}</p>} {/* Show error message */}

// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           <div className="rounded-md shadow-sm space-y-4">
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-yellow-800">
// //                 Email address
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 required
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-yellow-800 focus:outline-none focus:ring-blue-500 focus:border-yellow-800 focus:z-10 sm:text-sm"
// //                 placeholder="Enter your email"
// //               />
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-yellow-800">
// //                 Password
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type={showPassword ? 'password' : 'text'}
// //                   autoComplete="current-password"
// //                   required
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-yellow-800 focus:outline-none focus:ring-blue-500 focus:border-yellow-800 sm:text-sm"
// //                   placeholder="Enter your password"
// //                 />
// //                 <button
// //                   type="button"
// //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? (
// //                     <EyeOff className="h-5 w-5 text-yellow-800" />
// //                   ) : (
// //                     <Eye className="h-5 w-5 text-yellow-700" />
// //                   )}
// //                 </button>
// //               </div>
             

// //             </div>
// //           </div>

// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center">
// //               <input
// //                 id="remember-me"
// //                 name="remember-me"
// //                 type="checkbox"
// //                 className="h-4 w-4 accent-yellow-800 text-yellow-600 focus:ring-yellow-500 border-yellow-300 rounded"
// //               />
// //               <label htmlFor="remember-me" className="ml-2 block text-sm text-yellow-900">
// //                 Remember me
// //               </label>
// //             </div>

// //             <div className="text-sm">
// //               <a href="#" className="font-medium text-yellow-800 hover:text-yellow-500">
// //                 Forgot your password?
// //               </a>
// //             </div>
// //           </div>

// //           <div>
// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {isLoading ? 'Signing in...' : 'Sign in'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Eye, EyeOff } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Load Google Sign-In SDK
//     const loadGoogleScript = () => {
//       const script = document.createElement('script');
//       script.src = 'https://accounts.google.com/gsi/client';
//       script.async = true;
//       script.defer = true;
//       document.body.appendChild(script);

//       script.onload = () => {
//         initializeGoogleSignIn();
//       };
//     };

//     loadGoogleScript();
//   }, []);

//   const initializeGoogleSignIn = () => {
//     if (window.google) {
//       window.google.accounts.id.initialize({
//         client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//         callback: handleGoogleSignIn,
//       });

//       window.google.accounts.id.renderButton(
//         document.getElementById('googleSignInButton'),
//         { theme: 'outline', size: 'large', width: '100%' }
//       );
//     }
//   };

//   const handleGoogleSignIn = async (response) => {
//     try {
//       const result = await axios.post('http://localhost:5000/api/google-auth', {
//         token: response.credential,
//       });

//       localStorage.setItem('token', result.data.token);
//       localStorage.setItem('user', JSON.stringify(result.data.user));
      
//       console.log('Google sign-in successful:', result.data);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Google sign-in error:', err);
//       setError(err.response?.data?.message || 'Google sign-in failed.');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email,
//         password,
//       });

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
      
//       console.log('Login successful:', response.data);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.response?.data?.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="bg-[#00000] flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-[#fbf7f0] p-8 rounded-lg shadow-lg">
//         <button 
//           className="absolute top-5 left-5 text-2xl font-bold text-[#1d4b3e]"
//           onClick={() => navigate('/')}
//         >
//           DOMOTICAI
//         </button>
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1d4b3e]">
//             Login
//           </h2>
//           <p className="mt-2 text-center text-sm text-[#1d4b3e]">
//             Or{' '}
//             <a href="/Signup" className="font-medium text-[#1d4b3e] hover:text-[#A0612B]">
//               create a new account
//             </a>
//           </p>
//         </div>

//         {error && <p className="text-red-600 text-center">{error}</p>}

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-[#1d4b3e]">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#1d4b3e] focus:outline-none focus:ring-blue-500 focus:border-[#1d4b3e] sm:text-sm"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-[#1d4b3e]">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-[#1d4b3e] focus:outline-none focus:ring-blue-500 focus:border-[#1d4b3e] sm:text-sm"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-[#1d4b3e]" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-[#1d4b3e]" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <a href="/forgot-password" className="font-medium text-[#1d4b3e] hover:text-[#A0612B]">
//                 Forgot your password?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1d4b3e] hover:bg-[#80b5a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A0612B]"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <p className="my-4 font-semibold text-[#1d4b3e] text-center">OR</p>

//         <div id="googleSignInButton" className="flex justify-center"></div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user', JSON.stringify(result.data.user));

      navigate('/dashboard');
    } catch (err) {
      console.error('Google sign-in error:', err);
      setError(err.response?.data?.message || 'Google sign-in failed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials');
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
            Login
          </h2>
          <p className="mt-2 text-center text-sm text-[#1d4b3e]">
            Or{' '}
          <a href="/register" className="font-medium text-blue-500 hover:text-blue-700 hover:underline active:text-blue-800">
            create a new account
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
                  type={showPassword ? 'text' : 'password'}
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
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1d4b3e] hover:bg-[#80b5a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A0612B]"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="my-4 font-semibold text-[#1d4b3e] text-center">OR</p>

        <div id="googleSignInButton" className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default Login;
