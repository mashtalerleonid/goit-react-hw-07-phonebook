import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const filterChange = createAction("phonebook/filterChange");

export const filterBlur = createAction("phonebook/filterBlur");

export const deleteContact = createAction("phonebook/deleteContact");

export const addContact = createAction(
  "phonebook/addContact",
  ({ name, number }) => ({
    payload: { id: uuidv4(), name, number },
  })
);

// ---------------------- без toolkit

// export const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: { id: uuidv4(), name, number },
// });

// export const deleteContact = (contactId) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: contactId,
// });

// export const filterChange = (text) => ({
//   type: actionTypes.FILTER_CHANGE,
//   payload: text,
// });

// export const filterBlur = (text) => ({
//   type: actionTypes.FILTER_BLUR,
//   payload: text,
// });
