import React from 'react';
import google_logo from './../assets/google-logo.svg';

const Login: React.FC = () => {
  // Function to handle login with username and password
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with username and password');
  };

  // Function to handle login with Google
  const handleLoginWithGoogle = () => {
    // Implement your Google login logic here
    console.log('Logging in with Google');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-pink-400">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-md py-2 px-4 bg-gradient-to-r font-bold from-blue-500 to-pink-500 text-white hover:opacity-90 transition duration-300"
            onClick={handleLogin}
          >
            Login with Username/Password
          </button>
          <div className="text-center text-gray-500 my-2">or</div>
          <button
            type="button"
            className="w-full flex items-center justify-center border-2 border-red-500 bg-white text-red-500 font-bold rounded-md py-2 px-4 hover:bg-red-500 hover:text-white transition duration-300"
            onClick={handleLoginWithGoogle}
          >
            <img
              src={google_logo}
              alt="Google Logo"
              className="w-6 h-6 mr-2"
            />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
