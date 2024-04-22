import React from 'react'
import AddNewButton from '../components/AddNewButton'
import useGetData from '../../hooks/useGetData'
import ContentLoader from '../contentLoader/ContentLoader'
import Error from '../components/Error'

const ColorList = () => {

  const { data, isLoading, error } = useGetData("colors", "/color/getallcolors")

  if (isLoading) {
    return <ContentLoader />
  }

  if (error) {
    return <Error />
  }

  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Colors</p>
        {/* <AddNewButton text="Add color" /> */}

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
              <tr className="bg-white border-b hover:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Apple MacBook Pro 17"
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <a href="" className="font-medium text-blue-600 hover:underline">Edit</a>
                </th>

              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default ColorList
