import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,  deleteContacts, addContact  } from './operations'


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
    }
     ,
    
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => { 
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase( deleteContacts.pending, (state, action) => { 
                state.loading = true;
                state.error = false;
            })
            .addCase( deleteContacts.fulfilled, (state, action) => { 
                state.loading = false;
                state.items = state.items.filter(contact => contact.id !== action.payload.id);
            })
            .addCase( deleteContacts.rejected, (state, action) => { 
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, (state, action) => {
                state.loading = true;
                state.error = false;
             })
            .addCase(addContact.fulfilled, (state, action) => { 
                state.loading = false;
                state.items.push(action.payload) 
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
})



export  const contactsReducer = contactsSlice.reducer;

