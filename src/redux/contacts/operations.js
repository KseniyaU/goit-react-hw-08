import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://65d85d83c96fbb24c1bb5b97.mockapi.io/contacts'
    );
    return response.data  
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const deleteContacts= createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    console.log(contactId);
    try {
        const response = await axios.delete(`https://65d85d83c96fbb24c1bb5b97.mockapi.io/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
}
)
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const response = await axios.post(`https://65d85d83c96fbb24c1bb5b97.mockapi.io/contacts/`, contact)
        return response.data;
     } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})