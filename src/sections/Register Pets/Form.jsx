import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import {
  initialValuesRegisterPet,
  validationSchemaRegisterPet,
} from "../../schemas/RegisterPet";
import Animated, { FadeInDown } from "react-native-reanimated";
import axios from "../../api/axios.js";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Loading/LoadingSpinner.jsx";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { mascotasUsuario } from "../../api/pets";
import { setMascotas } from "../../redux/reducers/petsSlice";

const FormRegisterPet = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);
  const idUsuario = useSelector((state) => state.user.user.idUsuario);
  const dispatch = useDispatch();

  const obtenerMascotas = async () => {
    try {
      setLoading(true);
      const res = await mascotasUsuario(idUsuario);
      dispatch(setMascotas(res));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    // Prepara los datos a enviar al backend
    const dataToSend = {
      nombre: values.nombre,
      raza: values.raza,
      descripcion: values.descripcion,
      alergias: values.alergias,
      edad: Math.ceil(values.edad),
      peso: Math.ceil(values.peso),
      castrado: values.castrado,
      tipo: values.tipo,
      idUsuario: user.idUsuario,
    };

    try {
      setLoading(true);
      // Realiza la petición al backend usando axios
      const response = await axios.post("/mascotas", dataToSend);

      // Si la respuesta es exitosa
      if (response.status >= 200 && response.status < 300) {
        // Mostrar mensaje de éxito
        Toast.show({
          type: "success",
          text1: "¡Registro Exitoso!",
          text2: "Tu mascota ha sido creada correctamente 🎉",
        });
        await obtenerMascotas();
        navigation.navigate("Home");
      } else {
        // Mostrar mensaje de error si la respuesta no es exitosa
        Toast.show({
          type: "error",
          text1: "Error en el registro",
          text2: "Hubo un problema al crear tu mascota. Inténtalo de nuevo.",
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
      setSubmitting(false); // Evita que el formulario se resetee al finalizar
    }
  };

  return (
    <ScrollView
      className="w-full h-auto mb-4"
      contentContainerStyle={{ padding: 10 }}
    >
      {loading ? (
        <LoadingSpinner message="Creando mascota..." />
      ) : (
        <View className="w-full min-h-screen h-auto">
          <View className="w-full mt-6">
            <View className="-ml-1 mb-4">
              <Text>
                ¡Hola! Para poder registrar a tu amiguito, necesitamos que nos
                compartas algunos datos. ¡Gracias por ayudarnos!
              </Text>
            </View>
            <Formik
              className="w-full"
              initialValues={initialValuesRegisterPet}
              validationSchema={validationSchemaRegisterPet}
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
                <View className="w-full">
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
                    <Text className="w-full text-error mb-4">
                      {errors.nombre}
                    </Text>
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
                    <Text className="w-full text-error mb-4">
                      {errors.raza}
                    </Text>
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
                    <Text className=" font-bold mb-4 gap-1">Alergias</Text>
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
                      value={values.edad}
                    />
                  </Animated.View>
                  {touched.edad && errors.edad && (
                    <Text className="w-full text-error mb-4">
                      {errors.edad}
                    </Text>
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
                      value={values.peso}
                    />
                  </Animated.View>
                  {touched.peso && errors.peso && (
                    <Text className="w-full text-error mb-4">
                      {errors.peso}
                    </Text>
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
                          values.castrado === false
                            ? "bg-primary"
                            : "bg-gray-400"
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
                      ¿Que tipo de mascota vamos a registrar?
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
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default FormRegisterPet;
