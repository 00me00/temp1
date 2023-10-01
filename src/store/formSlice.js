const { createSlice } = require("@reduxjs/toolkit")


const formSlice = createSlice({
    name: 'form',
    initialState: {
        students: [
            {
                id: "4578945",
                fullname: 'My test name',
                email: 'test@mail.com',
                address: 'chabahil',
                phone: '12345568',
                dob: '2015/2/4',
                gender: 'male',
                fee: 4500,
                course: "123456"
            }
        ],
        courses: [
            { id: "123456", course: "Basic Package", price: 4500 },
            { id: "89456", course: "MernStack", price: 80000 }
        ],
        student: {},
        course: {}
    },

    reducers: {
        add(state, action) {
            //state.students.push(action.payload)
            const updatedList = state.students.concat(action.payload)
            return { ...state, students: updatedList }
        },
        addCourse(state, action) {
            // console.log(action.payload)
            const updatedList = state.courses.concat(action.payload)
            return { ...state, courses: updatedList }
        },
        remove(state, action) {
            const updatedList = state.students.filter(item => item.id !== action.payload.id)
            return { ...state, students: updatedList }
        },
        edit(state, action) {
            console.log(action.payload)
            const taskFilter = state.students.find(item => item.id === action.payload.id)
            return { ...state, student: taskFilter }
        },
        update(state, action) {
            // console.log(action.payload)   
            // const updatedList = state.students.map((current) => (current.id===action.payload.id?{id:action.payload.id,task:action.payload.task}:current))
            // return{...state,students:updatedList,student:{}}
            const updateStudentDate = action.payload;
            console.log(updateStudentDate)
            const updatedStudentlist = state.students.map((current) => current.id === action.payload.id ? updateStudentDate : current);
            return { ...state, students: updatedStudentlist, student: {} }
        },
        removeCourse(state, action) {
            const updateList = state.courses.filter(item => item.id !== action.payload.id)
            return { ...state, courses: updateList }
        },
        editCourse(state, action) {
            console.log(action.payload)
            const courseFilter = state.courses.find(item => item.id === action.payload.id)
            return { ...state, student: courseFilter }
        },
        updateCourse(state, action) {
            const updatedCourse = action.payload;
            console.log (updatedCourse)
             const updatedCourseList = state.courses.map((current) => current.id === action.payload.id ? updatedCourse : current );
            return { ...state, courses: updatedCourseList, course: {} };


            // console.log(action.payload)
            // const updatedList = state.courses.map((current) => (current.id === action.payload.id ? {
            //     id: action.payload.id,
            //     task: action.payload.task
            // } : current
            // ))
            // return { ...state, courses: updatedList, task: {} }
        }
    },
})
export const { add, addCourse, remove, edit, update, removeCourse, editCourse, updateCourse } = formSlice.actions;
export default formSlice.reducer