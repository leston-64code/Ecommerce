import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import BlogDashBoard from './pages/blog/BlogDashBoard'
import BlogList from './pages/blog/BlogList'
import BlogCategory from './pages/blog/BlogCategory'
import AddBlogCategory from './pages/blog/AddBlogCategory'
// import AddBlog from './pages/blog/AddBlog'
import AddProduct from './pages/product/AddProduct'
import AddBrand from './pages/product/AddBrand'
import AddCategory from './pages/product/AddCategory'
import AddColor from './pages/product/AddColor'
import ProductList from './pages/product/ProductList'
import BrandList from './pages/product/BrandList'
import CategoryList from './pages/product/CategoryList'
import ColorList from './pages/product/ColorList'
import Login from './auth/Login'
import CustomerDashboard from './pages/customer/CustomerDashboard'
import Customers from './pages/customer/Customers'
import OrdersDashboard from './pages/orders/OrdersDashboard'
import OrdersList from './pages/orders/OrdersList'
import Loader from './loader/Loader'

const InvoiceList = lazy(() => import('./pages/invoice/InvoiceList'));
const Coupons = lazy(() => import('./pages/coupons/Coupons'));
const AddBlog = lazy(() => import('./pages/blog/AddBlog'));

const App = () => {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path='/admin' element={<MainLayout />} >
            <Route index element={<Dashboard />} />

            <Route path='blog' element={<BlogDashBoard />} />
            <Route path='bloglist' element={<BlogList />} />
            {/* <Route path='addblog' element={<AddBlog />} /> */}
            <Route path="addblog" element={<Suspense fallback={<div className='w-full h-full flex justify-center items-center'><Loader /></div>}> <AddBlog /> </Suspense>} />
            <Route path='addblogcategory' element={<AddBlogCategory />} />
            <Route path='blogcatlist' element={<BlogCategory />} />

            <Route path='addproduct' element={<AddProduct />} />
            <Route path='addbrand' element={<AddBrand />} />
            <Route path='addcategory' element={<AddCategory />} />
            <Route path='addcolor' element={<AddColor />} />
            <Route path='products' element={<ProductList />} />
            <Route path='brands' element={<BrandList />} />
            <Route path='categories' element={<CategoryList />} />
            <Route path='colors' element={<ColorList />} />

            {/* <Route path='coupons' element={<Coupons />} /> */}
            <Route path="coupons" element={<Suspense fallback={<div className='w-full h-full flex justify-center items-center'><Loader /></div>}> <Coupons /> </Suspense>} />

            <Route path='ordersdashboard' element={<OrdersDashboard />} />
            <Route path='orders' element={<OrdersList />} />

            <Route path='customerdashboard' element={<CustomerDashboard />} />
            <Route path='customers' element={<Customers />} />

            {/* <Route path='invoices' element={<InvoiceList />} /> */}
            <Route path="invoices" element={<Suspense fallback={<div className='w-full h-full flex justify-center items-center'><Loader /></div>}> <InvoiceList /> </Suspense>} />

          </Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
