import React, { useState } from 'react';
import './Signup.css';
import Swal from 'sweetalert2';
import logo from '../assets/cw.png';
import tick from '../assets/tick.png';
import cross from '../assets/cross.png';
import launch from '../landingPage/LaunchPage';
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const [loading, setLoading] = useState(false); // Loading state
  const [errors, setErrors] = useState([]); // State for error messages
  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Function to validate password
  const validatePassword = (password) => {
    if (password.length < 8) {
      return ["Password must be at least 8 characters long."];
    }
    if (!/[A-Z]/.test(password)) { // Check for at least one uppercase letter
      errors.push("Must include at least 1 uppercase letter.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return ["Must include at least 1 special character."];
    }
    return []; // Return empty array if all checks pass
  };

  // ------------------- SIGN UP ---------------------

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrors([]); // Clear old errors
  
    if (password !== confirmPassword) {
      setErrors(["Passwords do not match."]);
      return;
    }
  
    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: 'Success!',
        text: 'User registered successfully!',
        confirmButtonText: 'OK',
        imageUrl: tick,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom checkmark icon',
      });
      navigate('/launch');
    } catch (error) {
      setErrors([error.message]);
      Swal.fire({
        title: 'Oops...',
        text: error.message,
        imageUrl: cross,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Error icon',
      });
    } finally {
      setLoading(false);
    }
  };
  

  // ------------------- SIGN IN ---------------------

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrors([]); // Reset error messages

    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors([]), 3000); // Clear errors after 3 seconds
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: 'Success!',
        text: 'User signed in successfully!',
        imageUrl: tick, // Path to your checkmark image
        imageWidth: 200, // Set width of the image
        imageHeight: 200, // Set height of the image
        imageAlt: 'Custom checkmark icon',
        confirmButtonText: 'OK',
      });
      navigate('/launch');
    } catch (error) {
      console.error("Sign In Error: ", error.message);
      const errorMsg = [error.message];
      setErrors(errorMsg);
      setTimeout(() => setErrors([]), 3000); // Clear errors after 3 seconds
      Swal.fire({
        title: 'Oops...',
        text: error.message,
        imageUrl: cross, // Path to your checkmark image
        imageWidth: 200, // Set width of the image
        imageHeight: 200, // Set height of the image
        imageAlt: 'Custom checkmark icon',
      });
    } finally {
      setLoading(false);
    }
  };


  const signInWithProvider = async (provider) => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      Swal.fire({
        title: 'Success',
        text: 'User signed in successfully!',
        confirmButtonText: 'OK',
        imageUrl: tick, // Path to your checkmark image
        imageWidth: 200, // Set width of the image
        imageHeight: 200, // Set height of the image
        imageAlt: 'Custom checkmark icon',
        showClass: {
          popup: 'animate__animated animate__fadeInDown' // Add animation
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp' // Hide animation
        },

      });
      navigate('/launch');
    } catch (error) {
      console.error("Provider Sign In Error: ", error);
      const errorMsg = [`Error during sign in with provider: ${error.message}`];
      setErrors(errorMsg);
      // Clear errors after 3 seconds
      setTimeout(() => setErrors([]), 3000);
 
      window.Swal.fire({
        title: 'Oops...',
        text: `Error during sign in with provider: ${error.message}`,
        imageUrl: cross, // Path to your checkmark image
        imageWidth: 200, // Set width of the image
        imageHeight: 200, // Set height of the image
        imageAlt: 'Custom checkmark icon',
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={`container ${isSignIn ? '' : 'right-panel-active'}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1 class="create_account">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social" onClick={() => signInWithProvider(facebookProvider)}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social" onClick={() => signInWithProvider(googleProvider)}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social" onClick={() => signInWithProvider(githubProvider)}>
              <i className="fab fa-github"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} show-password-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <div className="password-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'} show-password-icon`}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </div>
          {/* Display error messages here */}
          {errors.length > 0 && (
            <div className="error-messages">
              {errors.map((error, index) => (
                <p key={index} className="error-message">{error}</p>
              ))}
            </div>
          )}
          <button type="submit" disabled={loading}>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social" onClick={() => signInWithProvider(facebookProvider)}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social" onClick={() => signInWithProvider(googleProvider)}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social" onClick={() => signInWithProvider(githubProvider)}>
              <i className="fab fa-github"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <i
              className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} show-password-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <a href="#" id="forgot">Forgot your password?</a>
          {/* Display error messages for sign in */}
          {errors.length > 0 && (
            <div className="error-messages">
              {errors.map((error, index) => (
                <p key={index} className="error-message">{error}</p>
              ))}
            </div>
          )}
          <button type="submit" disabled={loading}>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img src={logo} alt="CodeWizards Logo" className="logo" />
            <h1>Welcome Back!</h1>
            <p>Unlock your coding potential with CodeWizard: where creativity meets technology, and innovative ideas transform into powerful solutions for all.</p>
            <button className="ghost" id="signIn" onClick={() => setIsSignIn(true)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <img src={logo} alt="CodeWizards Logo" className="logo" id="logo2" />
            <h1>Welcome</h1>
            <p>Unlock your coding potential with CodeWizard: where creativity meets technology, and innovative ideas transform into powerful solutions for all.</p>
            <button className="ghost" id="signUp" onClick={() => setIsSignIn(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
