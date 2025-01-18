import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../contacts.json";

const initialState = {
  items: contacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      action.payload.id = nanoid();
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
