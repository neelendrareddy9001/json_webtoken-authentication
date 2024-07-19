import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodo = createAsyncThunk("fetchTodo", async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    return data.json();
    
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        error: false,
    },
    extraReducers: (builder) => {}
})


export default todoSlice.reducer;