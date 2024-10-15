import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
  useEffect(() => {
    // Check if the alert has been shown previously
    const alertShown = localStorage.getItem('alertShown');

    // Show the alert only if it hasn't been shown yet
    if (!alertShown) {
      Swal.fire({
        title: 'Success!',
        text: 'You have logged in successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Set the alertShown flag in local storage when the alert is closed
        localStorage.setItem('alertShown', 'true');
      });
    }
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App!</h1>
      <Link to="/compiler">
        <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
          Go to Compiler
        </button>
      </Link>
    </div>
  );
};

export default Home;
