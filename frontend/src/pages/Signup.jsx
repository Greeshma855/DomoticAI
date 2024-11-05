import React, { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import googleLogo from '../assets/images/google-logo.jpg';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [error, setError] = useState('');

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
      // Redirect or update the UI to show successful signup
      navigate('/dashboard');
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google Signup clicked');
  };

  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center text-[#8c4600] font-nunito"
      style={{ backgroundImage: "url('./assets/images/background.logo.jpg')" }}>
      <div className="flex items-center">
        {/* <div className="absolute top-5 left-5 text-2xl font-bold text-[#782704]">DOMOTICAI</div> */}
        <button 
          className="absolute top-5 left-5 text-2xl font-bold text-[#782704]"
          onClick={ () => navigate('/') }
        >DOMOTICAI</button>
        <div className="bg-white/80 p-10 rounded-md border border-[#F9F1F0] shadow-lg w-[450px] text-center mr-8">
          <h2 className="text-2xl mb-2">Sign Up</h2>
          <a href="/login" className="text-[#2200cc] underline mb-5 block">or if you already have an account</a>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-left text-lg">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left text-lg">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? 'password' : 'text'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#8c4600]"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-left text-lg">Confirm Password:</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'password' : 'text'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#8c4600]"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>
            <button type="submit" onClick={handleSubmit} className="w-3/4 py-3 bg-[#8c4600] text-white rounded-md hover:bg-[#be4205] active:bg-[#4e2d12] transition">
              Sign Up
            </button>
            <p className="my-4 font-semibold">OR</p>
            <button onClick={handleGoogleSignup} className="w-[100px] mx-auto py-4 flex justify-center items-center border border-[#8c4600] rounded-md">
              <img src={googleLogo} alt="Google Logo" className="w-10 h-10" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;