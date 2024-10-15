// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'; // Correct the import statement

const Navbar = () => {
    return (
        <nav className="navbar bg-gray-800 fixed top-0 w-full shadow-lg z-10">
            <div className="max-w-7xl mx-auto flex items-center h-full justify-between">
                {/* Logo on the left */}
                <img
                    src="./cw.png"
                    alt="Logo"
                    className="h-7 w-39" // Adjust logo height here if needed
                />

                {/* Menu Links in the center */}
                <div className="flex-grow hidden md:flex justify-center space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    <Link to="/Developers" className="text-gray-300 hover:text-white">Developers</Link>
                </div>

                {/* Sign In button on the right */}
                <div className="hidden md:block">
                    <Link to="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full">
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
