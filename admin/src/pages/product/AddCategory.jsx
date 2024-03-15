import React from 'react'
import AddNewButton from '../components/AddNewButton'

const AddCategory = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Add Category</p>
          <AddNewButton text="Add product category"/>
      </div>
    </>
  )
}

export default AddCategory
