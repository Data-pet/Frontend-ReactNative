import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Exporta las acciones creadas
export const { setAuthenticated } = authSlice.actions;

// Exporta el reducer
export default authSlice.reducer;
