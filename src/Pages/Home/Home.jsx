import React from 'react';
import FeaturedFoods from './FeaturedFoods';
import Banner from './Banner';
import FoodStorageLocation from './FoodStorageLocation';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>

            <div className='mt-12 lg:mt-24'> <Banner /></div>

            <div className='mt-12 lg:mt-24'> <FeaturedFoods /></div>

            <div><FoodStorageLocation /></div>

            <div> <FAQ /></div>

        </div>
    );
};

export default Home;