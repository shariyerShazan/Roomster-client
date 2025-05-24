import React from 'react'
import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Links */}
        <ul className="flex space-x-6 mb-4 sm:mb-0">
          <li>
            <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/listing" className="hover:text-indigo-400 transition">Listing</Link>
          </li>
          <li>
            <Link to="/my-listing" className="hover:text-indigo-400 transition">My Listings</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition text-xl">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition text-xl">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition text-xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition text-xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-4">&copy; 2025 Event Explorer. All rights reserved.</p>
    </footer>
  );
}

export default Footer
