import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared Component/Navbar';
import Footer from '../Shared Component/Footer';

const RootLayout = () => {
    return (
        <div className='space-y-20 lg:space-y-32'>
            <Navbar />
            <div className='lg:w-11/12 mx-auto'><Outlet /></div>
            <div> <Footer /></div>
        </div>
    );
};

export default RootLayout;