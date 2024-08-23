import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navi from './components/Navi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navi />
      <App />
  </StrictMode>,
)
