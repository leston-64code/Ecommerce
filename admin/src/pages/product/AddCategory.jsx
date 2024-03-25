import React from 'react'

const AddCategory = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8 flex flex-col'>
        <p className='uppercase font-semibold text-xl'>Add Category</p>

        <div className='relative w-full flex-1 overflow-auto'>
          <div className='w-[35%] shadow-lg px-6 py-4 border-gray-200 border-[1px] rounded-xl absolute left-1/3 top-1/4'>
            <div className='flex flex-row items-center justify-between mb-5'>
              <p className='text-2xl flex flex-row items-center'>Add Category</p>
            </div>
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 text-sm font-medium ">Enter category name</label>
              <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
            </div>
            <div className="mb-5">
              <button className=" py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg">
                Submit
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default AddCategory
