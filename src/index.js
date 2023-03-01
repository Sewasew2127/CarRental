import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // a context provider
import App from './App';
import "./server";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


