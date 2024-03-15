import React from 'react'
import AddNewButton from '../components/AddNewButton'

const AddBrand = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Add Brand</p>
        <AddNewButton text="Add brand"/>
      </div>
    </>
  )
}

export default AddBrand
