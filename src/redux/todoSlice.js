import { createSlice } from "@reduxjs/toolkit";


const initial=JSON.parse(localStorage.getItem("todoS")) || []
const todoSlice=createSlice({
    name:"todos",
    initialState:initial
    // [
        
        // { id: 1, title: 'todo1', completed: false },
		// { id: 2, title: 'todo2', completed: false },
		// { id: 3, title: 'todo3', completed: true }
    // ],
    ,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={id:Date.now(),
                title:action.payload.title,
                completed:false};
            
            
                state.unshift(newTodo);
                
                localStorage.setItem("todoS",JSON.stringify(state))
                
        },
        toogleComplete:(state,action)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload.id);
            state[index].completed=action.payload.completed;
      
            
        },
        deleteTodo:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload.id)
            
        }
    }
});

export const {addTodo,toogleComplete,deleteTodo}=todoSlice.actions; 
export default todoSlice.reducer;