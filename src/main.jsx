import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider, FilterProvider } from './context'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './components/Other/ScrollToTop.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
      <FilterProvider>
      <ScrollToTop />
      <ToastContainer />
      <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
)
