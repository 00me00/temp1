import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit, remove } from '../store/formSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.form.students);
  const courses = useSelector((state) => state.form.courses);

  const [search, setSearch] = useState('');

  const courseName = (courseId) => {
    const course = courses.find((item) => item.id === courseId);
    return course ? course.course : '';
  };

  const calculateDue = (student) => {
    const course = courses.find((item) => item.id === student.course);
    if (course) {
      const totalCoursePrice = course.price;
      const dueAmount = totalCoursePrice - student.fee;

      if (dueAmount < 0) {
        return 'Overpaid';
      } else if (dueAmount === 0) {
        return 'Paid';
      } else {
        return dueAmount;
      }
    }
    return '';
  };

  const filteredStudents = students.filter((student) =>
    student.fullname.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleEditClick = (student) => {
    dispatch(edit(student));
    toast.success(`Editing ${student.fullname}`);
  };

  const handleDeleteClick = (student) => {
    dispatch(remove(student));
    toast.error(`Deleted ${student.fullname}`);
  };

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-15">
                <div className="card"></div>
                <div className="card-body">
                  <div className="container-fluid">
                    <form className="d-flex mb-3" role="search">
                      <input className="form-control" type="search" placeholder="Search by Name" aria-label="Search" value={search} onChange={handleSearchInputChange} />
                      <button className="btn btn-outline-success" type="submit"> Search </button>
                    </form>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: '10px' }}>SN</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Fee</th>
                        <th>Due</th>
                        <th>Course</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{student.fullname}</td>
                          <td>{student.email}</td>
                          <td>{student.address}</td>
                          <td>{student.phone}</td>
                          <td>{student.dob}</td>
                          <td>{student.gender}</td>
                          <td>{student.fee}</td>
                          <td>{calculateDue(student)}</td>
                          <td>{courseName(student.course)}</td>
                          <td>
                            <Link to={`/editForm/${student.id}`} className="btn btn-warning btn-sm" onClick={() => handleEditClick(student)}>
                              <i className="fa-regular fa-pen-to-square">Edit</i>
                            </Link>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(student)}>
                              <i className="fa-solid fa-trash">Delete</i>
                            </button>

                            {/* <Link to={`/editForm/${student.id}`} className="btn btn-warning btn-sm">
                              <i className="fa-regular fa-pen-to-square" onClick={() => dispatch(edit(student))}>
                                Edit
                              </i>
                            </Link>
                            <button className="btn btn-danger btn-sm">
                              <i className="fa-solid fa-trash" onClick={() => dispatch(remove(student))} >
                                Delete
                              </i>
                            </button> */}

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* {PAGINATION} */}
                <div className="card-footer clearfix">
                  <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &laquo;
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentList;