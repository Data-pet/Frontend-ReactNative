import React from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import LogoImage from "../../../assets/perrito y gato ecimados.png"; // Asegúrate que este es el archivo correcto
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ToastAddYourPet = () => {
  const navigation = useNavigation();
  return (
    <Animated.View
      entering={FadeInRight.delay(1500).springify()}
      className="w-full px-4 mt-6"
    >
      <LinearGradient
        className="flex-row justify-between items-center p-4 rounded-lg"
        colors={["#00D084", "#0E9C63"]} // Colores verdes
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View className="flex-1">
          <Text className="text-white text-sm font-bold mb-2">
            ¡Hola, humano! 🐾
          </Text>
          <Text className="text-white text-base mb-2">
            ¡No dejes a tu peludo amigo fuera! Regístralo y guarda todos sus
            secretos en la app.
          </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Register-pet')} className="bg-primary rounded-lg px-3 py-2 justify-center items-center">
            <Text className="text-white text-base font-bold">
              ¡Registrar ahora!
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={LogoImage} // Cambia esto por la imagen correcta
          className="w-32 h-40 ml-2 "
        />
      </LinearGradient>
    </Animated.View>
  );
};

export default ToastAddYourPet;
