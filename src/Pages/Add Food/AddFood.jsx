import React from 'react';

const AddFood = () => {


    const handleFormSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const temp = formData.entries();

        const addedFood = Object.fromEntries(temp);

        


    }

    return (
        <div className='w-[80%] lg:w-[50%] mx-auto'>

            <h2 className="text-4xl font-bold text-center text-gray-500">Add Foods </h2>

            <form onSubmit={handleFormSubmit} className="card-body">
                {/* Input field for Food Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" placeholder="Chicken Biriyani" className="input input-bordered" name="food_name" required />
                </div>

                {/* Input field for Food Image (URL) */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input type="url" placeholder="http://image.com/" className="input input-bordered" name="food_image" required />
                </div>

                {/* Input field for Food Quantity */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Quantity</span>
                    </label>
                    <input type="number" placeholder="1/2/3" className="input input-bordered" name="food_quantity" required />
                </div>

                {/* Input field for Pickup Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" placeholder="A.K SQUARE, DHAKA" className="input input-bordered" name="pickup_location" required />
                </div>

                {/* Input field for Expired Date */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expired Date</span>
                    </label>
                    <input type="date" placeholder="2024-12-08" className="input input-bordered" name="expired_datetime" required />
                </div>

                <div className='lg:flex items-center justify-between'>

                    {/* Textarea for Additional Notes about the food */}
                    <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <textarea placeholder="Spicey tasty description , please describe food a little bit " className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="additional_notes"></textarea>
                    </div>

                    {/* Dropdown menu for Food Status */}
                    <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text">Food Status</span>
                        </label>
                        <select defaultValue={'Available'} className="select select-bordered w-full max-w-xs" name="food_status">
                            <option disabled>Available</option>
                            <option value={'Not Available'}>Not Available</option>
                            <option value={'Requested'}>Requested</option>
                        </select>
                    </div>
                </div>

                {/* Input field for Donator Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Donator Name</span>
                    </label>
                    <input type="text" placeholder="Jhankar Mahbub" className="input input-bordered" name="food_donator_name" required />
                </div>

                {/* Input field for Donator Image (URL) */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Donator Image</span>
                    </label>
                    <input type="url" placeholder="http://image.com/" className="input input-bordered" name="food_donator_image" required />
                </div>

                {/* Input field for Donator Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Donator Email</span>
                    </label>
                    <input type="email" placeholder="bill@kill.com" className="input input-bordered" name="food_donator_email" required />
                </div>

                {/* Submit button to add food */}
                <div className="form-control mt-6">
                    <button className="btn bg-green-500">Add Food</button>
                </div>
            </form>



        </div>
    );
};

export default AddFood;