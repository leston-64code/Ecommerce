import { useDispatch, useSelector } from "react-redux";
import useAxiosGet from "../../hooks/useAxiosGet";
import ContentLoader from "../contentLoader/ContentLoader"
import React, { useEffect } from "react";
import { setCategories, setIsLoaded } from '../../redux/reducers/blogCategorySlice';


const BlogCategory = () => {

  const dispatch = useDispatch();
  const { categories, isLoaded } = useSelector(state => state.blogCategory);
  const { loading, getData } = useAxiosGet();

  async function fetchBlogCategories() {
    const response = await getData('/api/blogcategory/getallblogcategories');
    if (response?.success === true) {
      dispatch(setCategories(response.categories));
      dispatch(setIsLoaded(true));
    }
  }

  useEffect(() => {
    if (!isLoaded) {
      fetchBlogCategories()
    }
  }, [])

  if (loading) {
    return <ContentLoader />
  }

  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Blog Categories</p>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sl no
                </th>
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

export default BlogCategory
