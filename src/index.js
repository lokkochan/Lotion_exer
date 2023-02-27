import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Entrance from './entrance.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/notes" element={<App state={"none"}/>} />
        <Route path="/notes/:note" element={<App state={"read"}/>} />
        <Route path="/notes/:note/edit"  element={<App state={"edit"}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
