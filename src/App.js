import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Signup from './components/login/Signup';
import Compiler from './components/compiler/CodeEditor';
import CodeEditor from './components/compiler/ProblemSolvingPage';
import Home from './components/login/Home';
import About from './components/Welcome/About';
import Contact from './components/Welcome/contact';
import Hero from './components/Welcome/Hero';
import Developers from './components/Welcome/Developers';
import Navbar1 from './components/Welcome/Navbar';
import LaunchPage from "./components/landingPage/LaunchPage";
import Navbar from "./components/landingPage/Navbar";
import ProblemSets from "./components/landingPage/ProblemSets";
import ContestPage from './components/compiler/ContestPage';
import DiscussionPage from "./components/compiler/DiscussionPage";
import EasyPage from "./components/landingPage/Easy";
import MediumPage from "./components/landingPage/Medium";
import HardPage from "./components/landingPage/Hard";
import Stringproblems from "./components/landingPage/stringproblems";
import Stactqueueproblems from "./components/landingPage/stackqueueproblems";
import Binaryproblems from "./components/landingPage/binaryproblems";
import Footer from "./components/Footer";


const App = () => {
  const location = useLocation();

  return (
    <>
      {[
        "/launch", "/", "/ProblemSets", "/contest", "/Discussion", "/compiler",
        "/problems/difficulty/easy", "/problems/difficulty/medium", "/problems/difficulty/hard",
        "/problems/category/string", "/problems/category/stack-queue", "/problems/category/binary-tree", "/code-editor" // ✅ Added Stack, Queue, Binary Tree pages
      ].includes(location.pathname) ? <Navbar /> : <Navbar1 />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/ProblemSets" element={<ProblemSets />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/discussion" element={<DiscussionPage />} />
        <Route path="/problems/difficulty/easy" element={<EasyPage />} />
        <Route path="/problems/difficulty/medium" element={<MediumPage />} />
        <Route path="/problems/difficulty/hard" element={<HardPage />} />
        <Route path="/problems/category/string" element={<Stringproblems />} />
        <Route path="/problems/category/stack-queue" element={<Stactqueueproblems />} />
        <Route path="/problems/category/binary-tree" element={<Binaryproblems />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/compiler" element={<compiler />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
