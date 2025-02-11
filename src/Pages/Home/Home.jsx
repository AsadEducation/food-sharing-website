import React from 'react';
import FeaturedFoods from './FeaturedFoods';
import Banner from './Banner';
import FoodStorageLocation from './FoodStorageLocation';
import FAQ from './FAQ';


const Home = () => {
    return (
        <div className='space-y-8 lg:space-y-12'>

            <div className='mt-32'> <Banner /></div>

            <div className=''> <FeaturedFoods /></div>

            <div className=''><FoodStorageLocation /></div>

            <div className=''> <FAQ /></div>


        </div>
    );
};

export default Home;