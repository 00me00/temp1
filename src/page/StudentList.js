import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove } from '../store/formSlice'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const StudentList = () => {
  const dispatch = useDispatch()
  const students =useSelector ((state) => state.form.students)
  return (
    <>
    <div className="content-wrapper">
    <section className="content">
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
<div className="card"></div>
    <div className="card-body">
<table className="table table-bordered">
<thead>
<tr>
<th style={{width: "10px"}}>SN</th>
<th>Student Name</th>
<th>Email</th>
<th>Address</th>
<th>Phone</th>
<th>Date Of Birth </th>
<th>Gender</th>
<th>Fee</th>
<th>Course</th>
<th>Action</th>
</tr>
</thead>
<tbody>
  {
    students && students.map ((student,index) => (
     // console.log(student)
     <tr key={index}>
      <td>{index+1}</td>
      <td>{student.fullname}</td>
      <td>{student.email}</td>
      <td>{student.address}</td>
      <td>{student.phone}</td>
      <td>{student.dob}</td>
      <td>{student.gender}</td>
      <td>{student.fee}</td>
      <td>{student.course}</td>
       <td> 
        <Link to={`/editForm/${student.id}`} className="btn btn-warning btn-sm">
       <i className="fa-regular fa-pen-to-square" onClick={() => (dispatch(edit(student)))}>Edit</i>  
                                    </Link>
                                    <button className="btn btn-danger btn-sm">
                                    <i className="fa-solid fa-trash" onClick={() => dispatch(remove(student))}> Delete</i>   
                                    </button> 
</td>
     </tr>
      
    ))
  }
</tbody>
</table>
</div>


{/* {PAGINATION} */}
 <div className="card-footer clearfix">
<ul className="pagination pagination-sm m-0 float-right">
<li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
<li className="page-item"><a className="page-link" href="#">1</a></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
</ul>
</div>

</div>
</div>
</div>
</section>
</div>
    </>
  )
}

export default StudentList



 /* <i className="fas fa-edit"></i> */
      /* <i className="fa-solid fa-trash"></i> */
      /* <i className="fa-regular fa-pen-to-square"></i> */
      /* </td> */ 
      /* <a className="btn btn-info btn-sm" href="#"> */
      /* <td className='btn'> */
/* <i className="fas fa-pencil-alt"> */
/* </i> */
/* Edit */
/* </a> */
/* <a className="btn btn-danger btn-sm" href="#"> */
/* <i className="fas fa-trash"> */
/* </i> */
/* Delete */
/* </a> */