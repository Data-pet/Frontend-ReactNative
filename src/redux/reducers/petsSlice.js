import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mascotas: [],
};

const mascotasSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setMascotas: (state, action) => {
      state.mascotas = action.payload;
    },
    addMascota: (state, action) => {
      state.mascotas.push(action.payload);
    },
    removeMascota: (state, action) => {
      state.mascotas = state.mascotas.filter(mascota => mascota.idMascota !== action.payload);
    },
    cleanMascotas: (state) => {
      state.mascotas = [];
    },
  },
});

// Exporta las acciones creadas
export const { setMascotas, addMascota, removeMascota, cleanMascotas } = mascotasSlice.actions;

// Exporta el reducer
export default mascotasSlice.reducer;
