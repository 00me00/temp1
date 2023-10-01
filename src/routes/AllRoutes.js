import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Bill, Course, DashBoardv1, EditForm, Payment, StudentList, StudentRecord } from '../page'

const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<StudentRecord/>}/>
    <Route path='/studentList' element={<StudentList/>}/>
    <Route path='/course' element={<Course/>}/>
    <Route path='/index.html' element={<DashBoardv1/>}/>
    <Route path='/editForm/:id' element={<EditForm/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/bill/:id' element={<Bill/>}/>
   </Routes>
   </>
  )
}

export default AllRoutes