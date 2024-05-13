import { useState } from 'react';
import axios from 'axios';
import { getConfiguredBaseUrl } from '../helpers/helper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useAxiosPost = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data) => {
        setLoading(true);
        setError(null);

        try {

            const response = await axios.post(`${getConfiguredBaseUrl()}${url}`, data, { withCredentials: true });
            setLoading(false);
            return response.data;

        } catch (error) {
            setLoading(false);

            if (error?.code === "ERR_NETWORK") {
                return toast.error("Server not reachable at the moment")
            } else if (error?.code === "ERR_BAD_RESPONSE") {
                return toast.error("Request cannot be fullfilled at the moment")
            } else if (error?.response?.data?.name === "SessionExpired") {
                toast.error("Your session has expired. Please login again")
                setTimeout(() => {
                    navigate("/")
                }, 4000)
                return
            }
            toast.error(error?.response?.data?.message)

            // setError(error.message || 'An error occurred');
        }
    };

    return { loading, error, postData };
};

export default useAxiosPost;
