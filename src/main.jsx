import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pixabaystate from './context/Pixabaystate.jsx'

createRoot(document.getElementById('root')).render(
  <Pixabaystate>
    <App />
  </Pixabaystate>,
)
