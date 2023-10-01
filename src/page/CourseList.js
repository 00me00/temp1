import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { editCourse, removeCourse } from '../store/formSlice';

const CourseList = ({data,idx}) => {
  const dispatch = useDispatch();
  //const courses = useSelector ((state) => state.form.courses)
  return (
    <>
     {/* <li>
    {data.course}
    {data.price}
   </li>  */}

<tr>
      <th scope="row">{idx+1}</th>
      <td> {data.course}</td>
      <td>{data.price}</td>
      <td>
      <Link className="btn btn-warning btn-sm">
       <i className="fa-regular fa-pen-to-square"  onClick={() => (dispatch(editCourse(data)))}>Edit</i>  
                                    </Link>
                                    <button className="btn btn-danger btn-sm">
                                    <i className="fa-solid fa-trash"  onClick={() => (dispatch(removeCourse(data)))}> Delete</i>   
                                    </button> 


      </td>
    </tr>
    </>
  )
}

export default CourseList



