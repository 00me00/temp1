const {createSlice} = require("@reduxjs/toolkit")


const formSlice=createSlice({
    name:'form',
    initialState:{
        students:[],
        course:[],
        student:{}
    },
    
    reducers:{
        add(state, action) {
            //state.students.push(action.payload)
             const updatedList=state.students.concat(action.payload)
             return {...state,students:updatedList}
        },
       addCourse(state, action) {
         // console.log(action.payload)
            const updatedList=state.course.concat(action.payload)
            return {...state,course:updatedList}
       },
       remove(state,action){
        const updatedList = state.students.filter(item=>item.id !== action.payload.id)
        return {...state,students:updatedList}
       },
       edit(state,action){
        console.log(action.payload)
        const taskFilter = state.students.find(item => item.id === action.payload.id)
        return {...state,student:taskFilter}
       },
       update(state,action){
        console.log(action.payload)   
        const updatedList = state.students.map((current) => (current.id===action.payload.id?{id:action.payload.id,task:action.payload.task}:current))
        return{...state,students:updatedList,student:{}}
       }
    },
})
export const { add, addCourse, remove, edit, update }= formSlice.actions;
export default formSlice.reducer