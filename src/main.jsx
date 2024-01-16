import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoutesFromElements,createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Highlights from './components/Highlights/Highlights'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/hero-section" element={<HeroSection />} />
      <Route path="/highlight" element={<Highlights />} />
      <Route path="/testimonial" element={<Testimonials />} />
      <Route path="/about" element={<About />} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
