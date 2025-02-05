import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared Component/Navbar';
import Footer from '../Shared Component/Footer';

const RootLayout = () => {
    return (
        <div>
             {/* <Navbar/> */}
            <div className=''><Outlet/></div>
            {/* <div className='mt-t lg:mt-12'> <Footer/></div> */}
        </div>
    );
};

export default RootLayout;