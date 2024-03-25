import { useQuery } from '@tanstack/react-query'
import { axios } from 'axios'


const useGetData = (key,requestUrl, fetchFunction, options = {}) => {
    // Use React Query's useQuery hook
    //   const { data, isLoading, error } = useQuery(key, fetchFunction, options);

    const { data, isLoading, error } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            await axios.get(`${process.env.REACT_APP_BASE_URL}${requestUrl}`).then((res) => {
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