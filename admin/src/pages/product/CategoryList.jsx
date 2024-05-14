import React, { useEffect } from 'react'
import ContentLoader from '../contentLoader/ContentLoader'
import { setCategories, setIsLoaded } from '../../redux/reducers/product/productCategorySlice';
import useAxiosGet from '../../hooks/useAxiosGet';
import { useDispatch, useSelector } from 'react-redux';


const CategoryList = () => {

  const dispatch = useDispatch();
  const { categories, isLoaded } = useSelector(state => state.productCategory);
  const { loading, getData } = useAxiosGet();

  async function fetchProductCategories() {
    const response = await getData('/api/productcategory/getallprocategories');
    if (response?.success === true) {
      dispatch(setCategories(response?.categories));
      dispatch(setIsLoaded(true));
    }
  }

  useEffect(() => {
    if (!isLoaded) {
      fetchProductCategories()
    }
  }, [])

  if (loading) {
    return <ContentLoader />
  }

  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Categories</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                categories?.map((ele, index) => {
                  return <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {ele?.title?.toUpperCase()}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <a href="" className="font-medium text-blue-600 hover:underline">Edit</a>
                    </th>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CategoryList
