import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlayerThrow from './PlayerThrow.jsx'
import ComputerThrow from './ComputerThrow.jsx'
import RPS from './RPS.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <PlayerThrow />
  <ComputerThrow /> */}
  <RPS />

  </StrictMode>,
)
