import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/main.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
