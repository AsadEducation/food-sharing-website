import React from 'react';
import { Outlet } from 'react-router-dom';
import FeaturedFoods from './FeaturedFoods';
import Banner from './Banner';
import FoodStorageLocation from './FoodStorageLocation';

const Home = () => {
    return (
        <div>

            <div className='mt-12 lg:mt-24'> <Banner /></div>

            <div className='mt-12 lg:mt-24'> <FeaturedFoods /></div>

            {/* <div><FoodStorageLocation/></div> */}

        </div>
    );
};

export default Home;