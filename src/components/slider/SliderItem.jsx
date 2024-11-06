import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  FadeIn,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import mancha from "../../../assets/Mancha.png";

const SliderItem = ({ item, index, scrollX, onPress }) => {
  const { width } = Dimensions.get("window");
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[rnAnimatedStyle]} // Aquí se aplica el cálculo dinámico
        className="relative w-screen gap-2 flex items-center justify-center "
      >
        <View className="w-full flex justify-center items-center relative">
          <Image
            className="w-72 h-72 rounded-2xl object-fill"
            source={mancha}
            resizeMode="contain"
          />
          <Image
            // entering={FadeIn.delay(2500).springify()}
            className="w-56 h-56 rounded-2xl object-fill absolute top-0 z-10"
            source={{ uri: item.imagen }}
            resizeMode="contain"
          />
          <Animated.View
            entering={FadeIn.delay(2500).springify()}
            className="absolute bottom-2 flex flex-col justify-center items-center "
          >
            <Text className=" text-primary text-3xl font-bold border-b border-primary">
              {item.nombre}
            </Text>
            <Text className="text-primary font-semibold">{item.raza}</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(2500).springify()}
            className="absolute left-10 top-2"
          >
            <Text className="text-secondary text-xs font-bold">
              Identificador:
            </Text>
            <Text className=" text-secondary text-2xl font-bold">
              #{item.idMascota}
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SliderItem;
