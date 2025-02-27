import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Menu icon
import cwLogo from "../assets/cw.png";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); 
    
    const location = useLocation(); // Get current route

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleSignIn = () => {
        navigate("/signup", { replace: true });
    };

    const navLinks = [
        { name: "Home", path: "/CodeWizard/launch" },
        { name: "Problems", path: "/CodeWizard/ProblemSets" },
        { name: "Contests", path: "/CodeWizard/contest" },
        { name: "Compiler", path: "/CodeWizard/compiler" },
        { name: "Leaderboard", path: "#leaderboard" },
        { name: "Discussions", path: "/CodeWizard/Discussion" },
        { name: "Profile", path: "#profile" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full h-8 bg-gray-900 text-white shadow-md flex items-center">
            {/* Logo */}
            <a href="/CodeWizard" className="flex items-center">
            <img src={cwLogo} alt="CodeQeust" className="h-28 w-20 ml-3 object-contain filter invert" />

            </a>

            {/* Navbar Links (Centered) */}
            <nav className={`absolute md:static top-8 left-0 w-full bg-gray-900 md:flex md:justify-center space-x-4 p-2 md:p-0 ${menuOpen ? "block" : "hidden"} md:block`}>
                {navLinks.map((link) => (
                    <a
                        key={link.path}
                        href={link.path}
                        className={`px-3 py-1 rounded-md transition duration-200 ${
                            location.pathname === link.path ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                        }`}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Sign In Button (Right Side) */}
            <button
                className="w-[4.25rem] h-5 flex items-center justify-center bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 mr-4 my-[0.2rem] whitespace-nowrap"
                onClick={handleSignIn}
            >
                Sign In
            </button>

            {/* Mobile Menu Icon */}
            <FaBars className="md:hidden text-xl cursor-pointer" onClick={toggleMenu} />
        </header>
    );
};

export default Navbar;
