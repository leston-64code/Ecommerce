import React from 'react'

const OrdersDashboard = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Orders Dashboard</p>
        <div className='flex md:flex-row flex-col h-3/4 md:h-56 bg-red-20 justify-around items-center'>
          <div className='border-[1px] bg-blue-50 rounded-md border-blue-700  w-[90%] md:w-[20%] h-[60%] mt-5 shadow-md hover:cursor-pointer'></div>
          <div className='border-[1px] bg-orange-50 rounded-md border-orange-700  w-[90%] md:w-[20%] h-[60%] mt-5 shadow-md hover:cursor-pointer'></div>
          <div className='border-[1px] bg-green-50 rounded-md border-green-700  w-[90%] md:w-[20%] h-[60%] mt-5 shadow-md hover:cursor-pointer'></div>
          <div className='border-[1px] bg-red-50 rounded-md border-red-300  w-[90%] md:w-[20%] h-[60%] mt-5 shadow-md hover:cursor-pointer'></div>
        </div>
      </div>
    </>
  )
}

export default OrdersDashboard
