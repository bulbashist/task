import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photos";
import filterReducer from "./filters";
import headerBckgReducer from "./header-background";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  photos: photoReducer,
  filters: filterReducer,
  headerBckg: headerBckgReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
