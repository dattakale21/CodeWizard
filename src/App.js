import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/login/Signup';
import Compiler from './components/compiler/CodeEditor';
import Home from './components/login/Home'; // Import Home component
import About from './components/Welcome/About';
import Contact from './components/Welcome/contact';
import Hero from './components/Welcome/Hero';
import Developers from './components/Welcome/Developers';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home Page */}
        <Route path="/about" element={<About />} /> {/* About Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
        <Route path="/home" element={<Home />} /> {/* Home Page after login */}
        <Route path="/developers" element={<Developers />} />
        <Route path="/compiler" element={<Compiler />} /> {/* Compiler Page */}
        {/* <Route path="*" element={<NotFound />} /> // Add this route at the end */}
      </Routes>
    </div>
  );
};

export default App;


