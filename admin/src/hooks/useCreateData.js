import axios from 'axios';
import { useState } from 'react';
import { getConfiguredBaseUrl } from '../helpers/helper';

const useCreateData = () => {
    // State variables to manage loading and error states
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to create data
    const createData = async (requestData,requestUrl) => {
        setIsLoading(true); // Set loading state to true before making the request
        let base_url=getConfiguredBaseUrl()
        try {
            // Make a POST request using Axios
            const response = await axios.post(`${base_url}${requestUrl}`, requestData);
            setIsLoading(false); // Set loading state to false after request completion
            return response.data; // Assuming the response contains the created data
        } catch (error) {
            setIsLoading(false); // Set loading state to false in case of error
            setError(error?.response); // Set error state
            // throw new Error('Failed to create data: ' + error.message);
        }
    };

    return {
        createData,
        isLoading,
        error,
    };
};

export default useCreateData;
