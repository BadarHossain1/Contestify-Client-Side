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
import DashboardLayout from './Dashboard/DashboardLayout';
import MyParticipatedContest from './Dashboard/User/MyParticipatedContest';
import MyWinningContest from './Dashboard/User/MyWinningContest';
import User from './Dashboard/User/User';
import AddContest from './Dashboard/Creator/AddContest';
import ContestSubmittedPage from './Dashboard/Creator/ContestSubmittedPage';
import MyCreatedContest from './Dashboard/Creator/MyCreatedContest';
import ManageUsers from './Dashboard/Admin/ManageUsers';
import ManageContest from './Dashboard/Admin/ManageContest';
import MyProfile from './Dashboard/User/MyProfile';
import AdminRoute from './Routes/AdminRoute';
import HostRoute from './Routes/HostRoute';
import PaymentPage from './Stripe/PaymentPage';

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
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/AllContest/id/${params.id}`)
      },
      {
        path: '/payment/:id',
        element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/AllContest/id/${params.id}`)
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
    element: <DashboardLayout></DashboardLayout>,
    children: [{
      path: 'participated',
      element: <MyParticipatedContest></MyParticipatedContest>
    },
    {
      path: 'winning',
      element: <MyWinningContest></MyWinningContest>

    },
    {
      path: 'user',
      element: <MyProfile></MyProfile>
    },
    
    {
      path: 'AddContest',
      element: <PrivateRoute><HostRoute><AddContest></AddContest></HostRoute></PrivateRoute>
    },
    {
      path: 'ContestSubmitted',
      element: <PrivateRoute><HostRoute><ContestSubmittedPage></ContestSubmittedPage></HostRoute></PrivateRoute>
    }
      , {
      path: 'ContestCreated',
      element: <PrivateRoute><HostRoute><MyCreatedContest></MyCreatedContest></HostRoute></PrivateRoute>
    },
      
    {
      path: 'ManageUsers',
      element: <AdminRoute><PrivateRoute><ManageUsers></ManageUsers></PrivateRoute></AdminRoute>
    },
    {
      path: 'ManageContest',
      element: <AdminRoute><PrivateRoute><ManageContest></ManageContest></PrivateRoute></AdminRoute>
    }
    


    ]
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
