import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:'todo',
    initialState: {
        todo:[]
    },
    reducers:{
       addTodo(state,action) {
        const newItem = action.payload;
        state.todo.push({
            id: newItem.id,
            task: newItem.item
        })
       }

    }
    
})

export const todoAction = todoSlice.actions;
export default todoSlice;
