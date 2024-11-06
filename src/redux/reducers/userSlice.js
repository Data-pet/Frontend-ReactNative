import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    idUsuario: 0,
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
  name: "user",
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
