import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Entrance() {
  return (
    <div>
      <h1>Welcome to Lotion</h1>
      <Link to ="/note">Enter</Link>
    </div>
  );
}

export default Entrance;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);