import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {RouterProvider} from "react-router"
import { Router } from './Router/Router'
import MainLayout from './Layout/MainLayout'
import AuthProvider from './Context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
        <RouterProvider router={Router} >
            <MainLayout />
        </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
