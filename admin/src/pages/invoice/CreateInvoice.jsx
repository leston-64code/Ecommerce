import React, { useState } from 'react'
import PdfPreview from './invoicepdf/PdfPreview'
import { GoPlusCircle } from "react-icons/go";
import { CiCircleMinus } from "react-icons/ci";

const CreateInvoice = ({ setOpenModal }) => {

  const [preview, setPreview] = useState(false)

  // Customer states
  const [cname, setCname] = useState("")
  const [cemail, setCemail] = useState("")
  const [cphoneno, setCphoneno] = useState("")
  const [caddress, setCaddress] = useState("")
  const [ccity, setCcity] = useState("")
  const [ccountry, setCcountry] = useState("")
  const [czip, setCzip] = useState("")

  // Company states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [zip, setZip] = useState("")

  return (
    <>
      <div>

        {
          preview ?
            <PdfPreview setPreview={setPreview} />
            :
            <>
              <div className='flex justify-end space-x-3'>
                <button onClick={() => { setPreview(!preview) }} className='px-2 py-1 bg-green-100 border-[1px] border-green-500 hover:cursor-pointer rounded-md text-xs font-semibold hover:shadow-md'>Preview</button>
                <button onClick={() => { setOpenModal(false) }} className='px-2 py-1 bg-red-100 border-[1px] border-red-500 hover:cursor-pointer rounded-md font-semibold text-xs hover:shadow-md'>Cancel</button>
              </div>
              <div className='w-[800px] m-auto border-black border-[1px]'>
                <p className='text-3xl font-semibold text-center mt-5'>INVOICE</p>
                <div className='p-8 flex flex-row w-[100%]'>

                  <div className='flex flex-col w-[50%]'>

                    <section className="container w-[60%] items-center">
                      <div className="py-6">
                        <div id="image-preview" className="max-w-sm p-2 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                          <input id="upload" type="file" className="hidden" accept="image/*" />
                          <label htmlFor="upload" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-700">Upload picture</h5>
                            <p className="font-normal text-xs text-gray-400 md:px-2">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                            <p className="font-normal text-xs text-gray-400 md:px-2">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                            <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                          </label>
                        </div>
                      </div>
                    </section>

                    <input value={cname} onChange={(e) => { setCname(e.target.value) }} className='px-2' type="text" placeholder='Your Company' />
                    <input value={cemail} onChange={(e) => { setCemail(e.target.value) }} className='px-2' type="text" placeholder='Company Email' />
                    <input value={caddress} onChange={(e) => { setCaddress(e.target.value) }} className='px-2' type="text" placeholder="Company's Address" />
                    <input value={cphoneno} onChange={(e) => { setCphoneno(e.target.value) }} className='px-2' type="number" placeholder="Company's Phone no" />
                    <input value={czip} onChange={(e) => { setCzip(e.target.value) }} className='px-2' type="text" placeholder="Zip Code" />
                    <input value={ccity} onChange={(e) => { setCcity(e.target.value) }} className='px-2' type="text" placeholder='City' />
                    <input value={ccountry} onChange={(e) => { setCcountry(e.target.value) }} className='px-2' type="text" placeholder='Country' />
                  </div>
                  <div className='w-[50%] bg-blue-10 flex flex-col'>
                    <div className="w-[100%] pl-8">
                      <p>BILLED TO</p>
                      <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className='w-[100%] px-3' placeholder="Coustomer's Name" />
                      <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" className='w-[100%] px-3' placeholder="Coustomer's Email" />
                      <input value={phoneno} onChange={(e) => { setPhoneno(e.target.value) }} type="number" className='w-[100%] px-3' placeholder="Coustomer's Phone no" />
                      <input value={address} onChange={(e) => { setAddress(e.target.value) }} type="text" className='w-[100%] px-3' placeholder="Coustomer's Address" />
                      <input value={zip} onChange={(e) => { setZip(e.target.value) }} type="text" className='w-[100%] px-3' placeholder="Zip Code" />
                      <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" className='w-[100%] px-3' placeholder="City" />
                      <input value={country} onChange={(e) => { setCountry(e.target.value) }} type="text" className='w-[100%] px-3' placeholder="Country" />
                    </div>
                    <div className="w-[100%] pl-8 flex flex-col mt-10 bg-blue-100 py-7">
                      <div className='flex flex-row my-1'>
                        <p>CreateInvoice no:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="text" />
                      </div>
                      <div className='flex flex-row my-1'>
                        <p>CreateInvoice Date:-&nbsp;&nbsp;</p>
                        <input type="text" />
                      </div>
                      <div className='flex flex-row my-1'>
                        <p>Due Date:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className='flex flex-row w-[100%] px-8'>
                  <div className='w-[60%] bg-blue-100 py-3 pl-3'>
                    <p>Product Name</p>
                  </div>
                  <div className='w-[13.3%] bg-blue-100 py-3 text-center'>
                    <p>Qty</p>
                  </div>
                  <div className='w-[13.3%] bg-blue-100 py-3 text-center'>
                    <p>Rate</p>
                  </div>
                  <div className='w-[13.3%] bg-blue-100 py-3 text-center'>
                    <p>Amount</p>
                  </div>
                </div>

                <div>
                  <div className='flex flex-row w-[100%] px-8 relative justify-center items-center'>
                    <div className='w-[60%] py-3'>
                      <textarea className='w-[100%] border-[1px] border-gray-300 pl-3' name="" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className='w-[13.3%] py-3 text-center h-full'>
                      <input type="number" className='w-[70%] border-[1px] border-black rounded-sm text-center' />
                    </div>
                    <div className='w-[13.3%] py-3 text-center h-full'>
                      <input type="number" className='w-[80%] border-[1px] border-black rounded-sm' />
                    </div>
                    <div className='w-[13.3%] py-3 text-center h-full'>
                      <input type="number" className='w-[90%] border-[1px] border-black rounded-sm' />
                    </div>
                  <CiCircleMinus className='absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600 text-2xl hover:cursor-pointer' />
                  </div>
                </div>
                

                <GoPlusCircle className='text-green-700 font-bold text-2xl  hover:cursor-pointer m-auto mb-4 ' />

                <div className='flex justify-end w-[100%] px-8'>
                  <div className='w-[50%] right-0 flex flex-col bg-blue-100 p-2 '>
                    <div className='flex flex-row py-3'>
                      <p>Sub Total:-</p>
                      <p>49999</p>
                    </div>
                    <div className='flex flex-row py-3'>
                      <p>Sale Tax:-</p>
                      <input type="text" placeholder='%' />
                    </div>
                    <div className='flex flex-row py-3'>
                      <p>Total:-</p>
                      <p>50000</p>
                    </div>
                  </div>
                </div>

                <div className='px-8 my-3'>
                  <p className='font-semibold'>Notes</p>
                  <p>It was great doing buissness with you.</p>
                </div>
                <div className='px-8 my-3'>
                  <p className='font-semibold'>Terms & Conditions</p>
                  <p>Please make the payment by due date.</p>
                </div>

              </div>
            </>
        }

      </div>
    </>
  )
}

export default CreateInvoice
