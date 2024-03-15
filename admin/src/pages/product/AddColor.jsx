import React from 'react'
import AddNewButton from '../components/AddNewButton'

const AddColor = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Add color</p>
        <AddNewButton text="Add color"/>
      </div>
    </>
  )
}

export default AddColor
