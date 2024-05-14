import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { IoClose } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";

const AddCoupon = ({ setOpenModal }) => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return (
        <>
            <div className='md:w-[35%] w-[99%] shadow-lg px-6 py-4 border-gray-200 border-[1px] rounded-xl'>
                <div className='flex flex-row items-center justify-between mb-5'>
                    <p className='text-2xl flex flex-row items-center'><MdLocalOffer className='inline-block text-sm' />Create Coupon</p>
                    <IoClose onClick={() => { setOpenModal(false) }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium ">What is the title of coupon?</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 ">What percentage off should the discount be?</label>
                    <input type="number" id="discount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required />
                </div>
                <div className="mb-5">
                    <label htmlFor="totalCopuns" className="block mb-2 text-sm font-medium text-gray-900 ">How many coupons you want to create?</label>
                    <input type="number" id="totalCopuns" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required />
                </div>
                <div className="mb-5">
                    <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 ">What percentage off should the discount be?</label>
                    <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        showShortcuts={true}
                    />
                </div>
                <div className="mb-5">
                    <button className=" py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg" onClick={() => {
                        // setOpenModal(true)
                    }}>
                        Submit
                        {/* <IoMdAddCircle /> */}
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddCoupon
