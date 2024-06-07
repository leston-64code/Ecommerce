import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { getConfiguredBaseUrl } from '../helpers/helper';
import qs from "qs"

const useAxiosGet = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (url, params) => {

        setLoading(true);
        setError(null);

        const queryString = qs.stringify(params, { encode: true });

        try {
            const response = await axios.get(`${getConfiguredBaseUrl()}${url}?${queryString}`, { withCredentials: true });
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);

            if (error?.code === 'ERR_NETWORK') {
                return toast.error('Server not reachable at the moment');
            } else if (error?.code === 'ERR_BAD_RESPONSE') {
                return toast.error('Request cannot be fulfilled at the moment');
            } else if (error?.response?.data?.name === 'SessionExpired') {
                toast.error('Your session has expired. Please login again');
                return;
            } else {
                toast.error(error?.response?.data?.message);
            }
        }
    };

    return { loading, error, getData };
};

export default useAxiosGet;
