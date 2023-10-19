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
import AddProduct from './components/AddProduct';
import MyCart from './components/MyCart';
import AllProducts from './components/AllProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/addProduct",
        element : <AddProduct></AddProduct>
      },
      {
        path : "/myCart",
        element : <MyCart></MyCart>
      },
      {
        path : "/allProducts",
        element : <AllProducts></AllProducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
