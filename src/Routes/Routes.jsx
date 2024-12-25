import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../Layout/RootLayout';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import AvailableFoods from '../Pages/AvaialbeFoods/AvailableFoods';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import FoodDetails from '../Pages/FoodDetails/FoodDetails';
import Private from './Private';
import MyRequestedFood from '../Pages/MyFoodRequest/MyRequestedFood';
import AddFood from '../Pages/Add Food/AddFood';

const axiosInstance = useAxiosSecure();

const Routes = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,

        children: [
            {
                path: '',
                element: <Navigate to="/home" replace={true} /> // Redirect root to '/home'
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'available-foods',
                element: <AvailableFoods />,
                loader: () => axiosInstance.get('/available-foods'),
            },
            {
                path: 'food-details/:id',
                element: <Private><FoodDetails /></Private>,
                loader: ({ params }) => axiosInstance.get(`/food-details/${params.id}`)

            },
            {
                path: 'requested-food/:email',
                element: <Private><MyRequestedFood /></Private>,
                loader: ({ params }) => axiosInstance.get(`/requested-food/${params.email}`)

            },
            {
                path:'add-food',
                element:<Private><AddFood/></Private>
            },
            {
                path: 'auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default Routes;