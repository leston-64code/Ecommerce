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
import { BiSolidOffer } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";
import { PiUsersThreeFill } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LiaCashRegisterSolid } from "react-icons/lia";


export const productSection = [
    {
        id: 1,
        name: "Add Product",
        icon: <FaCartArrowDown className="sidebar-icons" />,
        url: "/admin/addproduct"
    },
    {
        id: 2,
        name: "Product List",
        icon: <FaCartShopping className="sidebar-icons" />,
        url: "/admin/products"
    },
    {
        id: 3,
        name: "Add Category",
        icon: <FaShapes className="sidebar-icons" />,
        url: "/admin/addcategory"
    },
    {
        id: 4,
        name: "Category List",
        icon: <FaCubesStacked className="sidebar-icons" />,
        url: "/admin/categories"
    },
    {
        id: 5,
        name: "Add Brand",
        icon: <TbCopyrightFilled className="sidebar-icons" />,
        url: "/admin/addbrand"
    },
    {
        id: 6,
        name: "Brand List",
        icon: <PiCopyright className="sidebar-icons" />,
        url: "/admin/brands"
    },
    {
        id: 7,
        name: "Add Color",
        icon: <FaDroplet className="sidebar-icons" />,
        url: "/admin/addcolor"
    },
    {
        id: 8,
        name: "Color List",
        icon: <IoColorPalette className="sidebar-icons" />,
        url: "/admin/colors"
    },
]

export const blogSection = [
    {
        id: 1,
        name: "Add Blog",
        icon: <ImBlog className="sidebar-icons" />,
        url: "/admin/addblog"
    },
    {
        id: 2,
        name: "Blog List",
        icon: <LuFileStack className="sidebar-icons" />,
        url: "/admin/bloglist"
    },
    {
        id: 3,
        name: "Add Blog Category",
        icon: <FaShapes className="sidebar-icons" />,
        url: "/admin/addblogcategory"
    },
    {
        id: 4,
        name: "Blog Category List",
        icon: <FaCubesStacked className="sidebar-icons" />,
        url: "/admin/blogcatlist"
    },
]

export const orderSection = [
    {
        id: 1,
        name: "Order List",
        icon: <LiaFileInvoiceDollarSolid className="sidebar-icons" />,
        url: "/admin/orders"
    }
]

export const customerSection = [
    {
        id: 1,
        name: "Customer List",
        icon: <PiUsersThreeFill className="sidebar-icons" />,
        url: "/admin/customers"
    }
]

export const data = [
    {
        id: 1,
        name: "Dashboard",
        icon: <MdOutlineQueryStats className="sidebar-icons" />,
        url: "/admin"
    },
    {
        id: 2,
        name: "Catalogue",
        icon: <PiHandbagSimpleFill className="sidebar-icons" />,
        // url:"/admin/dashboard",
        subOptions: [...productSection]
    },
    {
        id: 3,
        name: "Blog",
        icon: <GrBlog className="sidebar-icons" />,
        url: "/admin/blog",
        subOptions: [...blogSection]
    },
    {
        id: 4,
        name: "Orders",
        icon: <FaReceipt className="sidebar-icons" />,
        url: "/admin/ordersdashboard",
        subOptions: [...orderSection]
    },
    {
        id: 5,
        name: "Coupons",
        icon: <BiSolidOffer className="sidebar-icons" />,
        url: "/admin/coupons",
    },
    {
        id: 6,
        name: "Customers",
        icon: <FaUsers className="sidebar-icons" />,
        url: "/admin/customerdashboard",
        subOptions: [...customerSection]
    },
    {
        id: 7,
        name: "Enquires",
        icon: <FaIdCard className="sidebar-icons" />,
        // url:"/admin/dashboard"
    },
    {
        id: 8,
        name: "Mail",
        icon: <BiLogoTelegram className="sidebar-icons" />,
        // url:"/admin/dashboard"
    },
    {
        id: 9,
        name: "Kanban",
        icon: <BsKanban className="sidebar-icons" />,
        // url:"/admin/dashboard"
    },
    {
        id: 10,
        name: "Invoices",
        icon:<LiaCashRegisterSolid className="sidebar-icons"/>,
        url:"/admin/invoices"
    },
]