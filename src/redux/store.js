import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./ahut/ahutReducer";
import RegisterSlice from "./reducers/RegisterSlice";
import userSlice from "./reducers/userSlice";
import petsSlice from "./reducers/petsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: RegisterSlice,
    user: userSlice,
    pets: petsSlice,
  },
});
