import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './Home/Home';
import ErrorPage from './Home/ErrorPage/ErrorPage';
import AllContest from './AllContest/AllContest';
import ViewDetails from './Home/ViewDetails/ViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        
      },
      {
        path: '/AllContest',
        element: <AllContest></AllContest>
      }
      ,{
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
