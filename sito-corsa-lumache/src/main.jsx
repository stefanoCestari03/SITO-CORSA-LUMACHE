// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // O BrowserRouter
import App from './App.jsx';
import './index.css'; // <--- QUESTA RIGA È FONDAMENTALE!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);