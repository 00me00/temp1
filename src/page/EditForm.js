import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/formSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditForm = () => {
    const task = useSelector((state) => state.form.student)
    const navigate = useNavigate()
  
    const dispatch = useDispatch();
    const Course = useSelector((state) => state.form.courses)
    const [studentForm, setStudentForm] = useState({
        id:task.id,
        fullname: task.fullname || '',
        email: task.email || '',
        address: task.address || '',
        phone: task.phone || '',
        dob: task.dob || '',
        gender: task.gender || '',
        fee: task.fee || '',
        course: task.course || '',
    })

// useEffect(() => {
 
//     if (Object.keys(task).length > 0 && task.id) {
      
//       setStudentForm({
        
//         id:task.id,
//         fullname: task.fullname || '',
//         email: task.email || '',
//         address: task.address || '',
//         phone: task.phone || '',
//         dob: task.dob || '',
//         gender: task.gender || '',
//         fee: task.fee || '',
//         course: task.course || '',
//       });
//     }
//   }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("ghjgh",studentForm)
                

    dispatch(update(studentForm))
    toast.success(`Updated ${studentForm.fullname}`);

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
    navigate('/studentList')

}

console.log("my",studentForm)

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
                                                <input type="text" className="form-control" id="fullname" placeholder="Enter Your Name" onChange={(e) => setStudentForm({ ...studentForm,fullname: e.target.value })} defaultValue={studentForm.fullname || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="example@gmail.com" onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })} defaultValue={studentForm.email || ""} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" id="address" placeholder="Address" onChange={(e) => setStudentForm({ ...studentForm, address: e.target.value })} defaultValue={studentForm.address || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="number" className="form-control" id="phone" placeholder="Phone Number" onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })} defaultValue={studentForm.phone || ""}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dob">Date Of Birth</label>
                                                <input type="text" className="form-control" id="dob" placeholder="D/M/Y" onChange={(e) => setStudentForm({ ...studentForm, dob: e.target.value })} defaultValue={studentForm.dob || ""} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="gender">Gender</label>
                                                <select className="form-control select2" style={{ width: "100%" }}
                                                value={studentForm.gender}
                                                    onChange={(e) => setStudentForm({ ...studentForm, gender: e.target.value })}>
                                                    <option value="">Choose</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fee">Fee</label>
                                                <input type="number" className="form-control" id="fee" placeholder="Fee" onChange={(e) => setStudentForm({ ...studentForm, fee: e.target.value })} defaultValue={studentForm.fee || ""} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="course">Course:</label>
                                                <select value={studentForm.course || ""} onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })}>
                                                    <option>Choose Any Course</option>
                                                    {
                                                       Course && Course.map((data) => (
                                                            <option key={data.id} value={data.id}>{data.course}</option>
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

export default EditForm;