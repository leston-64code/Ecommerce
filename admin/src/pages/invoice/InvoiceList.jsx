import React, { useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import CreateInvoice from './CreateInvoice'

const InvoiceList = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className='w-full h-full px-8 pt-8 overflow-auto'>
        <p className='uppercase font-semibold text-xl'>Invoices</p>
        <div className="relative">
          {
            openModal === false ?
              <div className="absolute top-0 right-10 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg" onClick={() => {
                setOpenModal(true)
              }}>
                Create Invoice
                <IoMdAddCircle />
              </div>
              :
              <CreateInvoice setOpenModal={setOpenModal} />
          }
        </div>
      </div>
    </>
  )
}

export default InvoiceList
