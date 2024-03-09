import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { GoSidebarCollapse } from "react-icons/go";
import { data } from './sidebar/data';
import Sidebar from './sidebar/Sidebar';

const MainLayout = () => {

  const navigate = useNavigate()

  const [openSideBar, setOpenSideBar] = useState(false)
  const [slideSideBar,setSlideSideBar]=useState(false)

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {

      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSideBar(false)

      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>

      <div className='w-screen h-screen flex flex-row'>
        {
          slideSideBar===true ? null 
          : <Sidebar />
        }
        <div className='flex-1 h-full bg-mainBg'>
          <GoSidebarCollapse className=' ml-8 mt-2 text-xl hover:cursor-pointer hover:shadow-md text-black absolute' title={slideSideBar?"Show Sidebar":"Collapse Sidebar"} onClick={() => {
            setSlideSideBar(!slideSideBar)
          }} />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
