import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated"; // Solo una vez
import NavBar from "../components/nav bar/NavBar";
import LogoImage from "../../assets/homeImage.png";

export default function Home() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);

  return (
    <View className="w-full min-h-screen h-auto relative">
      <LinearGradient
        entering={FadeInDown.delay(1000).springify()}
        colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-full w-full justify-center p-10"
      >
        <Animated.View
          entering={FadeInLeft.delay(500)} // Cambié a FadeInDown para una animación consistente
          className="w-full p-10"
        >
          <View className="flex justify-center items-center w-full h-auto mb-10 p-20 bg-secondary rounded-lg">
            <Image style={{ width: 100, height: 100 }} source={LogoImage} />
          </View>
        </Animated.View>
      </LinearGradient>
      <NavBar />
    </View>
  );
}
