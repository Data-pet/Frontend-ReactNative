import { Formik } from "formik";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { mascotasUsuario, updatePet } from "../../api/pets";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import * as Yup from "yup";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import { setMascotas } from "../../redux/reducers/petsSlice";
import { useDispatch } from "react-redux";

const FormEditPet = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const initialValuesEditPet = {
    nombre: item.nombre,
    raza: item.raza,
    descripcion: item.descripcion,
    alergias: item.salud.alergias,
    edad: item.salud.edad,
    peso: item.salud.peso,
    castrado: item.salud.castrado,
    tipo: item.tipo,
  };

  const validationSchemaEditPet = Yup.object().shape({
    nombre: Yup.string()
      .required("El nombre es obligatorio.")
      .min(2, "El nombre debe tener al menos 2 caracteres.")
      .max(50, "El nombre no puede exceder los 50 caracteres."),
    raza: Yup.string().required("La raza es obligatoria."),
    descripcion: Yup.string()
      .max(200, "La descripción no puede exceder los 200 caracteres.")
      .required("La descripción es obligatoria."),
    alergias: Yup.string().nullable(),
    edad: Yup.number()
      .nullable()
      .min(0, "La edad debe ser un número positivo.")
      .required("La edad es obligatoria."),
    peso: Yup.number()
      .nullable()
      .min(0, "El peso debe ser un número positivo.")
      .required("El peso es obligatorio."),
    castrado: Yup.boolean(),
  });

  const handleSubmit = async (values) => {
    const dataToSend = {
      nombre: values.nombre,
      raza: values.raza,
      descripcion: values.descripcion,
      alergias: values.alergias,
      edad: values.edad,
      peso: values.peso,
      castrado: values.castrado,
      tipo: values.tipo,
      idSalud: item.salud.idSalud,
    };
    try {
      setLoading(true);
      // Realiza la petición al backend usando axios
      const response = await updatePet(item.idMascota, dataToSend);

      // Si la respuesta es exitosa
      if (response.status >= 200 && response.status < 300) {
        // Mostrar mensaje de éxito
        Toast.show({
          type: "success",
          text1: "¡Edición Exitosa!",
          text2: "Tu mascota ha sido editada correctamente 🎉",
        });
        const res = await mascotasUsuario(item.idUsuario);
        dispatch(setMascotas(res));
        navigation.navigate("Home");
      } else {
        // Mostrar mensaje de error si la respuesta no es exitosa
        Toast.show({
          type: "error",
          text1: "Error en la edición",
          text2: "Hubo un problema al editar tu mascota. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      // Si ocurre un error durante la conexión o en la respuesta
      Toast.show({
        type: "error",
        text1: "Error de red",
        text2:
          error.response?.data?.message ||
          "No se pudo conectar al servidor. Inténtalo más tarde.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <View className="w-full h-auto p-4">
      {loading ? (
        <LoadingSpinner message="Editando mascota..." />
      ) : (
        <Formik
          className="w-full"
          initialValues={initialValuesEditPet}
          validationSchema={validationSchemaEditPet}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit: formikSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View
              className="w-full h-auto mb-4"
              contentContainerStyle={{ padding: 10 }}
            >
              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className="font-bold mb-4 gap-1">
                  Nombre <Text className="text-error">*</Text>
                </Text>
                <TextInput
                  keyboardType="text"
                  className=" mb-2"
                  placeholder="Nombre de tu amigo"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("nombre")}
                  onBlur={handleBlur("nombre")}
                  value={values.nombre}
                />
              </Animated.View>
              {touched.nombre && errors.nombre && (
                <Text className="w-full text-error mb-4">{errors.nombre}</Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">
                  Raza <Text className="text-error">*</Text>
                </Text>
                <TextInput
                  keyboardType="text"
                  className=" mb-2"
                  placeholder="Raza de tu mascota"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("raza")}
                  onBlur={handleBlur("raza")}
                  value={values.raza}
                />
              </Animated.View>
              {touched.raza && errors.raza && (
                <Text className="w-full text-error mb-4">{errors.raza}</Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">
                  Descripción <Text className="text-error">*</Text>
                </Text>
                <TextInput
                  keyboardType="text"
                  className=" mb-2"
                  placeholder="Una breve descripción de tu mascota"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("descripcion")}
                  onBlur={handleBlur("descripcion")}
                  value={values.descripcion}
                />
              </Animated.View>
              {touched.descripcion && errors.descripcion && (
                <Text className="w-full text-error mb-4">
                  {errors.descripcion}
                </Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">Alegrias</Text>
                <TextInput
                  keyboardType="text"
                  className=" mb-2"
                  placeholder="Indícanos si tu mascota tiene alguna alergia importante"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("alergias")}
                  onBlur={handleBlur("alergias")}
                  value={values.alergias}
                />
              </Animated.View>
              {touched.alergias && errors.alergias && (
                <Text className="w-full text-error mb-4">
                  {errors.alergias}
                </Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">
                  Edad <Text className="text-error">*</Text>
                </Text>
                <TextInput
                  keyboardType="numeric"
                  className=" mb-2"
                  placeholder="Indícanos la edad de tu mascota en años"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("edad")}
                  onBlur={handleBlur("edad")}
                  value={values.edad?.toString() || ""}
                />
              </Animated.View>
              {touched.edad && errors.edad && (
                <Text className="w-full text-error mb-4">{errors.edad}</Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">
                  Peso <Text className="text-error">*</Text>
                </Text>
                <TextInput
                  keyboardType="numeric"
                  className=" mb-2"
                  placeholder="Peso apróximado de tu mascota"
                  placeholderTextColor="#D3D3D3"
                  onChangeText={handleChange("peso")}
                  onBlur={handleBlur("peso")}
                  value={values.peso?.toString() || ""}
                />
              </Animated.View>
              {touched.peso && errors.peso && (
                <Text className="w-full text-error mb-4">{errors.peso}</Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">
                  ¿Está castrado? <Text className="text-error">*</Text>
                </Text>
                <View className="flex-row mb-2">
                  <Text
                    onPress={() => setFieldValue("castrado", true)}
                    className={`flex-1 text-center  px-4 py-2 rounded-full mx-1 text-white  ${
                      values.castrado ? "bg-primary" : "bg-gray-400"
                    }`}
                  >
                    Sí
                  </Text>
                  <Text
                    onPress={() => setFieldValue("castrado", false)}
                    className={`flex-1 text-center  px-4 py-2 rounded-full mx-1 text-white ${
                      values.castrado === false ? "bg-primary" : "bg-gray-400"
                    }`}
                  >
                    No
                  </Text>
                </View>
              </Animated.View>
              {touched.castrado && errors.castrado && (
                <Text className="w-full text-error mb-4">
                  {errors.castrado}
                </Text>
              )}

              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full mb-4 border-b border-primary/25 pb-2"
              >
                <Text className=" font-bold mb-4 gap-1">
                  ¿Quieres cambiar el tipo de mascota?
                </Text>
                <View className="flex-row flex-wrap mb-4">
                  {[
                    {
                      label: "Gato",
                      value: "Gato",
                      color: "bg-purple-400",
                    },

                    { label: "Pez", value: "Pez", color: "bg-blue-400" },
                    {
                      label: "Conejo",
                      value: "Conejo",
                      color: "bg-pink-400",
                    },
                    {
                      label: "Perro",
                      value: "Perro",
                      color: "bg-yellow-400",
                    },
                    { label: "Ave", value: "Ave", color: "bg-green-400" },
                    { label: "Otra", value: "Otra", color: "bg-gray-400" },
                  ].map((mascota) => (
                    <Text
                      key={mascota.value}
                      onPress={() => setFieldValue("tipo", mascota.value)}
                      className={`flex-row items-center justify-center px-4 py-2 rounded-full mx-1 my-1 ${
                        values.tipo === mascota.value
                          ? `${mascota.color} `
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {mascota.label}
                      {values.tipo === mascota.value && (
                        <Text className="ml-4 ">✓</Text>
                      )}
                    </Text>
                  ))}
                </View>
              </Animated.View>
              <TouchableOpacity
                className="w-full p-3 bg-[#E72D7C] rounded-full mb-4"
                onPress={formikSubmit}
              >
                <Text className="text-center font-bold text-white ">
                  Cargar mascota
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      )}
    </View>
  );
};

export default FormEditPet;
