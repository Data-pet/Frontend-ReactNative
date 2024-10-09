import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/iniciarSesion.png";
import From1 from "../sections/Register/From1";
import { useSelector } from "react-redux";
import Form2 from "../sections/Register/Form2";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function Register() {
  const navigation = useNavigation();
  const currentStep = useSelector((state) => state.register.step);
  return (
    <View className="w-full min-h-screen h-auto relative">
      <LinearGradient
        colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]} // Colores del gradiente
        start={{ x: 0, y: 0 }} // Inicio en la esquina superior izquierda
        end={{ x: 1, y: 1 }}
        className="h-full w-full items-center justify-center p-10"
      >
        {/* Título */}
        {!currentStep > 0 && (
          <View className="flex items-center w-full mb-10">
            <View className="flex items-center w-full mb-10 -mt-12">
              <View className="flex justify-center items-center w-full h-auto mb-10">
                <Image style={{ width: "220px", height: "220px" }} source={logo} />
              </View>
              <Animated.View
                entering={FadeInDown.delay(200).springify()}
                className="w-full flex justify-center items-center mb-2"
              >
                <Text className="text-secondary uppercase text-2xl -mt-20 mb-2 font-semibold">
                  Data pet
                </Text>
                <Text className="text-white text-base mb-2 font-semibold">
                  El mejor amigo de tu amigo
                </Text>
              </Animated.View>
              
            </View>
            <View className="flex flex-row justify-between w-full">
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text className="text-white font-bold text-lg">
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push("Register")}>
                <Text className="text-white font-bold text-lg border-b border-secondary/25 pb-2">
                  Registrarse
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {/*Parte 1  */}
        {currentStep === 0 && <From1 />}
        {/*Parte 2  */}
        {currentStep === 1 && <Form2 />}
      </LinearGradient>
    </View>
  );
}
