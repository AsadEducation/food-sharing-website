import React from 'react';
import FeaturedFoods from './FeaturedFoods';
import Banner from './Banner';
import FoodStorageLocation from './FoodStorageLocation';
import FAQ from './FAQ';
import Temp from '../temp-page/Temp';

const Home = () => {
    return (
        <div>

            {/* <div className='mt-8 lg:mt-12'> <Banner /></div>

            <div className='mt-8 lg:mt-12'> <FeaturedFoods /></div>

            <div className='mt-8 lg:mt-12'><FoodStorageLocation /></div>

            <div className='mt-8 lg:mt-12'> <FAQ /></div> */}

            <Temp />

        </div>
    );
};

export default Home;