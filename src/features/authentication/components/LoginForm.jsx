import React from 'react';
import Logo from '../assets/images/logo.png.png'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
        
            <div className="min-h-screen bg-[#496D7E] flex items-center justify-center px-4">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-Vollkorn text-center text-[#1F485B] mb-6">Login</h2>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#1F485B] text-sm font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F485B] transition duration-200"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-[#1F485B] text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F485B] transition duration-200"
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="mr-2 focus:ring-0"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-[#496D7E] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1F485B] hover:bg-[#16413F] text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to={'/register'} > 
                        <a href="#" className="text-[#496D7E] hover:underline font-semibold" >
                            Sign up
                        </a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
