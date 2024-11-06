import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/dataPet.png";
import From1 from "../sections/Register/From1";
import { useSelector } from "react-redux";
import Form2 from "../sections/Register/Form2";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function Register() {
  const navigation = useNavigation();
  const currentStep = useSelector((state) => state.register.step);
  return (
    <View className="w-full min-h-screen h-auto relative bg-white">
      <View className="h-full w-full items-center justify-center p-10">
        {/* Título */}
        {!currentStep > 0 && (
          <View className="flex items-center w-full mb-10">
            <Animated.View
              entering={FadeInDown.delay(200).springify()}
              className="w-full flex felxc justify-center items-center mb-2"
            >
              <View className="flex justify-center items-center w-full h-auto mb-10">
                <Image
                  style={{ width: 370, height: 200, resizeMode: "contain" }}
                  source={logo}
                />
              </View>
            </Animated.View>
            <View className="flex flex-row justify-between w-full">
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text className="font-bold text-lg">Iniciar Sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push("Register")}>
                <Text className="font-bold text-lg border-b border-primary/25 pb-2">
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
      </View>
    </View>
  );
}
