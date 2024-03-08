import { MdOutlineQueryStats } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { GrBlog } from "react-icons/gr";
import { FaReceipt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaShapes } from "react-icons/fa6";
import { FaCubesStacked } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import { TbCopyrightFilled } from "react-icons/tb";
import { PiCopyright } from "react-icons/pi";
import { ImBlog } from "react-icons/im";
import { LuFileStack } from "react-icons/lu";

export const sidebarData=[
    {
        id:1,
        name:"Dashboard",
        icon:<MdOutlineQueryStats />
    },
    {
        id:2,
        name:"Catalogue",
        icon:<PiHandbagSimpleFill />
    },
    {
        id:3,
        name:"Blog",
        icon:<GrBlog />
    },
    {
        id:4,
        name:"Orders",
        icon:<FaReceipt />
    },
    {
        id:5,
        name:"Customers",
        icon:<FaUsers />
    },
    {
        id:6,
        name:"Enquires",
        icon:<FaIdCard />
    },
    {
        id:7,
        name:"Mail",
        icon:<BiLogoTelegram />
    },
]

export const productSection=[
    {
        id:1,
        name:"Add Product",
        icon:<FaCartArrowDown/>,
        link:"/addproduct"
    },
    {
        id:2,
        name:"Product List",
        icon:<FaCartShopping/>,
        link:"/products"
    },
    {
        id:3,
        name:"Add Category",
        icon:<FaShapes />,
        link:"/addproductcat"
    },
    {
        id:4,
        name:"Category List",
        icon:<FaCubesStacked />,
        link:"/productcategories"
    },
    {
        id:5,
        name:"Add Brand",
        icon:<TbCopyrightFilled />,
        link:"/addbrand"
    },
    {
        id:6,
        name:"Brand List",
        icon:<PiCopyright />,
        link:"/brands"
    },
    {
        id:7,
        name:"Add Color",
        icon:<FaDroplet />,
        link:"/addcolor"
    },
    {
        id:8,
        name:"Color List",
        icon:<IoColorPalette />,
        link:"/colors"
    },
]

export const blogSection=[
    {
        id:1,
        name:"Add Blog",
        icon:<ImBlog />,
        link:"/addblog"
    },
    {
        id:2,
        name:"Blog List",
        icon:<LuFileStack />,
        link:"/blogs"
    },
    {
        id:3,
        name:"Add Blog Category",
        icon:<FaShapes />,
        link:"/addblogcat"
    },
    {
        id:4,
        name:"Blog Category List",
        icon:<FaCubesStacked />,
        link:"/blogcats"
    },
]

export const orderSection=[
    {
        id:1,
        name:"Dashboard",
        icon:"hello",
        link:"/orders"
    }
]

export const data=[
    {
        id:1,
        name:"Dashboard",
        icon:<MdOutlineQueryStats />
    },
    {
        id:2,
        name:"Catalogue",
        icon:<PiHandbagSimpleFill />,
        subOptions:[...productSection]
    },
    {
        id:3,
        name:"Blog",
        icon:<GrBlog />,
        subOptions:[...blogSection]
    },
    {
        id:4,
        name:"Orders",
        icon:<FaReceipt />,
        subOptions:[...orderSection]
    },
    {
        id:5,
        name:"Customers",
        icon:<FaUsers />
    },
    {
        id:6,
        name:"Enquires",
        icon:<FaIdCard />
    },
    {
        id:7,
        name:"Mail",
        icon:<BiLogoTelegram />
    },
]