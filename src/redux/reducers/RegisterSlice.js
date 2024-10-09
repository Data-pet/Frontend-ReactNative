import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  nombre: "",
};

const authSlice = createSlice({
  name: "steperStates",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setName: (state, action) => {
      state.nombre = action.payload;
    },
    cleanValues: (state) => {
      state.nombre = "";
      state.step = 0;
    },
  },
});

// Exporta las acciones creadas
export const { setStep, setName, cleanValues } = authSlice.actions;

// Exporta el reducer
export default authSlice.reducer;
