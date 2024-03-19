import React from 'react'
import AddNewButton from '../components/AddNewButton'

const BrandList = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Brands</p>
        <AddNewButton text="Add brand"/>
      </div>
    </>
  )
}

export default BrandList
