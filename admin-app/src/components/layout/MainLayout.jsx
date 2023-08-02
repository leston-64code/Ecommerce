import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import {closeSideBar} from "../../utils/helperFunctions"

const MainLayout = () => {
    const navigate=useNavigate()


  return (
    <>
   
        <div class="h-screen relative">
    
    <Header/>

    
    <div class="flex flex-wrap flex-row w-screen h-screen">

        <div class="md:w-[261px]">


            <ul id="mobileLeftNavMenu" class="absolute z-50 left-0 md:top-14 md:block lg:block w-[60%] md:w-[16%] text-md md:text-[16px] border-[1px] border-gray-200 rounded-b-lg shadow-lg hidden font-bold md:font-medium h-full bg-white">

                <li class="border-b-[1px] border-b-gray py-2 md:py-3 active:bg-gray-200 cursor-pointer hover:md:bg-gray-200" onClick={()=>{
                        navigate("/admin")
                        closeSideBar()
                    }}>
                    <i className="fa-solid fa-gauge-high text-lg mx-4"></i>
                    Dashboard
                </li>

                <li id="accordion-parent" class="border-b-[1px] border-b-gray py-2 md:py-3 pb-1 cursor-pointer hover:md:bg-gray-200">
            
                    <button class="accordion-btn w-full text-start" onClick={()=>{
                        const accordionBtn = document.querySelector(".accordion-btn");
                        const accordionParent=document.getElementById("accordion-parent")
                        const accordionContent = accordionBtn.nextElementSibling;
                        accordionContent.classList.toggle("hidden");
                        accordionParent.classList.add("pb-0")
                    }}><i className="fa-solid fa-bag-shopping text-lg mx-4"></i>Catalogue</button>

                    <ul class="accordion-content hidden bg-white mt-2">

                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3" onClick={()=>{
                            navigate("/admin/test")
                            closeSideBar()
                        }}>
                            <i className="fa-solid fa-cart-arrow-down ml-10 mr-4"></i>
                            Add Product
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3" onClick={()=>{
                            navigate("/admin/productlist")
                            closeSideBar()
                        }}>
                            <i className="fa-solid fa-cart-shopping ml-10 mr-4"></i>
                            Product List
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-shapes ml-10 mr-4"></i>
                            Add Category
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-cubes-stacked ml-10 mr-4"></i>
                            Categroy List
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-copyright ml-10 mr-4"></i>
                            Add Brand
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-regular fa-copyright ml-10 mr-4"></i>
                            Brands List
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-droplet ml-10 mr-4"></i>
                            Add Color
                        </li>
                        <li class="border-b-[1px] border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-palette ml-10 mr-4"></i>
                            Color List
                        </li>
                        
                    </ul>
            
                </li>

                <li id="accordion-parent2" class="border-b-[1px] border-b-gray py-2 md:py-3 pb-1 cursor-pointer hover:md:bg-gray-200">
            
                    <button class="accordion-btn2 w-full text-start" onClick={()=>{
                        const accordionBtn = document.querySelector(".accordion-btn2");
                        const accordionParent=document.getElementById("accordion-parent2")
                        const accordionContent = accordionBtn.nextElementSibling;
                        accordionContent.classList.toggle("hidden");
                        accordionParent.classList.add("pb-0")
                    }}><i className="fa-solid fa-square-rss text-lg mx-4"></i>Blog</button>

                    <ul class="accordion-content hidden bg-white mt-2">

                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3 bg-white" onClick={()=>{
                            navigate("/admin/createblog")
                            closeSideBar()
                        }}>
                            <i className="fa-solid fa-cart-arrow-down ml-10 mr-4"></i>
                            Add Blog
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-cart-shopping ml-10 mr-4"></i>
                            Blog List
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-shapes ml-10 mr-4"></i>
                            Add Blog Category
                        </li>
                        <li class=" border-t-[1px] border-b-gray py-2 md:py-3">
                            <i className="fa-solid fa-cubes-stacked ml-10 mr-4"></i>
                            Blog Category List
                        </li>

                    </ul>
            
                </li>


                <li class="border-b-[1px] border-b-gray py-2 md:py-3 cursor-pointer hover:md:bg-gray-200">
                    <i className="fa-solid fa-receipt text-lg mx-4"></i>
                    Orders
                </li>
                <li class="border-b-[1px] border-b-gray py-2 md:py-3 cursor-pointer hover:md:bg-gray-200">
                    <i className="fa-solid fa-users text-lg mx-4"></i>
                    Customers
                </li>
                <li class="border-b-[1px] border-b-gray py-2 md:py-3 cursor-pointer hover:md:bg-gray-200">
                    <i className="fa-solid fa-address-card text-lg mx-4"></i>
                    Enquires
                </li>
                <li class="border-b-[1px] border-b-gray py-2 md:py-3 cursor-pointer hover:md:bg-gray-200">
                    <i className="fa-solid fa-paper-plane text-lg mx-4"></i>
                    Mail
                </li>

            </ul> 


        </div>

        <div class="bg-white flex-1">
            <Outlet/>
        </div>

    </div>
    
    </div>
    </>
  )
}

export default MainLayout
