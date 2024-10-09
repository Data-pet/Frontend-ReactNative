import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react"; // No necesitas importar Component si no lo estás utilizando
import { Formik } from "formik";
import { setName, setStep } from "../../redux/reducers/RegisterSlice"; // Esta importación está en el código pero no se usa aquí
import { step1 } from "../../schemas/RegisterValidations";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";

export default function Form1() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(setStep(1));
    dispatch(setName(values.nombre));
  };

  return (
    <View className="w-full h-auto">
      <Formik
        initialValues={{
          nombre: useSelector((state) => state.register.nombre),
        }}
        validationSchema={step1}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit: formikSubmit,
          values,
          errors,
          touched,
        }) => (
          <View className="w-full">
            <Animated.View
              entering={FadeInDown.delay(200).springify()}
              className="w-full mb-2 border-b border-secondary/25 pb-2"
            >
              <Text className="text-white font-bold mb-4">
                ¿Cómo es tu nombre?
              </Text>
              <TextInput
                initialValues={values.nombre}
                className="text-white mb-2"
                placeholder="Ej. Jhon Doe"
                placeholderTextColor="#D3D3D3"
                onChangeText={handleChange("nombre")}
                onBlur={handleBlur("nombre")}
                value={values.nombre} // Este está bien, no necesitas initialValues aquí
              />
            </Animated.View>
            {touched.nombre && errors.nombre && (
              <Text className="w-full text-error mb-4">{errors.nombre}</Text>
            )}
            <TouchableOpacity
              className="w-full p-3 bg-secondary rounded-full my-4"
              onPress={formikSubmit}
            >
              <Text className="text-center font-bold text-white ">
                Siguiente
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
  );
}
