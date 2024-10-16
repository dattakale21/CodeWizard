// src/components/About.js

import React from 'react';
import Navbar from './Navbar';
import './hero.css';

const About = () => {
    return (
        <section className="about hero bg-cover bg-center h-screen flex flex-col items-center justify-center text-center w-full contact-section">
            <Navbar />
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4">
                    About <span className="text-teal-500">CodeWizard</span>
                </h2>
                <p className="common-paragraph text-center">
                    At CodeWizard, we are passionate about empowering aspiring coders and computer science students. Our platform offers a comprehensive environment for honing coding skills through interactive challenges, coding competitions, and extensive resources.
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                    Our Mission
                </h3>
                <p className="common-paragraph">
                    Our mission is to create an inclusive space where learners can grow, collaborate, and showcase their skills. We believe that everyone should have access to quality coding education, and we strive to make that a reality.
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                    What We Offer
                </h3>
                <ul className="text-lg mb-4">
                    <li className="common-list-item">🖥️ A wide range of coding problems to test and improve your skills.</li>
                    <li className="common-list-item">🏆 Regular coding competitions to challenge your abilities and win exciting prizes.</li>
                    <li className="common-list-item">📈 Comprehensive dashboards to track your progress and achievements.</li>
                    <li className="common-list-item">🤝 Community support and collaboration opportunities to connect with fellow learners and mentors.</li>
                </ul>
                <h3 className="text-2xl font-semibold mb-2">
                    Join Us
                </h3>
                <p className="common-paragraph text-center">
                    Whether you're just starting your coding journey or looking to refine your skills, CodeWizard is here to help. Join our community today and start coding your way to success!
                </p>
            </div>
            <footer className="footer bg-gray-800 text-white w-full h-12">
                <p id="foot" className="text-center">
                    Copyright © 2024 CodeWizard. All rights reserved |
                    <span style={{ margin: '0 5px' }}>Developed with ❤️ by CodeWizard Team.</span>
                </p>
            </footer>
        </section>
    );
};

export default About;
