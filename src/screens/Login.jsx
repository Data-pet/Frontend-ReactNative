import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import LoginValidation from "../schemas/LoginValidation";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/logo.png";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";
import axios from "../api/axios.js";
import Toast from "react-native-toast-message";
import { setAuthenticated } from "../redux/ahut/ahutReducer.js";

export default function Login() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // Función para manejar el envío del formulario

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // Realiza la petición al backend usando axios
      const response = await axios.post("/login", {
        email: values.email,
        password: values.password,
      });
      if (response.status >= 200 && response.status < 300) {
        // Mostrar mensaje de éxito
        Toast.show({
          type: "success",
          text1: "¡Sesión Exitosa!",
          text2:
            "Has iniciado sesión correctamente, " +
            response.data.nombre +
            " 🎉",
        });
        dispatch(setUser(response.data));
        dispatch(setAuthenticated(true));
        // Redirigir a la pantalla de Home después de un breve retraso (3 segundos)
        setTimeout(() => {
          navigation.navigate("ProtectedRoutes");
        }, 500);
      } else {
        // Mostrar mensaje de error si la respuesta no es exitosa
        Toast.show({
          type: "error",
          text1: "Error en el inicio de sesión",
          text2:
            response.data.message ||
            "Hubo un problema al iniciar sesión. Inténtalo de nuevo.",
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
    <View className="w-full min-h-screen h-auto">
      {loading ? (
        <LoadingSpinner message="Iniciando sesión..." />
      ) : (
        <LinearGradient
          entering={FadeInDown.delay(1000).springify()}
          colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]} // Colores del gradiente
          start={{ x: 0, y: 0 }} // Inicio en la esquina superior izquierda
          end={{ x: 1, y: 1 }}
          className="h-full w-full items-center justify-center p-10"
        >
          {/* Título */}
          <View className="flex items-center w-full mb-10">
            <View className="w-full h-auto mb-10">
              <Image className="w-full h-40" source={logo} />
            </View>
            <View className="flex flex-row justify-between w-full">
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text className="text-white font-bold text-lg border-b border-secondary/25 pb-2">
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push("Register")}>
                <Text className="text-white font-bold text-lg">
                  Registrarse
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Formik
            initialValues={{ email: "brunobrodon75@gmail.com", password: "Qwertty" }}
            validationSchema={LoginValidation}
            onSubmit={handleSubmit}
            className="w-full"
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit: formikSubmit,
              values,
              errors,
              touched,
            }) => (
              <View className="items-center w-full">
                <Animated.View
                  entering={FadeInDown.delay(200).springify()}
                  className="w-full mb-2 border-b border-secondary/25 pb-2"
                >
                  <Text className="text-white mb-2 font-semibold">
                    Tú Correo electrónico <Text className="text-error">*</Text>
                  </Text>
                  <TextInput
                    className="text-white mb-2"
                    placeholder="correo@dominio.com"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </Animated.View>
                {touched.email && errors.email && (
                  <Text className="w-full text-error mb-4">{errors.email}</Text>
                )}
                <Animated.View
                  entering={FadeInDown.delay(400).springify()}
                  className="w-full mb-2 border-b border-secondary/25 pb-2"
                >
                  <Text className="text-white mb-2 font-semibold">
                    Tú Cotraseña <Text className="text-error">*</Text>
                  </Text>
                  <TextInput
                    className="text-white mb-2"
                    placeholder="Contraseña"
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                </Animated.View>
                {touched.password && errors.password && (
                  <Text className="w-full text-error mb-4">
                    {errors.password}
                  </Text>
                )}
                <Animated.View
                  entering={FadeInDown.delay(800).springify()}
                  className="w-full"
                >
                  <View
                    entering={FadeInDown.delay(600).springify()}
                    className="flex-row gap-2 my-5"
                  >
                    <Text className="text-white">
                      ¿Olvidaste tu contraseña?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.push("Signup")}>
                      <Text className="font-bold text-info"> Recuperar</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    className="w-full p-3 bg-secondary rounded-full mb-4"
                    onPress={formikSubmit}
                  >
                    <Text className="text-center font-bold text-white ">
                      Iniciar Sesión
                    </Text>
                  </TouchableOpacity>
                </Animated.View>

                <Animated.View
                  entering={FadeInDown.delay(800).springify()}
                  className="w-full flex flex-row gap-2 items-center"
                >
                  <Text className="text-white">¿No tienes una cuenta?</Text>
                  <TouchableOpacity onPress={() => navigation.push("Register")}>
                    <Text className="font-bold text-info">Registrarme</Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            )}
          </Formik>
        </LinearGradient>
      )}
    </View>
  );
}
