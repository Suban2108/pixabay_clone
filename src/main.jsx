import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pixabaystate from './context/pixabaystate.jsx'

createRoot(document.getElementById('root')).render(
  <Pixabaystate>
    <App />
  </Pixabaystate>,
)
