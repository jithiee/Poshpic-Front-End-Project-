import React, { useState } from 'react';
import logo from '../../features/authentication/assets/images/logo.png.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={'/'}>
            <div className="flex-shrink-0 bg-[#1F485B]  cursor-pointer border rounded">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:text-gray-900"
              aria-label="toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links and Action Buttons for Desktop */}
          <nav className="hidden md:flex space-x-8 font-Poppins font-bold">
            <ul className="flex items-center space-x-6">
              <Link to={'/viewPhotographer'}>
                <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Booking</li>
              </Link>
              <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Posts</li>
              <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Pricing</li>
            </ul>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link to={'/login'} >
              <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-700 rounded hover:bg-gray-200">
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-500">
                Sign up free
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Booking</li>
              <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Posts</li>
              <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Pricing</li>
            </ul>
            <div className="flex flex-col items-center space-y-2 pb-4">
              <Link to={'/login'}>
                <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-700 rounded hover:bg-gray-100 w-full">
                  Login
                </button>
              </Link>


              <Link to={'/register'} >
                <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-500 w-full">
                  Sign up free
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
