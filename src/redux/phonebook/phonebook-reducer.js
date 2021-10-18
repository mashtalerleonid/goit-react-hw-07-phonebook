import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../phonebook/phonebook-actions";

export const filterReducer = createReducer("", {
  [actions.filterChange]: (_, action) => action.payload,
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

// ---------------------------------

// const itemsReducer = createReducer([], {
//   [actions.addContact]: (state, action) => {
//     let isAdded = false;
//     state.forEach((item) => {
//       if (item.name === action.payload.name) {
//         isAdded = true;
//         return;
//       }
//     });
//     if (isAdded) {
//       alert(`${action.payload.name} is already in contacts`);
//       return state;
//     }
//     return [...state, action.payload];
//   },
//
//   [actions.deleteContact]: (state, action) =>
//     state.filter((item) => item.id !== action.payload),
//
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoadingReducer = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const errorReducer = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
//   isLoading: isLoadingReducer,
//   error: errorReducer,
// });
