import React from 'react'

const AddColor = () => {
  return (
    <>
      <div className='w-full h-full md:px-8 px-4 py-8 flex flex-col'>
        <p className='uppercase font-semibold text-xl'>Add color</p>

        <div className='w-full flex-1 relative overflow-auto flex justify-center items-center'>
          <div className='md:w-[35%] w-[98%] shadow-lg px-6 py-4 border-gray-200 border-[1px] rounded-xl'>
            <div className='flex flex-row items-center justify-between mb-5'>
              <p className='text-2xl flex flex-row items-center'>Add Color</p>
            </div>
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 text-sm font-medium ">Enter color</label>
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

export default AddColor
