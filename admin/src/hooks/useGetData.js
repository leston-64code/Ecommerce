import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getConfiguredBaseUrl } from '../helpers/helper';


const useGetData = (key,requestUrl, fetchFunction, options = {}) => {
    // Use React Query's useQuery hook
    //   const { data, isLoading, error } = useQuery(key, fetchFunction, options);

    let base_url=getConfiguredBaseUrl()

    const { data, isLoading, error } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            await axios.get(`${base_url}${requestUrl}`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            })
        }
    });

    return { data, isLoading, error };
};

export default useGetData;