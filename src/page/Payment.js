import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { edit } from '../store/formSlice';

const Payment = () => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.form.students);
    const courses = useSelector((state) => state.form.courses);
    const [search, setSearch] = useState('');

    const courseName = (courseId) => {
        const course = courses.find((item) => item.id === courseId);
        return course ? course.course : '';
    }

    const courseFee = (courseId) => {
        const course = courses.find((item) => item.id === courseId);
        return course ? course.price : 'Not Found';
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
                                    {search !== '' && (
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '10px' }}>SN</th>
                                                    <th>Student Name</th>
                                                    <th>Courses</th>
                                                    <th>Fee</th>
                                                    <th>Paid Amount</th>
                                                    <th>Due</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredStudents.map((student, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{student.fullname}</td>
                                                        <td>{courseName(student.course)}</td>
                                                        <td>{courseFee(student.course)}</td>
                                                        <td>{student.fee}</td>
                                                        <td>{calculateDue(student)}</td>
                                                        <td>{calculateDue(student) !== 'Paid' &&  calculateDue(student) !== 'Overpaid' && (
                                                                // <button className="btn btn-success btn-sm">Due</button> 
<Link to={`/bill/${student.id}`} className="btn btn-success btn-sm">
    
<i className="fa-regular fa-pen-to-square" onClick={() => dispatch(edit(student))}>
                                Due Pay
                              </i>
    
    {/* <i onClick={() => (())} >Due</i> */}
</Link> 
                                                                )}
                                                            {/* <Link to={`/editForm/${student.id}`} className="btn btn-warning btn-sm">
                              <i className="fa-regular fa-pen-to-square" onClick={() => dispatch(edit(student))}>
                                Edit
                              </i>
                            </Link> */}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Payment;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const Payment = () => {
//     const dispatch = useDispatch();
//     const students = useSelector((state) => state.form.students);
//     const courses = useSelector((state) => state.form.courses);
//     const [search, setSearch] = useState('');

//     const courseName = (courseId) => {
//         const course = courses.find((item) => item.id === courseId);
//         return course ? course.course : '';
//     }

//     const courseFee = (courseId) => {
//         const course = courses.find((item) => item.id === courseId);
//         return course ? course.price : 'Not Found';
//     };

//     const calculateDue = (student) => {
//         const course = courses.find((item) => item.id === student.course);
//         if (course) {
//             const totalCoursePrice = course.price;
//             const dueAmount = totalCoursePrice - student.fee;

//             if (dueAmount < 0) {
//                 return `Overpaid: ${-dueAmount}`;
//             } else if (dueAmount === 0) {
//                 return 'Paid';
//             } else {
//                 return dueAmount;
//             }
//         }
//         return '';
//     };

//     const shouldDisplayButton = (student) => {
//         const due = calculateDue(student);
//         return due !== 'Paid' && due !== 'Overpaid';
//     };

//     const filteredStudents = students.filter((student) =>
//         student.fullname.toLowerCase().includes(search.toLowerCase())
//     );

//     const handleSearchInputChange = (event) => {
//         setSearch(event.target.value);
//     };

//     return (
//         <>
//             <div className="content-wrapper">
//                 <section className="content">
//                     <div className="container-fluid">
//                         <div className="row">
//                             <div className="col-md-15">
//                                 <div className="card"></div>
//                                 <div className="card-body">
//                                     <div className="container-fluid">
//                                         <form className="d-flex mb-3" role="search">
//                                             <input className="form-control" type="search" placeholder="Search by Name" aria-label="Search" value={search} onChange={handleSearchInputChange} />
//                                             <button className="btn btn-outline-success" type="submit"> Search </button>
//                                         </form>
//                                     </div>
//                                     {search !== '' && (
//                                         <table className='table table-bordered'>
//                                             <thead>
//                                                 <tr>
//                                                     <th style={{ width: '10px' }}>SN</th>
//                                                     <th>Student Name</th>
//                                                     <th>Courses</th>
//                                                     <th>Fee</th>
//                                                     <th>Paid Amount</th>
//                                                     <th>Due</th>
//                                                     <th>Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {filteredStudents.map((student, index) => (
//                                                     <tr key={index}>
//                                                         <td>{index + 1}</td>
//                                                         <td>{student.fullname}</td>
//                                                         <td>{courseName(student.course)}</td>
//                                                         <td>{courseFee(student.course)}</td>
//                                                         <td>{student.fee}</td>
//                                                         <td>{calculateDue(student)}</td>
//                                                         <td>
//                                                             {shouldDisplayButton(student) ? (
//                                                                 <button className="btn btn-primary">Due</button>
//                                                             ) : (
//                                                                 calculateDue(student)
//                                                             )}
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// export default Payment;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const Payment = () => {
//     const dispatch = useDispatch();
//     const students = useSelector((state) => state.form.students);
//     const courses = useSelector((state) => state.form.courses);
//     const [search, setSearch] = useState('');

//     const courseName = (courseId) => {
//         const course = courses.find((item) => item.id === courseId);
//         return course ? course.course : '';
//     }

//     const courseFee = (courseId) => {
//         const course = courses.find((item) => item.id === courseId);
//         return course ? course.price : 'Not Found';
//     };
//     const calculateDue = (student) => {
//         const course = courses.find((item) => item.id === student.course);
//         if (course) {
//             const totalCoursePrice = course.price;
//             const dueAmount = totalCoursePrice - student.fee;

//             if (dueAmount < 0) {
//                 return 'Overpaid';
//             } else if (dueAmount === 0) {
//                 return 'Paid';
//             } else {
//                 return dueAmount;
//             }
//         }
//         return '';
//     };

//     const filteredStudents = students.filter((student) =>
//         student.fullname.toLowerCase().includes(search.toLowerCase())
//     );

//     const handleSearchInputChange = (event) => {
//         setSearch(event.target.value);
//     };

//     return (
//         <>
//             <div className="content-wrapper">
//                 <section className="content">
//                     <div className="container-fluid">
//                         <div className="row">
//                             <div className="col-md-15">
//                                 <div className="card"></div>
//                                 <div className="card-body">
//                                     <div className="container-fluid">
//                                         <form className="d-flex mb-3" role="search">
//                                             <input className="form-control" type="search" placeholder="Search by Name" aria-label="Search" value={search} onChange={handleSearchInputChange} />
//                                             <button className="btn btn-outline-success" type="submit"> Search </button>
//                                         </form>
//                                     </div>
//                                     <table className='table table-bordered'>
//                                         <thead>
//                                             <tr>
//                                                 <th style={{ width: '10px' }}>SN</th>
//                                                 <th>Student Name</th>
//                                                 <th>Courses</th>
//                                                 <th>Fee</th>
//                                                 <th>Paid Amount</th>
//                                                 <th>Due</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredStudents.map((student, index) => (
//                                                 <tr key={index}>
//                                                     <td>{index + 1}</td>
//                                                     <td>{student.fullname}</td>
//                                                     <td>{courseName(student.course)}</td>
//                                                     <td>{courseFee(student.course)}</td>
//                                                     <td>{student.fee}</td>
//                                                     <td>{calculateDue(student)}</td>
//                                                 </tr>
//                                             ))
//                                             }
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// export default Payment




// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const Payment = () => {
//     const dispatch = useDispatch();
//     const students = useSelector((state) => state.form.students);
//     const courses = useSelector((state) => state.form.courses);

//     const courseName = (courseId) => {
//         const course = courses.find ((item) => item.id === courseId);
//         return course ? course.course : '';
//     }

//     return (
//         <>
//             <div className="content-wrapper">
//                 <section className="content">
//                     <div className="container-fluid">
//                         <div className="row">
//                             <div className="col-md-15">
//                                 <div className="card"></div>
//                                 <div className="card-body">
//                                     <div className="container-fluid">
//                                         <form className="d-flex mb-3" role="search">
//                                             <input className="form-control" type="search" placeholder="Search by Name" aria-label="Search"
//                                             //value={search} onChange={handleSearchInputChange}
//                                             />
//                                             <button className="btn btn-outline-success" type="submit"> Search </button>
//                                         </form>
//                                     </div>
//                                     <table className='table table-bordered'>
//                                         <thead>
//                                             <tr>
//                                                 <th style={{ width: '10px' }}>SN</th>
//                                                 <th>Student Name</th>
//                                                 <th>Courses</th>
//                                                 <th>Fee</th>
//                                                 <th>Paid Amount</th>
//                                                 <th>Due</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {
//                                                 students && students.map((student, index) => (
//                                                     <tr key={index}>
//                                                         <td>{index + 1}</td>
//                                                         <td>{student.fullname}</td>
//                                                         <td>{courseName(student.course)}</td>
//                                                         <td>{student.paidAmount}</td>
//                                                         <td>{student.fee}</td>
//                                                         <td>{student.due}</td>

//                                                     </tr>
//                                                 ))
//                                             }

//                                         </tbody>

//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>

//         </>
//     )
// }

// export default Payment