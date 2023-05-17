import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';



import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito'
import ItemDetailContainer from './components/ItemDetailContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer/>
  },
  {
    path: "/carrito",
    element: <Carrito/>
  },
  {
    path: "/category/:id",
    element: <ItemListContainer/>
  },
  {
    path: "/producto/:id",
    element: <ItemDetailContainer/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
