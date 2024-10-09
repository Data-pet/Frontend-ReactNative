import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./ahut/ahutReducer";
import RegisterSlice from "./reducers/RegisterSlice";
import userSlice from "./reducers/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: RegisterSlice,
    user: userSlice,
  },
});
