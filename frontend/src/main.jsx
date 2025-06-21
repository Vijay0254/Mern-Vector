import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster position="top-right" reverseOrder={false} toastOptions={{style: {backgroundColor: "black", color: "white", paddingRight: "20px", paddingLeft: "20px"}, duration: 2500}} />
  </>,
)
