import React from 'react'

const Header = () => {
  return (
    <>
        <nav class=" h-14 flex flex-wrap relative shadow-md">
        <div class="w-[50%] bg-purple-20">

            <div id="mobileLeftNavIcon" class="md:hidden lg:hidden block  h-[100%] flex flex-wrap items-center justify-start pl-4">
                <i class="fa-solid fa-bars text-lg" onClick={()=>{
                    const navLeftMenu=document.getElementById("mobileLeftNavMenu")
                    navLeftMenu.classList.toggle("hidden");
                }}></i>
                <div class=" h-[100%] ml-4 flex flex-wrap space-x-3 items-center">
                    <img src="https://flowbite.com/images/logo.svg" alt=""/>
                    <p class="font-semibold">Fastcart</p>
                </div>
            </div>

            <div class=" h-[100%] ml-4 flex flex-wrap space-x-3 items-center hidden md:flex lg:flex">
                <img src="https://flowbite.com/images/logo.svg" alt=""/>
                <p class="font-semibold">Fastcart</p>
            </div>


        </div>

        <div class="w-[50%] bg-red-20">
            <div id="mobileNavIcon" class="md:hidden lg:hidden  h-[100%] flex flex-wrap items-center justify-end pr-8">
                <i class="fa-solid fa-bars text-lg" onClick={()=>{
                    const navMenu=document.getElementById("mobileNavMenu")
                    navMenu.classList.toggle("hidden");
                }}></i>
            </div>

            <ul class=" hidden md:flex lg:flex flex justify-end space-x-3 md:space-x-8 lg:space-x-14 md:pr-2 lg:pr-8 h-[100%] items-center">
                <li class="">Home</li>
                <li class="">About</li>
                <li class="inline">Contact Us</li>
            </ul>


            <ul id="mobileNavMenu" class="absolute right-0 md:hidden lg:hidden w-[40%] text-center text-sm border-[1px] border-gray-200 rounded-b-lg shadow-lg hidden font-semibold">
                <li class="border-b-[1px] border-b-gray py-2">Home</li>
                <li class="border-b-[1px] border-b-gray py-2">About</li>
                <li class="border-b-[1px] border-b-gray py-2">Contact Us</li>
                <li class="border-b-[1px] border-b-gray py-2">Blog</li>
                <li class=" py-2">Logout</li>
            </ul>


        </div>

    </nav>
    </>
  )
}

export default Header
