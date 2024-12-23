import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared Component/Navbar';
import Footer from '../Shared Component/Footer';

const RootLayout = () => {
    return (
        <div>
             <Navbar/>
             <Outlet/>  
             <Footer/>    
        </div>
    );
};

export default RootLayout;