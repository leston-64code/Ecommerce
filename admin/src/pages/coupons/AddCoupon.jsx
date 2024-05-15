import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import useAxiosPost from '../../hooks/useAxiosPost';
import toast from 'react-hot-toast';
import DottedLoader from '../components/dotted loader/DottedLoader';
import { addCoupon } from '../../redux/reducers/coupons/couponSlice';

const AddCoupon = ({ setOpenModal }) => {

    const [name, setName] = useState("")
    const [discount, setDiscount] = useState("")
    const [noOfRedeems, setNoOfRedeems] = useState("")

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
    }

    const dispatch = useDispatch()

    const { loading, postData } = useAxiosPost();

    async function handleSubmit() {
        if (!name.trim()) {
            return toast.error("Coupon name field is required")
        }
        if (!discount) {
            return toast.error("Discount % field is required")
        }
        if (!noOfRedeems) {
            return toast.error("No of reedems field is required")
        }
        if (discount <= 0) {
            return toast.error("Discount should be atleast 1%")
        }
        if (noOfRedeems <= 0) {
            return toast.error("No of reedems cannot be zero")
        }
        if (name.trim().length === 1) {
            return toast.error("Coupon name should be minimum of 2 characters")
        }
        let response = await postData("/api/coupon/createcoupon", {
            name: name.trim(),
            discount,
            remaining_redeems: noOfRedeems,
            startDate: value.startDate,
            expiryDate: value.endDate
        });
        if (response?.success === true) {
            setName("")
            setDiscount("")
            setNoOfRedeems("")
            toast.success(response?.message)
            dispatch(addCoupon(response?.newCoupon))
            setOpenModal(false)
        }
    }

    if (loading) {
        return <DottedLoader />
    }

    return (
        <>
            <div className='md:w-[35%] w-[99%] shadow-lg px-6 py-4 border-gray-200 border-[1px] rounded-xl'>
                <div className='flex flex-row items-center justify-between mb-5'>
                    <p className='text-xl flex flex-row items-center'>Create Coupon</p>
                    <IoClose className='text-red-500 hover:cursor-pointer text-lg' onClick={() => { setOpenModal(false) }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium ">What is the title of coupon?</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 ">What percentage off should the discount be?</label>
                    <input type="number" id="discount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required value={discount} onChange={(e) => { setDiscount(e.target.value) }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="totalCopuns" className="block mb-2 text-sm font-medium text-gray-900 ">How many coupons you want to create?</label>
                    <input type="number" id="totalCopuns" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required value={noOfRedeems} onChange={(e) => { setNoOfRedeems(e.target.value) }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Enter the start date and the last date</label>
                    <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        showShortcuts={true}
                    />
                </div>
                <div className="mb-5">
                    <button className=" py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg" onClick={() => {
                        handleSubmit()
                    }}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddCoupon
