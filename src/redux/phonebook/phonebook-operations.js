import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phonebookAPI from "service/phonebook-api";
import * as actions from "./phonebook-actions";
import { v4 as uuidv4 } from "uuid";

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(actions.fetchContactsRequest());
//   try {
//     const contacts = await phonebookAPI.fetchContacts();
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "phonebook/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  "phonebook/fetch/delete",
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.delContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "phonebook/fetch/add",
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.addContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
