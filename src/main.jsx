import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AlertProvider } from './contexts/AlertContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CodeEditorPage } from './pages/CodeEditorPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='editor/:snippetId' element={<CodeEditorPage />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  </StrictMode>,
)
