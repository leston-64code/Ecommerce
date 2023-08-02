import React from 'react'

const TableRow = () => {
  return (
    <>
      <tr className='border-b-[1px] border-gray-200'>
        <td className='py-3 pl-1 pr-5'>1.</td>
        <td className='font-medium' >Apple watch Hello</td>
        <td className='px-5' >
          <p className='bg-blue-100 text-center text-sm text-semibold text-blue-600 rounded-xl md:w-1/2'>watches</p>
        </td>
        <td className='px-5' >&#8377; 98674</td>
        <td className='px-5' >25</td>
        <td className='px-5' >3</td>
        <td className=''>
          <span className='text-green-600 hover:underline hover:cursor-pointer md:ml-4 ml-4'>Edit</span>
          <span className='text-red-600 hover:underline hover:cursor-pointer md:ml-2 ml-1'>Delete</span>
        </td>
      </tr>
    </>
  )
}

export default TableRow
