import React, { useState } from 'react'
import { data } from './data'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()


    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleItemClick = (index, url) => {
        if (data[index]?.subOptions) {
            setExpandedIndex(expandedIndex === index ? null : index);
        } else {
            navigate(url);
        }
    };

    return (
        <>
            <div className='w-[17%] h-full bg-[#253245] text-white flex flex-col overflow-auto'>
                {
                    data?.map((ele, index) => {
                        return <>
                            <div key={index} className='py-4 pl-5 border-b-[1px] border-gray-600 flex flex-row justify-left items-center hover:cursor-pointer hover:bg-white hover:text-black' onClick={() => {
                                handleItemClick(index, ele.url)
                            }}>
                                {ele.icon}
                                <p className='ml-5'>{ele.name}</p>
                            </div>
                            {expandedIndex === index &&
                                ele?.subOptions?.map((subele, subindex) => (
                                    <div
                                        key={subindex}
                                        className='py-4 pl-14 border-b-[1px] border-gray-500 flex flex-row justify-left items-center hover:cursor-pointer hover:bg-white hover:text-black bg-[#374a67]'
                                        onClick={() => navigate(subele.url)}
                                    >
                                        {subele.icon}
                                        <p className='ml-5'>{subele.name}</p>
                                    </div>
                                ))}
                        </>
                    })
                }
            </div>
        </>
    )
}

export default Sidebar
