

const FoodCard = ({ food }) => {
    // console.log(food);
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 max-w-sm hover:shadow-lg transition-shadow duration-300">
            <img
                src={food.food_image}
                alt={food.food_name}
                className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">{food.food_name}</h2>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Quantity:</span> {food.food_quantity}
            </p>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Pickup Location:</span> {food.pickup_location}
            </p>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Expired Date:</span> {food.expired_datetime}
            </p>
            <p
                className={`text-sm font-semibold mt-2 ${food.food_status === "available"
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
            >
                Status: {food.food_status}
            </p>
            <button className="btn bg-green-300">Details</button>
        </div>

    );
};

export default FoodCard;