
import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { CgPen, CgTrash } from "react-icons/cg";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";



const MyAddedFoods = () => {

    const { user } = useAuth();

    const axiosInstance = useAxiosSecure();
    const [myAddedFoods, setMyAddedFoods] = useState([]);

    useEffect(() => {

        axiosInstance.get(`/added-food/?email=${user?.email}`)
            .then(res => setMyAddedFoods(res.data))

    }, [])


    const handleTrashBox = (_id) => {
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

                //hitting delete end point in server

                axiosInstance.delete(`/my-added-food/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {

                            // console.log(res.data);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Food Name</th>
                        <th>Food Image</th>
                        <th>Quantity</th>
                        <th>Pickup Location</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myAddedFoods.map((myAddedFood, index) => {
                            {/* table  row / cell  */ }

                            const {
                                food_name,
                                food_image,
                                food_quantity,
                                pickup_location,
                                food_status,
                                _id
                            } = myAddedFood;

                            // console.log(myAddedFood);

                            return (
                                <tr key={index} className="hover">
                                    <th>{food_name}</th>
                                    <td>
                                        <img className="h-20 w-20 rounded-lg" src={food_image} alt="" />
                                    </td>
                                    <td>{food_quantity}</td>
                                    <td>{pickup_location}</td>
                                    <td>{food_status}</td>
                                    <td>
                                        <div className="flex gap-4 items-center">
                                            <NavLink state={myAddedFood} to={`/update-food`} > <CgPen className=" text-xl text-blue-400" />  </NavLink>
                                            <button onClick={() => handleTrashBox(_id)} > <CgTrash className="text-xl text-red-500" /></button>
                                        </div>
                                    </td>
                                </tr>

                            )

                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAddedFoods;