import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'
import App from '@/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
    <App />
  </StrictMode>
)
