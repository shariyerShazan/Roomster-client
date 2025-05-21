import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {RouterProvider} from "react-router"
import { Router } from './Router/Router'
import MainLayout from './Layout/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} >
        <MainLayout />
    </RouterProvider>
  </StrictMode>,
)
