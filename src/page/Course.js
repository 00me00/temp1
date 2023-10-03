import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, updateCourse, removeCourse } from '../store/formSlice';

const Course = () => {
  const [newCourse, setNewCourse] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.form.courses);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCourseId) {
      const updatedCourse = {
        id: selectedCourseId,
        course: newCourse,
        price: newPrice,
      };
      dispatch(updateCourse(updatedCourse));
    } else {
      const newCourseData = {
        id: Date.now().toString(),
        course: newCourse,
        price: newPrice,
      };
      dispatch(addCourse(newCourseData));
    }

    setNewCourse('');
    setNewPrice('');
    setSelectedCourseId(null);
  };

  const handleEdit = (course) => {
    setNewCourse(course.course);
    setNewPrice(course.price);
    setSelectedCourseId(course.id);
  };

  const handleDelete = (course) => {
    dispatch(removeCourse(course));
  };

  return (
    <>
      <div className='content-wrapper'>
        <section className="content">
          <div className="container-fluid">
            <div className='course'>
              <h4 htmlFor="course">Add/Edit Course:</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="newCourseInput"
                  placeholder="Enter new course name"
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Enter new course price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                {selectedCourseId ? (
                  <>
                    <button className="btn btn-success" type="submit">Update</button>
                  </>
                ) : (
                  <button className="btn btn-success" type="submit">Add</button>
                )}
                <br />
              </form>
            </div>
            <h5>List of courses:</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>

                {courses && courses.map((data, idx) => (
                  <tr key={data.id}>
                    <td>{idx + 1}</td>
                    <td>{data.course}</td>
                    <td>{data.price}</td>
                    <td>
                      <button className="btn btn-warning btn-sm" onClick={() => handleEdit(data)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(data)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Course;