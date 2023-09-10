import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, update } from '../store/formSlice';

const EditForm = () => {
    const task = useSelector((state) => state.form.student)
    // const filterTask = useSelector(state => state.form.student)
    console.log(task)
    const dispatch = useDispatch();
    const Course = useSelector((state) => state.form.course)
    const [studentForm, setStudentForm] = useState({
        fullname: '',
        email: '',
        address: '',
        phone: '',
        dob: '',
        gender: '',
        fee: '',
        course: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

         console.log(studentForm)
                    

        dispatch(add(studentForm))

        setStudentForm({
            fullname: '',
            email: '',
            address: '',
            phone: '',
            dob: '',
            gender: '',
            fee: '',
            course: '',
        })
    }

    // useEffect(() => {
    //     if (filterTask){
    //         setStudentForm(filterTask.task)
    //     }
    // }, [filterTask])

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     if(filterTask.id){
    //         dispatch(update({ ...filterTask, task:studentForm }))
    //         setStudentForm('')
    //     }
    //     else {
    //         if (studentForm.trim() === '') return
    //         const intask = {
    //             id:Date.now(),
    //             task:studentForm
    //         }

    //         dispatch(add(intask))
    //         setStudentForm("")
    //     }
    // }

    return (
        <>
            <div className='content-wrapper'>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-10">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Student Form</h3>
                                    </div>


                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name</label>
                                                <input type="text" className="form-control" id="fullname" placeholder="Enter Your Name" onChange={(e) => setStudentForm({ ...studentForm, fullname: e.target.value })} defaultValue={task.fullname || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="example@gmail.com" onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })} defaultValue={task.email || ""} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="address" className="form-control" id="address" placeholder="Address" onChange={(e) => setStudentForm({ address: e.target.value })} defaultValue={task.address || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="number" className="form-control" id="phone" placeholder="Phone Number" onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })} defaultValue={task.phone || ""}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dob">Date Of Birth</label>
                                                <input type="dob" className="form-control" id="dob" placeholder="D/M/Y" onChange={(e) => setStudentForm({ dob: e.target.value })} defaultValue={task.dob || ""} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="gender">Gender</label>
                                                <select className="form-control select2" style={{ width: "100%" }}
                                                    onChange={(e) => setStudentForm({ ...studentForm, gender: e.target.value })} defaultValue={task.gender || ""}>
                                                    <option value="">Choose</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fee">Fee</label>
                                                <input type="number" className="form-control" id="fee" placeholder="Fee" onChange={(e) => setStudentForm({ ...studentForm, fee: e.target.value })} defaultValue={task.fee || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="course">Course:</label>
                                                <select onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })} defaultValue={task.course || ""}>
                                                    <option>Choose Any Course</option>
                                                    {
                                                        Course.map((data) => (
                                                            <option key={data.id}>{data.course}</option>
                                                        ))
                                                    }
                                                </select>

                                            </div>

                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-success">Update</button>

                                        </div>


                                    </form>
                                </div>
                            </div></div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default EditForm