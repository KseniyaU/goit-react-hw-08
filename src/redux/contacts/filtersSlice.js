import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        inputValue: (state, action) =>{
             return action.payload
        },
    }
})
export const { inputValue, visibleUsers } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;