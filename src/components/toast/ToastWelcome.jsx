import React from "react";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import LogoImage from "../../../assets/dataPet.png";
import { Image, Text } from "react-native";

const ToastWelcome = () => {
  return (
    <Animated.View
      entering={FadeInLeft.delay(1000).springify()}
      className="w-full h-auto flex justify-center items-center -my-24 -mt-36"
    >
      <Image
        style={{ width: 350, height: 350, resizeMode: "contain" }}
        source={LogoImage}
      />
    </Animated.View>
  );
};

export default ToastWelcome;
