// src/components/HeroSection.js

import React from 'react';
import './hero.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <section className="hero bg-cover bg-center h-screen flex flex-col items-center justify-center text-center w-full">
            <Navbar />
            <div className="w-full px-4 relative flex-grow flex flex-col justify-center"> {/* Ensure it takes available space */}
                {/* Hero Text */}
                <h1 className="text-5xl font-bold text-white mb-6">
                    A New Way to Learn
                </h1>
                <p className="title text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
    CodeWizards is the best platform to help you enhance your skills, expand your knowledge, and prepare for Placements.
</p>
                {/* Call to Action Button */}
                <Link to="/signup"
                    className="bg-teal-500 text-white px-6 py-2 rounded-full text-lg hover:bg-teal-600 transition"
                    style={{ width: '200px', margin: '0 auto' }}
                >

                    Create Account
                </Link>
            </div>
            <footer className="footer bg-gray-800 text-white w-full h-12">
                <p className="text-center">
                    Copyright © 2024 CodeWizards. All rights reserved |
                    <span style={{ margin: '0 5px' }}>Developed with ❤️ by CodeWizards Team.</span>
                </p>
            </footer>
        </section>
    );
};

export default HeroSection;
