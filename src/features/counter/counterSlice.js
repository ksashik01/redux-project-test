import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    count:0,
};

// eslint-disable-next-line no-unused-vars
const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers:{},


});

export default counterSlice.reducer;