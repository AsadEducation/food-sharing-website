import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layout/RootLayout';
import ErrorPage from '../Pages/Error/ErrorPage';

const Routes = createBrowserRouter([
    {
        path:'',
        element:<RootLayout/>,
        children:[
            {

            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default Routes;