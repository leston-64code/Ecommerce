import React from 'react'
import { HiServer } from "react-icons/hi2";

const Error = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <HiServer className='text-7xl text-[#174a94]'/>
                <p className='text-xl text-[#174a94]'>Something went wrong</p>
            </div>
        </>
    )
}

export default Error
