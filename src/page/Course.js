import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse } from '../store/formSlice'
import CourseList from './CourseList'

const Course = () => {
  const [newCourse, setNewCourse] = useState('')
  const dispatch = useDispatch()
  const Course = useSelector((state) => state.form.course)

  const handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      id: Date.now(),
      course: newCourse
    }
    dispatch(addCourse(item))
    setNewCourse('')
  }
  return (
    <>
      <div className='content-wrapper'>
        <section className="content">
          <div className="container-fluid">
            <div className='course'>
              <h4 htmlFor="course">Add a Course:</h4>
              <form onSubmit={handleSubmit}>
                <input type="text" id="newCourseInput" placeholder="Enter new course name" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} />
                <button className="btn btn-success" type="submit" >Add</button>
                <br /></form>

            </div>
            <h5>List of courses:</h5>
            <ol>
              {
                Course.map((data) => (
                  <CourseList key={data.id} data={data} />
                ))
              }
            </ol>
          </div>
        </section>
      </div>
    </>
  )
}

export default Course
