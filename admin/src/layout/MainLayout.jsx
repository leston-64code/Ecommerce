import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { GoSidebarCollapse } from "react-icons/go";
import { data } from './sidebar/data';
import Sidebar from './sidebar/Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import { getConfiguredBaseUrl } from '../helpers/helper';
import axios from 'axios';
import MobileSideBar from './sidebar/MobileSideBar';

const MainLayout = () => {

  const navigate = useNavigate()

  const [openSideBar, setOpenSideBar] = useState(false)
  const [slideSideBar, setSlideSideBar] = useState(false)
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false)

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


  async function checkSessionStatus() {
    await axios.post(`${getConfiguredBaseUrl()}/api/user/checksession`, {}, { withCredentials: true }).then((res) => {
      return
    }).catch((error) => {
      if (error?.response?.data?.name === "SessionExpired") {
        toast.error("Your session has expired. Please login again")
        navigate("/")
      }
    })
  }

  useEffect(() => {
    checkSessionStatus()
  }, [])

  return (
    <>

      <div className='w-screen h-screen flex flex-row'>
        {
          slideSideBar === true ? null
            :
            <Sidebar />
        }
        {
          mobileSidebarVisible === true ? <MobileSideBar mobileSidebarVisible={mobileSidebarVisible} setMobileSidebarVisible={setMobileSidebarVisible} />
            : null

        }
        <div className='flex-1 h-full bg-mainBg'>
          <GoSidebarCollapse className=' md:ml-8 ml-4 mt-2 text-xl hover:cursor-pointer hover:shadow-md text-black absolute' title={slideSideBar ? "Show Sidebar" : "Collapse Sidebar"} onClick={() => {
            setSlideSideBar(!slideSideBar);
            setMobileSidebarVisible(!mobileSidebarVisible);
          }} />
          <Outlet />
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default MainLayout
