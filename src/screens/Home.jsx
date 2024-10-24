import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeInDown,
} from "react-native-reanimated";
import NavBar from "../components/nav bar/NavBar";
import ToastWelcome from "../components/toast/ToastWelcome";
import ToastAddYourPet from "../components/toast/ToastAddYourPet";
import Header from "../components/header/Header";
import NotFoundPets from "../components/notFound/NotFoundPets";
import Slider from "../components/slider/Slider";

export default function Home() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const pets = [
    {
      id: 1,
      name: "Ejemplo",
      image:
        "https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Ejemplo",
      image:
        "https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Ejemplo",
      image:
        "https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <View className="w-full min-h-screen h-auto ">
      <LinearGradient
        entering={FadeInDown.delay(1000).springify()}
        colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-full w-full"
      >
        <Header />
        <ToastWelcome />
        <ToastAddYourPet />
        {!pets ? <NotFoundPets /> : <Slider data={pets} />}
      </LinearGradient>
      <NavBar />
    </View>
  );
}
