import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../Layout/RootLayout';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

const Routes = createBrowserRouter([
    {
        path:'',
        element:<RootLayout/>,

        children:[
            {
                path: '',
                element: <Navigate to="/home" replace={true} /> // Redirect root to '/home'
            },
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'auth',
                element:<AuthLayout/>,
                children:[
                    {
                        path:'login',
                        element:<Login/>
                    },
                    {
                        path:'register',
                        element:<Register/>
                    }
                ]
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default Routes;