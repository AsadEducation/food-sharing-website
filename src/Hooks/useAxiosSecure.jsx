import axios from "axios";


const axiosInstance = axios.create(
    {
        baseURL:'https://food-sharing-server-bay.vercel.app',
        withCredentials:true,
    }
)

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;