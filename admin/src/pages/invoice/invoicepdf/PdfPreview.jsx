import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const PdfPreview = () => {
  return (
    <>
      <PDFViewer className='w-full h-screen'>
        <PdfDocument/>
      </PDFViewer>
    </>
  )
}

export default PdfPreview
