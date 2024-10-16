import React from "react";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import LogoImage from "../../../assets/homeImage.png";
import { Image, Text } from "react-native";

const ToastWelcome = () => {
  return (
    <Animated.View
      entering={FadeInLeft.delay(1000).springify()}
      className="w-full px-10"
    >
      <LinearGradient
        className="flex justify-center items-center w-full h-auto p-4  rounded-lg relative"
        colors={["#10B56D", "#0E9C63", "#0C8359"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image
          className="absolute -left-8 -top-5"
          style={{ width: 90, height: 90 }}
          source={LogoImage}
        />
        <Text className="text-white text-xl font-bold ml-6">
          Bienvenido a Data Pet
        </Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default ToastWelcome;
