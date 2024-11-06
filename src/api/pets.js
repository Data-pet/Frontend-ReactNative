import axios from "./axios.js";

export const mascotasUsuario = async (idUsuario) => {
  try {
    const response = await axios.get(`/mascotasUsuario/${idUsuario}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener mascotas.");
  }
};

export const getPet = async (id) => {
  try {
    const response = await axios.get(`/mascotas/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la mascota.");
  }
};

export const updatePet = async (id, data) => {
  try { 
    const response = await axios.put(`/mascotas/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar la mascota.");
  }
};
