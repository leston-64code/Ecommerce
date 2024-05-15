import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const PdfPreview = ({ setPreview }) => {
  return (
    <>
      <div className='flex justify-end space-x-3'>
        <button onClick={() => { setPreview(false) }} className='px-2 py-1 bg-red-100 border-[1px] border-red-500 hover:cursor-pointer rounded-md text-xs font-semibold hover:shadow-md my-2'>Hide Preview</button>
      </div>
      <PDFViewer className='w-full h-screen'>
        <PdfDocument />
      </PDFViewer>
    </>
  )
}

export default PdfPreview
