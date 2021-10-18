// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const middleware = applyMiddleware(logger);

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, phonebookReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, composeWithDevTools());

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middlewares);
  },
  devTools: process.env.NODE_ENV === "development",
});

// export default { store, persistor };
