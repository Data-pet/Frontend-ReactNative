import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    nombre: "",
    DNI: "",
    apellido: "",
    correo: "",
    tipoUsuario: "",
    telefono: "",
    idDireccion: "",
  },
};

const authSlice = createSlice({
  name: "steperStates",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Exporta las acciones creadas
export const { setUser } = authSlice.actions;

// Exporta el reducer
export default authSlice.reducer;
