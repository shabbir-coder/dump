// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Booking from './pages/Booking'

const AppRouter = () => (
  <Router>
    <Header />
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/tours" element={<Tours/>} />
            <Route path="/tour/:id" element={<TourDetails/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/booking" element={<Booking/>} />
        </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
