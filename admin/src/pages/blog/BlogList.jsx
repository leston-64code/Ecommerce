import React from 'react'

const BlogList = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8 overflow-auto'>
        <p className='uppercase font-semibold text-xl'>Blogs</p>
        <div className='w-full h-full flex flex-row flex-wrap space-x-4 space-y-14 justify-evenly'>

        {
          [...new Array(30)].map((ele,index)=>{
            return <div className='w-[15%] shadow-xl rounded-lg space-y-1 pb-3 hover:cursor-pointer' key={index}>
            <img className='rounded-lg' src="https://images.pexels.com/photos/17042340/pexels-photo-17042340/free-photo-of-brunette-with-flower-in-mouth.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className='text-xs font-semibold text-gray-500 px-2'>12-03-2024</p>
            <p className='px-2 font-semibold text-sm'>The technology is intended to combine virtual reality</p>
          </div>
          })
        }

        </div>
      </div>
    </>
  )
}

export default BlogList
