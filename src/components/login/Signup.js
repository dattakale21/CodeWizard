import React, { useState } from 'react';
import './Signup.css';
import Swal from 'sweetalert2';
import logo from './cw.png';
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
    if (!/[!@#$%^&*]/.test(password)) {
      return ["Must include at least 1 special character."];
    }
    return []; // Return empty array if all checks pass
  };

  // ------------------- SIGN UP ---------------------

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrors([]); // Reset error messages

    if (password !== confirmPassword) {
      const errorMsg = ["Passwords do not match."];
      setErrors(errorMsg);
      setTimeout(() => setErrors([]), 3000); // Clear errors after 3 seconds
      return;
    }

    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors([]), 3000); // Clear errors after 3 seconds
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: 'Success!',
        text: 'User registered successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      navigate('/home');
    } catch (error) {
      console.error("Sign Up Error: ", error.message);
      const errorMsg = [error.message];
      setErrors(errorMsg);
      setTimeout(() => setErrors([]), 3000); // Clear errors after 3 seconds
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        confirmButtonText: 'OK'
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
        icon: 'success',
      });
      navigate('/home');
    } catch (error) {
      console.error("Sign In Error: ", error.message);
      const errorMsg = [error.message];
      setErrors(errorMsg);
      setTimeout(() => setErrors([]), 3000); // Clear errors after 3 seconds
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
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
      window.Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'User signed in successfully!',
      });
      navigate('/home');
    } catch (error) {
      console.error("Provider Sign In Error: ", error);
      const errorMsg = [`Error during sign in with provider: ${error.message}`];
      setErrors(errorMsg);
      // Clear errors after 3 seconds
      setTimeout(() => setErrors([]), 3000);

      window.Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Error during sign in with provider: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={`container ${isSignIn ? '' : 'right-panel-active'}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
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
            <p>Unlock your coding potential with CodeWizards: where creativity meets technology, and innovative ideas transform into powerful solutions for all.</p>
            <button className="ghost" id="signIn" onClick={() => setIsSignIn(true)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <img src={logo} alt="CodeWizards Logo" className="logo" id="logo2" />
            <h1>Welcome</h1>
            <p>Unlock your coding potential with CodeWizards: where creativity meets technology, and innovative ideas transform into powerful solutions for all.</p>
            <button className="ghost" id="signUp" onClick={() => setIsSignIn(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          copyright © 2024 CodeWizards. All rights reserved |
          <span style={{ margin: '0 5px' }}>Developed with ❤️ by CodeWizards Team.</span>
        </p>
      </footer>
    </div>
  );
};

export default Signup;
