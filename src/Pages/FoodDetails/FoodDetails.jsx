import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const FoodDetails = () => {

    const axiosInstance = useAxiosSecure()

    const { data } = useLoaderData();

    const {
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expired_datetime,
        additional_notes,
        food_donator_name,
        food_donator_image,
        food_donator_email,
        food_status,
        _id
    } = data;

    // console.log(data);


    const handleRequestFood = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                //sending delete request to the server


                axiosInstance.delete(`/available-foods/${_id}`)
                    .then(res => {

                        // if successfully deleted the item .

                        console.log(res.data);
                    })
                    .catch(err=>{

                        console.log(err);
                    })
            }
        });

    }



    return (
        <div className="max-w-[95vw]  lg:flex justify-evenly items-center mx-auto p-6 bg-white ">
            {/* Food Image */}
            <img
                src={food_image}
                alt={food_name}
                className=" lg:w-[50%]  object-cover rounded-md"
            />

            {/* Food Details ---Text Content */}

            <div className='space-y-8'>
                <h1 className="text-4xl font-bold mt-6 text-green-500">{food_name}</h1>
                <p className="text-gray-600 mt-2">
                    <span className="font-semibold text-2xl">Status: </span>
                    <span
                        className={`font-medium ${food_status === 'available' ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {food_status}
                    </span>
                </p>

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Details</h2>
                    <ul className="list-disc list-inside mt-2 space-y-2  text-gray-600">
                        <li>
                            <span className="font-medium t">Quantity:</span> {food_quantity}
                        </li>
                        <li>
                            <span className="font-medium">Pickup Location:</span>{' '}
                            {pickup_location}
                        </li>
                        <li>
                            <span className="font-medium">Expires on:</span> {expired_datetime}
                        </li>
                        {additional_notes && (
                            <li>
                                <span className="font-medium">Additional Notes:</span>{' '}
                                {additional_notes}
                            </li>
                        )}
                    </ul>
                </div>

                {/* Donator Information */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Donator</h2>
                    <div className="flex items-center mt-4">
                        <img
                            src={food_donator_image}
                            alt={food_donator_name}
                            className="w-16 h-16 rounded-full object-cover border border-gray-200"
                        />
                        <div className="ml-4">
                            <p className="text-lg font-semibold">{food_donator_name}</p>
                            <p className="text-gray-600">{food_donator_email}</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6">
                    <button onClick={handleRequestFood} className="btn bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
                        Request Food
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;