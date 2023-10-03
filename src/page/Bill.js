import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateStudentFee } from '../store/formSlice';
import { useNavigate } from 'react-router-dom';

const Bill = () => {
  const student = useSelector((state) => state.form.student);
  const courses = useSelector((state) => state.form.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentAmount, setPaymentAmount] = useState('');
  const [newDueBalance, setNewDueBalance] = useState('');

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


  const handlePayment = () => {
    const payment = parseFloat(paymentAmount);
    if (!isNaN(payment) && payment > 0) {
      const newFee = Number(student.fee) + Number(payment);
      console.log('Payment Amount:', payment);
      console.log('New Fee:', newFee);

      dispatch(updateStudentFee({ studentId: student.id, newFee }));

      const updatedDueBalance = calculateDue({ ...student, fee: newFee });
      console.log('Updated Due Balance:', updatedDueBalance);

      setNewDueBalance(updatedDueBalance);
      setPaymentAmount('');
    }
    navigate("/studentList");
  };


  const handlePaymentAmountChange = (e) => {
    setPaymentAmount(e.target.value);
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
                  <h6>Due Balance = {newDueBalance || calculateDue(student)}</h6>
                  {/* <h6>  Due Balance = {calculateDue(student)} </h6> */}
                  <div className="form-group">
                    <label htmlFor="paymentAmount">Payment Amount:</label>
                    <input className="form-control" type="number" id="paymentAmount" value={paymentAmount} onChange={handlePaymentAmountChange} />
                  </div>
                  <button className='btn btn-success btn-sm' onClick={handlePayment}>Pay</button>

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