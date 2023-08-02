import React from 'react'

const TableHead = () => {
  return (
    <>
      <thead className='text-sm md:text-sm bg-gray-100 '>
        <tr className='space-x-5'>
          <th className=' md:font-medium py-4 md:pl-4 pl-1 pr-5'>SL NO</th>
          <th className=' md:font-medium '>PRODUCT NAME</th>
          <th className=' md:font-medium px-5'>CATEGORY</th>
          <th className=' md:font-medium px-5'>PRICE</th>
          <th className=' md:font-medium px-5'>STOCK</th>
          <th className=' md:font-medium px-5'>SOLD</th>
          <th className=' md:font-medium px-5'>ACTIONS</th>
        </tr>
      </thead>
    </>
  )
}

export default TableHead
