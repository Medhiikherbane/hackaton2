import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Magasin from './pages/Magasin.jsx'
import Panier from './pages/Panier.jsx'
import './index.css'


const router= createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/Magasin",
    element:<Magasin/>,
  },
  {
    path: "/Panier",
    element:<Panier/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
