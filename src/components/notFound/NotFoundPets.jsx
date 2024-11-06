import { Text, Image } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import petsNotFound from "../../../assets/Mascotas no encontradas.png";

const NotFoundPets = () => {
  return (
    <Animated.View
      entering={FadeIn.delay(2000)}
      className="flex flex-col justify-center items-center my-4 px-4"
    >
      <Image
        className=""
        style={{ width: 180, height: 180 }}
        source={petsNotFound}
      />
      <Text className="text-secondary text-lg font-bold text-center">
        ¡Hola, humano! Aún no encontré ninguna mascota registrada a tu nombre.
      </Text>
    </Animated.View>
  );
};

export default NotFoundPets;
