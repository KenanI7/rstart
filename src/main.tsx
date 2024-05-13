import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Dashboard from './pages/dashboard.tsx';
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Route to the App component */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
  