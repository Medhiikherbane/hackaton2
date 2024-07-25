import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import Intro2 from "./pages/Intro2.jsx";

import App from './App.jsx';
import './index.css';


const router= createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/Intro2",
    element:<Intro2 />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
