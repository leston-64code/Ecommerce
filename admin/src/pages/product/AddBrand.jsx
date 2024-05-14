import React, { useState } from 'react'
import DottedLoader from '../components/dotted loader/DottedLoader';
import useAxiosPost from '../../hooks/useAxiosPost';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addBrand } from '../../redux/reducers/brand/brandSlice';

const AddBrand = () => {

  const dispatch = useDispatch()

  const [brandName, setBrandName] = useState("")
  const { loading, postData } = useAxiosPost();

  async function handleSubmit() {
    if (!brandName.trim()) {
      return toast.error("Brand name field is required")
    }
    if (brandName.trim().length === 1) {
      return toast.error("Brand name should be minimum of 2 characters")
    }
    let response = await postData("/api/brand/createbrand", { title: brandName.trim() });
    if (response?.success === true) {
      setBrandName("")
      toast.success(response?.message)
      dispatch(addBrand(response?.brand))
    }
  }

  if (loading) {
    return <DottedLoader />
  }
  return (
    <>
      <div className='w-full h-full md:px-8 px-4 py-8 flex flex-col'>
        <p className='uppercase font-semibold text-xl'>Add Brand</p>

        <div className='w-full flex-1 relative overflow-auto flex justify-center items-center'>
          <div className='md:w-[35%] w-[98%] shadow-lg px-6 py-4 border-gray-200 border-[1px] rounded-xl'>
            <div className='flex flex-row items-center justify-between mb-5'>
              <p className='text-2xl flex flex-row items-center'>Add Brand</p>
            </div>
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 text-sm font-medium ">Enter brand name</label>
              <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required value={brandName} onChange={(e) => {
                setBrandName(e.target.value)
              }} />
            </div>
            <div className="mb-5">
              <button className=" py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg" onClick={() => {
                handleSubmit()
              }}>
                Submit
              </button>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default AddBrand
