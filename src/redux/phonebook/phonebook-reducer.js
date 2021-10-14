import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../phonebook/phonebook-actions";

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, action) => {
    let isAdded = false;
    state.forEach((item) => {
      if (item.name === action.payload.name) {
        isAdded = true;
        return;
      }
    });
    if (isAdded) {
      alert(`${action.payload.name} is already in contacts`);
      return state;
    }
    return [...state, action.payload];
  },

  [actions.deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [actions.filterChange]: (_, action) => action.payload,

  [actions.filterBlur]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// ------------------------ без toolkit

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;

//     case types.FILTER_BLUR:
//       return payload;

//     default:
//       return state;
//   }
// };

// const itemsReducer = (state = initialItems, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       let isAdded = false;

//       state.forEach((item) => {
//         if (item.name === payload.name) {
//           isAdded = true;
//           return;
//         }
//       });

//       if (isAdded) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       }

//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       return state.filter((item) => item.id !== payload);

//     default:
//       return state;
//   }
// };
