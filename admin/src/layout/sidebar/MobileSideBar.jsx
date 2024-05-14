import React, { useEffect, useRef, useState } from 'react'
import { data } from './data'
import { useNavigate } from 'react-router-dom'

const MobileSideBar = ({ setMobileSidebarVisible, mobileSidebarVisible }) => {

    const navigate = useNavigate()
    const sidebarRef = useRef(null);

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleItemClick = (index, url) => {
        if (data[index]?.subOptions) {
            setExpandedIndex(expandedIndex === index ? null : index);
            if (url) {
                navigate(url);

            }
        } else {
            setMobileSidebarVisible(false)
            navigate(url);

        }
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setMobileSidebarVisible(false);
        }
    };

    useEffect(() => {
        if (mobileSidebarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileSidebarVisible]);

    // if (!mobileSidebarVisible) {
    //     return null
    // }

    return (
        <>
            <div ref={sidebarRef} className='absolute md:relative z-10 w-[70%] md:hidden h-full bg-sideBgColor text-white flex flex-col overflow-auto '>
                {
                    data?.map((ele, index) => {
                        return <React.Fragment key={index}>
                            <div className='py-4 pl-5 border-b-[1px] border-gray-600 flex flex-row justify-left items-center hover:cursor-pointer hover:bg-white text-sideTextColor hover:text-sideHoverTextColor' onClick={() => {
                                handleItemClick(index, ele.url)
                            }}>
                                {ele.icon}
                                <p className='ml-5'>{ele.name}</p>
                            </div>
                            {expandedIndex === index &&
                                ele?.subOptions?.map((subele, subindex) => (
                                    <div
                                        key={subindex}
                                        className='py-4 pl-14 border-b-[1px] border-gray-500 flex flex-row justify-left items-center hover:cursor-pointer hover:bg-white hover:text-sideHoverTextColor bg-sideSubBgColor'
                                        onClick={() => {
                                            setMobileSidebarVisible(false)
                                            navigate(subele.url);

                                        }
                                        }
                                    >
                                        {subele.icon}
                                        <p className='ml-5'>{subele.name}</p>
                                    </div>
                                ))}
                        </React.Fragment>
                    })
                }
            </div>
        </>
    )
}

export default MobileSideBar
