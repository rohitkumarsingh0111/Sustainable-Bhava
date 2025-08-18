// src/Components/Navbar.jsx

import React, { useState } from 'react';
import sb_logo from '../assets/sb_logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/AboutUs', label: 'About Us' },
    { path: '/OurServices', label: 'Our Services' },
    { path: '/Blogs', label: 'Blogs' }, // <-- ADD THIS LINE
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md">
        <img src={sb_logo} alt="Sustainable Bhava" className="h-12" />
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-20 flex flex-col items-center pt-24 space-y-8">
          <ul className="space-y-6 text-xl">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`cursor-pointer px-6 py-4 rounded-full transition-all text-black hover:bg-yellow-400 ${
                  location.pathname === link.path ? 'bg-yellow-400' : ''
                }`}
                onClick={() => handleNavigation(link.path)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden lg:flex justify-center items-center bg-white z-50 shadow-md py-4 rounded-3xl mx-16">
        <div className="flex items-center justify-between w-full px-12">
          <img src={sb_logo} alt="Sustainable Bhava" className="h-12" />
          <div className="flex items-center space-x-12">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`text-xl cursor-pointer px-6 py-3 rounded-full transition-all text-black hover:bg-yellow-400 ${
                  location.pathname === link.path ? 'bg-yellow-400' : ''
                }`}
                onClick={() => handleNavigation(link.path)}
              >
                {link.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;