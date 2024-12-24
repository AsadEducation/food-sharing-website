import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../../Shared Component/FoodCard";


const AvailableFoods = () => {

    const { data } = useLoaderData();
    // console.log(data);

    const [availableFoods, setAvailableFoods] = useState([]);

    useEffect(() => {

        setAvailableFoods(data);

    }, [])


    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Available Foods</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    availableFoods.map((availableFood, index) => {


                        return <FoodCard key={index} food={availableFood} />

                    })
                }
            </div>
        </div>
    );
};

export default AvailableFoods;