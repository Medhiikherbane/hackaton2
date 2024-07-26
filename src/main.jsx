import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Magasin from './pages/Magasin.jsx'
import Panier from './pages/Panier.jsx'
import Intro2 from "./pages/Intro2.jsx";
import Birds from "./components/Birds.jsx";
import Map from './components/MapComponents.jsx';

import './index.css'

const router= createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/Magasin",
    element:<Magasin/>,
  },
  {
    path: "/Panier",
    element:<Panier/>,
  },
  {
    path: "/map",
    element:<Map />,
  },
  {
    path: "/Intro2",
    element:<Intro2 />,
  },
  {
    path: "/Birds",
    element:<Birds />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
