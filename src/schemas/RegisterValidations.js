import * as yup from "yup";

export const step1 = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
});

export const initialValuesRegister = {
  correo: "",
  apellido: "",
  DNI: "",
  contrasenia: "",
  telefono: "",
  confirmarContrasenia: "",
  barrio:"",
  calle:"",
  ciudad:"",
};

// export const step2 = yup.object().shape({
//   correo: yup.string().required("El correo es obligatorio"),
//   apellido: yup.string().required("El apellido es obligatorio"),
//   DNI: yup.string().required("El DNI es obligatorio"),
//   contrasenia: yup.string().required("La contraseña es obligatoria"),
//   confirmarContrasenia: yup
//     .string()
//     .required("La confirmación de la contraseña es obligatoria")
//     .oneOf([yup.ref("contrasenia"), null], "Las contraseñas no coinciden"),
//   telefono: yup.string().required("El telefono es obligatorio"),
//   barrio:yup.string().required("El barrio es obligatorio"),
//   calle:yup.string().required("La calle es obligatoria"),
//   ciudad:yup.string().required("La ciudad es obligatoria"),
// });
