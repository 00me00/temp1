import React from 'react'
import { useSelector } from 'react-redux';

const Bill = () => {
  const student = useSelector((state) => state.form.student);
  const courses = useSelector((state) => state.form.courses);

  const courseName = (courseId) => {
    const course = courses.find((item) => item.id === courseId);
    return course ? course.course : '';
}

const courseFee = (courseId) => {
  const course = courses.find((item) => item.id === courseId);
  return course ? course.price : 'Not Found';
}

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

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-15">
                <div className="card"> </div>
                 <div className="card-body">
                 <h4>{student.fullname}</h4>
                 <h6>{courseName(student.course)} = {courseFee(student.course)} </h6>
                 <h6>  Payment = {student.fee} </h6>
                 <h6>  Due Balance = {calculateDue(student)} </h6>
                   {/* <button className='btn btn-success btn-sm'>Payment</button> */}
                   
                </div> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Bill