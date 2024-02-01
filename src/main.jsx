import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoutesFromElements,createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'

/*Pages  */
import Homepage from './pages/Homepage.jsx'
import BookingPage from './pages/BookingPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/bookingpage" element={<BookingPage />} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
