import React from 'react';
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
import Login from './Auth/Login';
import Register from './Auth/Register';
import ContextProvider from './ContextProvider/ContextProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './Dashboard/Dashboard';

const queryClient = new QueryClient()



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
      , {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      }, {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </ContextProvider>
  </QueryClientProvider>
)
