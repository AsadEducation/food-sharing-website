import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
             <h2 className="text-3xl text-blue-500 text-center font-bold">Testing Root 3.2</h2>
             <Outlet/>      
        </div>
    );
};

export default RootLayout;