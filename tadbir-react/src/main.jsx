import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* On englobe l'App avec notre Provider */}
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
