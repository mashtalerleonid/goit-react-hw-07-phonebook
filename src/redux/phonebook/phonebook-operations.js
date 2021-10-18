// import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as phonebookAPI from "service/phonebook-api";

// export const fetchContacts = createAsyncThunk(
//   "phonebook/fetch",
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await phonebookAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const delContact = createAsyncThunk(
//   "phonebook/fetch/delete",
//   async (id, { rejectWithValue }) => {
//     try {
//       const contacts = await phonebookAPI.delContact(id);
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "phonebook/fetch/add",
//   async (contact, { rejectWithValue }) => {
//     try {
//       const contacts = await phonebookAPI.addContact(contact);
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
