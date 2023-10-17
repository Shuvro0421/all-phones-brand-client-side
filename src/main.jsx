import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './components/Routes.jsx';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
