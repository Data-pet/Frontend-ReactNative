import { View, Text, Image } from "react-native";
import React from "react";
import LogoImage from "../../../assets/perrito y gato.png"; // Asegúrate de que la ruta sea correcta
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <View className="w-full mb-10 mt-8 h-20 py-2 bg-primary flex-row justify-between items-center px-4">
      <View className="flex flex-row items-center justify-center ">
        <Image
          source={LogoImage}
          className="w-20 h-20" // Asegúrate de que estas dimensiones sean adecuadas
        />
        <View className="flex justify-center items-center">
          <Text className="text-white text-2xl font-bold">Data Pet v.0.1</Text>
          <Text className="text-white text-xs">El amigo de tu amigo</Text>
        </View>
      </View>
      <View className="flex flex-row items-center text-center w-10 h-10 relative justify-center p-6 bg-white rounded-full border-4 border-secondary">
        <Text className="absolute top-3 font-extrabold text-secondary">
          {user.nombre.charAt(0)}
        </Text>
      </View>
    </View>
  );
};

export default Header;
