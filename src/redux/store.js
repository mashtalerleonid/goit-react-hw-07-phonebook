import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { filterReducer } from "./phonebook/phonebook-reducer";
import { phonebookApi } from "service/phonebook-api";

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
});

// ---------For Local storage----------

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

// export const store = configureStore({
//   reducer: {
//     contacts: phonebookReducer,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(middlewares);
//   },
//   devTools: process.env.NODE_ENV === "development",
// });

// export default { store, persistor };
