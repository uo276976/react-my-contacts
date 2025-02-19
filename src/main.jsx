import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tachyons'; 
import './index.css'
import App from './App.jsx'
import { defineCustomElements } from '@ionic/pwa-elements/loader'; 

defineCustomElements(window);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
