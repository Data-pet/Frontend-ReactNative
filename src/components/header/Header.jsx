import { View, Text, Image } from "react-native";
import React from "react";
import LogoImage from "../../../assets/perrito y gato.png"; // Asegúrate de que la ruta sea correcta
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <View className="felx justify-between  items-center">
      <View className="w-full mb-10 mt-8 h-20 py-2 bg-[#E72D7C] flex-row justify-between items-center px-4">
        <View className="flex flex-row items-center justify-center ">
          <Image
            source={LogoImage}
            className="w-20 h-20" // Asegúrate de que estas dimensiones sean adecuadas
          />
          <View className="flex justify-center items-center">
            <Text className="text-white text-2xl font-bold">
              Data Pet v.1.0
            </Text>
            <Text className="text-white text-xs">El amigo de tu amigo</Text>
          </View>
        </View>
        <View className="flex flex-row items-center text-center w-auto">
          <Text className="text-white text-xs">
            {user.nombre} {user.apellido}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
