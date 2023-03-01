import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from "./pages/Vans/vanDetail";
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import Layout from "./components/Layout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostLayout from "./components/HostLayout";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element = {<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />    
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path ="host" element = {<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" elements={<HostVans />} />
          <Route path="vans/:id" elements={<HostVanDetail />} />
        </Route>
        
     
        </Route>
        //put some route here if you don't want the headers in it
      </Routes>

    </BrowserRouter>
  );
}

export default App;
