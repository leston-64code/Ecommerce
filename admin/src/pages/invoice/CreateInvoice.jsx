import React, { useState } from 'react'
import PdfPreview from './invoicepdf/PdfPreview'

const CreateInvoice = () => {

  const [preview, setPreview] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => {setPreview(!preview)}} className='px-2 py-1 bg-blue-100 border-[1px] border-blue-500 hover:cursor-pointer rounded-md'>Preview</button>
        {
          preview ?
            <PdfPreview />
            : <div className='w-[800px] m-auto border-black border-[1px]'>
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

                  <input type="text" placeholder='Your Company' />
                  <input type="text" placeholder='Company Email' />
                  <input type="text" placeholder="Company's Address" />
                  <input type="text" placeholder="Company's Phone no" />
                  <input type="text" placeholder="Zip Code" />
                  <input type="text" placeholder='City' />
                  <input type="text" placeholder='Counry' />
                </div>
                <div className='w-[50%] bg-blue-10 flex flex-col'>
                  <div className="w-[100%] pl-8">
                    <p>BILLED TO</p>
                    <input type="text" className='w-[100%]' placeholder="Coustomer's Name" />
                    <input type="text" className='w-[100%]' placeholder="Coustomer's Phone no" />
                    <input type="text" className='w-[100%]' placeholder="Coustomer's Email" />
                    <input type="text" className='w-[100%]' placeholder="Coustomer's Address" />
                    <input type="text" className='w-[100%]' placeholder="Zip Code" />
                    <input type="text" className='w-[100%]' placeholder="City" />
                    <input type="text" className='w-[100%]' placeholder="Country" />
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
                <div className='flex flex-row w-[100%] px-8'>
                  <div className='w-[60%] py-3'>
                    <textarea className='w-[100%] border-[1px] border-gray-300 pl-3' name="" id="" cols="30" rows="3"></textarea>
                  </div>
                  <div className='w-[13.3%] py-3 text-center'>
                    <p>5</p>
                  </div>
                  <div className='w-[13.3%] py-3 text-center'>
                    <p>25</p>
                  </div>
                  <div className='w-[13.3%] py-3 text-center'>
                    <p>125</p>
                  </div>
                </div>
              </div>

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
        }

      </div>
    </>
  )
}

export default CreateInvoice
