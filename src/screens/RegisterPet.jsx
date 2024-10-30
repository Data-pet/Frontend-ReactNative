import { View, Text, Image } from "react-native";
import React from "react";
import LogoImage from "../../assets/perrito y gato.png";
import FormRegisterPet from "../sections/Register Pets/Form";

const RegisterPet = () => {
  return (
    <View className="w-full min-h-screen h-auto">
      
        <View className="flex  flex-colh-auto w-full items-start mt-14 justify-centert relative p-5">
          <Text className="text-3xl font-bold text-[#E72D7C]">
            Registrar Mascota
          </Text>
          <Image
            className="absolute -top-10 right-4"
            style={{ width: 120, height: 120 }}
            source={LogoImage}
          />
          <FormRegisterPet />
        </View>
    </View>
  );
};

export default RegisterPet;
