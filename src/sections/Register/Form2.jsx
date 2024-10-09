import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { step2 } from "../../schemas/RegisterValidations";
import { initialValuesRegister } from "../../schemas/RegisterValidations";
import axios from "../../api/axios.js";
import Toast from "react-native-toast-message";
import { cleanValues } from "../../redux/reducers/RegisterSlice";
import LoadingSpinner from "../../Loading/LoadingSpinner.jsx";
export default function Form2() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const nombre = useSelector((state) => state.register.nombre);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    // Prepara los datos a enviar al backend
    const dataToSend = {
      nombre,
      DNI: values.DNI,
      apellido: values.apellido,
      contrasena: values.contrasenia,
      correo: values.correo,
      tipoUsuario: "cuidador",
      telefono: values.telefono,
      calle: values.calle,
      ciudad: values.ciudad,
      barrio: values.barrio,
    };

    try {
      setLoading(true);
      // Realiza la petición al backend usando axios
      const response = await axios.post("/usuarios", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Si la respuesta es exitosa
      if (response.status >= 200 && response.status < 300) {
        // Mostrar mensaje de éxito
        Toast.show({
          type: "success",
          text1: "¡Registro Exitoso!",
          text2: "Tu cuenta ha sido creada correctamente 🎉",
        });

        // Redirigir a la pantalla de Login después de un breve retraso (3 segundos)
        setTimeout(() => {
          dispatch(cleanValues());
          navigation.navigate("Login");
        }, 3000);
      } else {
        // Mostrar mensaje de error si la respuesta no es exitosa
        Toast.show({
          type: "error",
          text1: "Error en el registro",
          text2:
            response.data.message ||
            "Hubo un problema al crear tu cuenta. Inténtalo de nuevo.",
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
    <ScrollView
      className="w-full h-auto"
      contentContainerStyle={{ padding: 20 }}
    >
      {loading ? (
        <View className="w-full min-h-screen"> 
          <LoadingSpinner message="Registrando..." />
        </View>
      ) : (
        <View>
          <Animated.View className="mb-10 w-full flex items-start justify-start gap-2 flex-col">
            <Text className="font-extrabold text-4xl text-secondary">
              {nombre},
            </Text>
            <Text className="text-white text-xl w-full">
              es un gusto tenerte por aqui. Continuemos con tu registro
            </Text>

            <Text className="text-gray-400">
              Todos los campos con <Text className="text-error">*</Text> son
              obligatorios
            </Text>
          </Animated.View>

          <Formik
            initialValues={initialValuesRegister}
            validationSchema={step2}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit: formikSubmit,
              values,
              errors,
              touched,
              setFieldValue, // Añadido para manejar campos personalizados
            }) => (
              <View className="w-full">
                {/* Apellido */}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Apellido <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      keyboardType="text"
                      className="text-white mb-2"
                      placeholder="Ej. Ramirez"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("apellido")}
                      onBlur={handleBlur("apellido")}
                      value={values.apellido}
                    />
                  </Animated.View>
                  {touched.apellido && errors.apellido && (
                    <Text className="w-full text-error mb-4">
                      {errors.apellido}
                    </Text>
                  )}
                </View>

                {/* DNI */}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      DNI <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      keyboardType="numeric"
                      className="text-white mb-2"
                      placeholder="Ej. 22 333 444"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("DNI")}
                      onBlur={handleBlur("DNI")}
                      value={values.DNI}
                    />
                  </Animated.View>
                  {touched.DNI && errors.DNI && (
                    <Text className="w-full text-error mb-4">{errors.DNI}</Text>
                  )}
                </View>

                {/* Teléfono */}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Teléfono <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      keyboardType="numeric"
                      className="text-white mb-2"
                      placeholder="Ej. 123456789"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("telefono")}
                      onBlur={handleBlur("telefono")}
                      value={values.telefono}
                    />
                  </Animated.View>
                  {touched.telefono && errors.telefono && (
                    <Text className="w-full text-error mb-4">
                      {errors.telefono}
                    </Text>
                  )}
                </View>

                {/*ciudad*/}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Ciudad <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      className="text-white mb-2"
                      placeholder="ciudad"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("ciudad")}
                      onBlur={handleBlur("ciudad")}
                      value={values.ciudad}
                    />
                  </Animated.View>
                  {touched.ciudad && errors.ciudad && (
                    <Text className="w-full text-error mb-4">
                      {errors.ciudad}
                    </Text>
                  )}
                </View>

                {/*barrio*/}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Barrio <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      className="text-white mb-2"
                      placeholder="barrio"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("barrio")}
                      onBlur={handleBlur("barrio")}
                      value={values.barrio}
                    />
                  </Animated.View>
                  {touched.barrio && errors.barrio && (
                    <Text className="w-full text-error mb-4">
                      {errors.barrio}
                    </Text>
                  )}
                </View>

                {/*Calle*/}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Calle <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      className="text-white mb-2"
                      placeholder="calle"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("calle")}
                      onBlur={handleBlur("calle")}
                      value={values.calle}
                    />
                  </Animated.View>
                  {touched.calle && errors.calle && (
                    <Text className="w-full text-error mb-4">
                      {errors.calle}
                    </Text>
                  )}
                </View>

                {/*Correo*/}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Correo <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      keyboardType="email-address"
                      className="text-white mb-2"
                      placeholder="correo@dominio.com"
                      placeholderTextColor="#D3D3D3"
                      onChangeText={handleChange("correo")}
                      onBlur={handleBlur("correo")}
                      value={values.correo}
                    />
                  </Animated.View>
                  {touched.correo && errors.correo && (
                    <Text className="w-full text-error mb-4">
                      {errors.correo}
                    </Text>
                  )}
                </View>
                {/*Contraseña*/}
                <View>
                  <Animated.View
                    entering={FadeInDown.delay(200).springify()}
                    className="w-full mb-2 border-b border-secondary/25 pb-2"
                  >
                    <Text className="text-white font-bold mb-4 gap-1">
                      Contraseña <Text className="text-error">*</Text>
                    </Text>
                    <TextInput
                      className="text-white mb-2"
                      placeholder="Contraseña"
                      placeholderTextColor="#D3D3D3"
                      secureTextEntry
                      onChangeText={handleChange("contrasenia")}
                      onBlur={handleBlur("contrasenia")}
                      value={values.contrasenia}
                    />
                  </Animated.View>
                  {touched.contrasenia && errors.contrasenia && (
                    <Text className="w-full text-error mb-4">
                      {errors.contrasenia}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  className="w-full p-3 bg-secondary rounded-full my-4"
                  onPress={formikSubmit}
                >
                  <Text className="text-center font-bold text-white">
                    Registrarme
                  </Text>
                </TouchableOpacity>

                <Animated.View
                  entering={FadeInDown.delay(800).springify()}
                  className="w-full flex flex-row gap-2 items-center"
                >
                  <Text className="text-white">¿Ya tienes una cuenta?</Text>
                  <TouchableOpacity onPress={() => navigation.push("Login")}>
                    <Text className="font-bold text-info">Iniciar Sesión</Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            )}
          </Formik>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  picker: {
    paddingVertical: 5,
    backgroundColor: "transparent",
    color: "white",
    borderWidth: 0, // Cambiado de 'border' a 'borderWidth'
  },
});
