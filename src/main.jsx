import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Copyright notice visible in browser console (may be removed in production builds)
console.info("© 2025 Luis Velazquez — All rights reserved.");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
