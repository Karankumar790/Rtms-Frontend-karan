import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  checkAuthReducer,
  forgotAuthReducer,
  registerAuthReducer,
  oragnizationAuthReducer,
} from "./authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    registerAuth: registerAuthReducer,
    checkStatusAuth: checkAuthReducer,
    forgotAuth: forgotAuthReducer,
    oragnizationAuth: oragnizationAuthReducer,
  },
});

export const persistor = persistStore(store);
export default store;
