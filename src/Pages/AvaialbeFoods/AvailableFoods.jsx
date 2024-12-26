import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../../Shared Component/FoodCard";


const AvailableFoods = () => {

    const { data } = useLoaderData();
    // console.log(data);

    const [availableFoods, setAvailableFoods] = useState([]);

    const [changeLayout, setChangeLayout] = useState(true);

    useEffect(() => {

        setAvailableFoods(data);

    }, [])


    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Available Foods</h2>

            <button
                onClick={() => setChangeLayout(!changeLayout)}
                className="btn btn-primary mx-auto my-4 block"
            >
                Toggle Layout
            </button>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${changeLayout ? `lg:grid-cols-3` : `lg:grid-cols-2`}`}>
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