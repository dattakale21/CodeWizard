import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Set the basename for the Router to match your GitHub Pages path */}
      <Router basename="/CodeWizard">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
