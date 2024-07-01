import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
//import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
)
