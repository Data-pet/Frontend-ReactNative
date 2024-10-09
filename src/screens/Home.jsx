import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { FadeInDown } from "react-native-reanimated";
import NavBar from "../components/nav bar/NavBar";

export default function Home() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  return (
    <View className="w-full min-h-screen h-auto relative">
      <LinearGradient
        entering={FadeInDown.delay(1000).springify()}
        colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]} // Colores del gradiente
        start={{ x: 0, y: 0 }} // Inicio en la esquina superior izquierda
        end={{ x: 1, y: 1 }}
        className="h-full  w-full items-center justify-center p-10"
      >
        <Text className="text-white text-lg">{user.nombre}</Text>
        <Button
          title="Go to register"
          onPress={() => navigation.navigate("Register")}
        />
        
      </LinearGradient>
      <NavBar />
    </View>
  );
}
