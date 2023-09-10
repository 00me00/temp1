import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Course, DashBoardv1, EditForm, StudentList, StudentRecord } from '../page'

const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<StudentRecord/>}/>
    <Route path='/studentList' element={<StudentList/>}/>
    <Route path='/course' element={<Course/>}/>
    <Route path='/index.html' element={<DashBoardv1/>}/>
    <Route path='/editForm/:id' element={<EditForm/>}/>
   </Routes>
   </>
  )
}

export default AllRoutes