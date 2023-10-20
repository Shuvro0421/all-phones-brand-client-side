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
import ProductDetails from './components/ProductDetails';
import UpdateProducts from './components/UpdateProducts';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/allProducts/:brandName",
        element: <AllProducts></AllProducts>
      },
      {
        path: "/productDetails/:id",
        loader : () => fetch('http://localhost:5000/products'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/updateProducts/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/products/singleProduct/${params.id}`),
        element: <UpdateProducts></UpdateProducts>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
