import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import "../src/assets/Style/Main.css"
import "../src/assets/Style/Modal.css"



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
