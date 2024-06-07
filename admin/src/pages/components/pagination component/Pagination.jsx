import React from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { GoDotFill } from 'react-icons/go'

const Pagination = ({ onPageChange, pageStats }) => {

    if (!pageStats) {
        return
    }
    let { currentPage, previousPage, nextPage, totalRecords, totalPages } = pageStats

    function onNext() {
        if (currentPage === totalPages) {
            return
        }
        onPageChange(currentPage + 1)
    }

    function onPrevious() {
        if (currentPage === 1) {
            return
        }
        onPageChange(currentPage - 1)
    }


    if (totalPages <= 5 && totalPages > 0) {
        let arr=[]
        for(let i=0;i<totalPages;i++){
            arr.push(i+1)
        }
        return <>
            <p>Total : {totalRecords}</p>
            <div className='flex flex-row items-center space-x-3'>
                <button onClick={() => { onPrevious() }}><CiCircleChevLeft className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' /></button>
                {
                    arr.map((ele, index) => {
                      
                        return <button key={index} className={`border-black rounded-full hover:bg-gray-100 px-2 ${currentPage === parseInt(ele) ? "bg-gray-300" : null}`} onClick={() => {
                            if (typeof parseInt(ele) != 'number') {
                                return
                            }
                            onPageChange(parseInt(ele))
                        }}>{parseInt(ele)}</button>
                    })
                }
                <button onClick={() => { onNext() }}>  <CiCircleChevRight className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' /></button>
            </div>
        </>
    }

    if (totalPages > 5) {

        let nums = [1, 2, 3, 4, 5]
        let arr = [...nums, <GoDotFill />, totalPages]

        if (currentPage >= totalPages - 5) {
            let lastFiveStartingPageIndex = totalPages - 5
            let lastarr = [1, <GoDotFill />]

            for (let i = lastFiveStartingPageIndex + 1; i <= totalPages; i++) {
                lastarr.push(i)
            }
            return <div className='flex flex-row items-center space-x-1'>
                <CiCircleChevLeft className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' onClick={() => { onPrevious() }} />
                {
                    lastarr.map((ele, index) => {
                        return <button className={`border-black rounded-full hover:bg-gray-100 px-2 ${currentPage === ele ? "bg-gray-300" : null}`} onClick={() => {
                            if (typeof ele != 'number') {
                                return
                            }
                            onPageChange(ele)
                        }}>{ele}</button>
                    })
                }
                <CiCircleChevRight className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' onClick={() => { onNext() }} />
            </div>
        }


        if (currentPage < totalPages - 5 && currentPage > 5) {
            let arr = [1, <GoDotFill />, currentPage - 1, currentPage, currentPage + 1, <GoDotFill />, totalPages]
            return <div className='flex flex-row items-center space-x-1'>
                <CiCircleChevLeft className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' onClick={() => { onPrevious() }} />
                {
                    arr.map((ele, index) => {
                        return <button className={`border-black rounded-full hover:bg-gray-100 px-2 ${currentPage === ele ? "bg-gray-300" : null}`} onClick={() => {
                            if (typeof ele != 'number') {
                                return
                            }
                            onPageChange(ele)
                        }}>{ele}</button>
                    })
                }
                <CiCircleChevRight className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' onClick={() => { onNext() }} />
            </div>
        }


        return <div className='flex flex-row items-center space-x-1'>
            <CiCircleChevLeft className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' onClick={() => { onPrevious() }} />
            {
                arr.map((ele, index) => {
                    return <button className={`border-black rounded-full hover:bg-gray-100 px-2 ${currentPage === ele ? "bg-gray-300" : null}`} onClick={() => { onPageChange(index + 1) }}>{ele}</button>
                })
            }
            <CiCircleChevRight className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' onClick={() => { onNext() }} />
        </div>
    }

    return (
        <>
            {/* <div className='flex flex-row items-center space-x-3'>
                <CiCircleChevLeft className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' />
                <p className='border-black rounded-full border-[0.5px] px-2'>1</p>
                <GoDotFill />
                <GoDotFill />
                <p className='border-black rounded-full border-[0.5px] px-2'>4</p>
                <GoDotFill />
                <GoDotFill />
                <p className='border-black rounded-full border-[0.5px] px-2'>6</p>
                <CiCircleChevRight className='text-2xl hover:bg-gray-100 rounded-xl hover:cursor-pointer' />
            </div> */}
        </>
    )
}

export default Pagination
