import { View, Text, Image } from "react-native";
import React from "react";
import LogoImage from "../../assets/perrito y gato.png";
import { LinearGradient } from "expo-linear-gradient";
import { FadeInDown } from "react-native-reanimated";

const RegisterPet = () => {
  return (
    <View className="w-full min-h-screen h-auto ">
      <LinearGradient
        entering={FadeInDown.delay(1000).springify()}
        colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-full w-full"
      >
        <View className="flex h-auto w-full items-start mt-14 justify-centert relative">
          <Text className="text-white text-3xl font-bold ml-5">
            Registrar Mascota
          </Text>
          <Image
            className="absolute -top-10 right-4"
            style={{ width: 120, height: 120 }}
            source={LogoImage}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default RegisterPet;
