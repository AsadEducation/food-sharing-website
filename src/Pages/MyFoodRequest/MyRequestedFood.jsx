import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyRequestedFood = () => {

    const { data } = useLoaderData();

    const [requestedFoods, setRequestedFoods] = useState([]);

    useEffect(() => {

        setRequestedFoods(data);

    }, [])

    // console.log(requestedFoods);


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Expire Date</th>
                        <th>Donar Name</th>
                        <th>Pickup Location</th>
                        <th>Request Date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        requestedFoods.map((requestedFood, index) => {
                            {/* table  row / cell  */}

                            const {
                                pickup_location,
                                expired_datetime,
                                food_donator_name, 
                                food_requested_date                              
                            } = requestedFood;

                            console.log(requestedFood);

                            return (
                                <tr key={index} className="hover">
                                    <th>{expired_datetime}</th>
                                    <td>{food_donator_name}</td>
                                    <td>{pickup_location}</td>
                                    <td>{food_requested_date}</td>
                                </tr>

                            )

                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyRequestedFood;