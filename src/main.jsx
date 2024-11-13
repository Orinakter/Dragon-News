import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
 
  RouterProvider,
} from "react-router-dom";
import routers from './routes/routers.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)