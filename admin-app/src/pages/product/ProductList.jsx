import React from 'react'
import TableHead from '../../components/table/TableHead'
import TableRow from '../../components/table/TableRow'

const ProductList = () => {
    return (
        <>
            {/* <div className='border-black border-2 overflow-x-auto relative w-[95%] md:w-[90%] h-[80%] m-auto mt-10'> */}
            <div className='overflow-x-auto relative w-[95%] md:w-[90%] h-[80%] m-auto mt-10'>
    
                {/* <div className='bg-blue-200 w-[100%] lg:w-full h-auto md:h-[10%] flex flex-wrap'> */}
                <div className='w-[100%] lg:w-full h-auto md:h-[10%] flex flex-wrap'>

                    <div className='relative w-[100%] lg:w-[40%] inline-block'>
                        <input type="text" placeholder='Search' className='pl-10 rounded-lg m-auto w-full lg:h-10 md:w-full '/>
                        <svg aria-hidden="true" class="top-3 left-3 absolute w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div className='w-[100%] md:w-[15%] text-center mt-2 md:ml-[10%] md:mt-0 bg-blue-700 py-2 rounded-lg text-white inline-block'>
                        <p className=''> <i class="fa-solid fa-filter"></i> Filter</p>
                    </div>

                
                </div>

                <div className='absolute md:w-[100%]'>
                <table className='md:w-[100%] w-[700px] text-left mt-1' >
           
                    <TableHead/>
                    <tbody className='border-[1px] border-gray-300'>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                        
                        
                    </tbody>
            </table>

                </div>
            </div>
           
        </>
    )
}

export default ProductList
