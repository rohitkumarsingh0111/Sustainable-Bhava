// src/Components/Navbar.jsx

import React, { useState } from 'react';
import sb_logo from '../assets/sb_logo.png';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/AboutUs', label: 'About Us' },
    { path: '/OurServices', label: 'Our Services' },
    { path: '/Blogs', label: 'Blogs' },
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="navbar-container-mobile">
        <img src={sb_logo} alt="Sustainable Bhava" className="navbar-logo-mobile" />
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
  <div className="fixed inset-0 bg-white z-20 flex flex-col items-center pt-24 space-y-8">
    <ul className="space-y-6 text-xl">
      {navLinks.map((link) => (
        <li key={link.path}>   {/* ✅ wrap Link inside li */}
          <Link
            to={link.path}
            className={`cursor-pointer px-6 py-4 rounded-full transition-all text-black hover:bg-yellow-400 ${
              location.pathname === link.path ? 'bg-yellow-400' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

      {/* Desktop Navbar */}
      <div className="navbar-container-desktop">
        <img src={sb_logo} alt="Sustainable Bhava" className="navbar-logo-desktop" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px', marginLeft: 'auto' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl cursor-pointer px-6 py-3 rounded-full transition-all text-black hover:bg-yellow-400 ${
                location.pathname === link.path ? 'bg-yellow-400' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;