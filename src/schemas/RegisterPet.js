import * as Yup from "yup";

export const initialValuesRegisterPet = {
    nombre: '',
    raza: '',
    descripcion: '',
    alergias: '',
    edad: null,
    peso: null,
    castrado: false,
}

export const validationSchemaRegisterPet = Yup.object().shape({
    nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .min(2, 'El nombre debe tener al menos 2 caracteres.')
        .max(50, 'El nombre no puede exceder los 50 caracteres.'),
    raza: Yup.string()
        .required('La raza es obligatoria.'),
    descripcion: Yup.string()
        .max(200, 'La descripción no puede exceder los 200 caracteres.'),
    alergias: Yup.string().nullable(),
    edad: Yup.number()
        .nullable()
        .min(0, 'La edad debe ser un número positivo.'),
    peso: Yup.number()
        .nullable()
        .min(0, 'El peso debe ser un número positivo.'),
    castrado: Yup.boolean(),
});