import React from 'react'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import MainLayout from './components/layout/MainLayout.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Dtwo from './pages/dashboard/Dtwo'
import CreateBlog from './pages/blogs/CreateBlog'
import ProductList from './pages/product/ProductList'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/admin' element={<MainLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path='test' element={<Dtwo/>} />
            <Route path='createblog' element={<CreateBlog/>} />
            <Route path='productlist' element={<ProductList/>} />
          </Route>
          <Route path='/' exact={true} element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
