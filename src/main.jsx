import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import About from './pages/About'
import NavBar from './components/NavBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Global nav appears on all pages */}
      {/* Routes render below */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<><NavBar /><About /></>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
