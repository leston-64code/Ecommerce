import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <Router>
      <Routes>
      <Route path='/admin' element={<MainLayout />} >
              <Route index element={<Dashboard />} />
              {/* <Route path="appointment" element={<Appointment />} /> */}
          </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
