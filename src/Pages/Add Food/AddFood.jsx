import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useAuth } from '../../Hooks/useAuth';
import FoodForm from '../../Shared Component/FoodForm';



const AddFood = () => {


    const axiosInstance = useAxiosSecure();

    const { user } = useAuth();

    // console.log(user);

    const food_donator_email = user.email;
    const food_donator_image = user.photoURL;

    const handleAddFoodSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const temp = formData.entries();

        const addedFood = Object.fromEntries(temp);

        addedFood.food_quantity = parseInt(addedFood.food_quantity)

        console.log(addedFood);

        //sending the object in the server to add to db

        axiosInstance.post('/add-food', addedFood)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'Your Food is Added SuccessFully',
                        }
                    )
                }
            })

    }

    return (
        <div className='w-[80%] lg:w-[50%] mx-auto'>

            <h2 className="text-4xl font-bold text-center text-gray-500">Add Foods </h2>

            <FoodForm
              onSubmit={handleAddFoodSubmit}
              defaultValues={{food_donator_email,food_donator_image}}
              isEditMode={false}
            />

        </div>
    );
};

export default AddFood;

