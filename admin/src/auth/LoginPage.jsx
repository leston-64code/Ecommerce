import React, { useState } from 'react'
import ParticleContainer from './config/ParticleContainer'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import { getConfiguredBaseUrl } from '../helpers/helper'
import { useNavigate } from "react-router-dom"
import { RiLoader2Line } from "react-icons/ri";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Email field is required")
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return toast.error("Invalid email format");
    }

    if (!password.trim()) {
      return toast.error("Password field is required")
    }

    // Password validation regex
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password.trim())) {
      return toast.error("Password must contain at least one alphabet and one number, and be at least 6 characters long");
    }
    setLoading(true)
    await axios.post(`${getConfiguredBaseUrl()}/api/user/adminlogin`, { email, password }, { withCredentials: true }).then((res) => {
      if (res?.data?.success === true) {
        setLoading(false)
        toast.success("Logged in successfully")
        navigate("/admin")
      }
    }).catch((error) => {
      setLoading(false)
      if (error?.code === "ERR_NETWORK" || !error?.response?.data?.type) {
        return toast.error("Not able to login at the moment")
      }
      if (error?.response?.data?.type === "manual") {
        return toast.error(error?.response?.data?.message)
      }
    })
  };

  return (
    <>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 relative">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-1.5" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" value={password}
                  onChange={(e) => setPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-1.5" />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {
                  loading ? <RiLoader2Line className='text-2xl font-bold animate-spin' /> : "Sign in"
                }
              </button>
            </div>
          </form>

        </div>
      </div>
      <Toaster />

    </>
  )
}

const LoginPage = () => {
  return (
    <>
      <ParticleContainer />
      <Login />
    </>
  );
}
export default LoginPage
