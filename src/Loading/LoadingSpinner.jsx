import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, ActivityIndicator, Text, StyleSheet, Image } from "react-native";
import { FadeInDown } from "react-native-reanimated";
import imageSource from "../../assets/cargando.png"
const LoadingSpinner = ({
  message = "Cargando...",
  size = "large",
  color = "#E72D7C",
}) => {
  return (
    <View className="w-full min-h-screen h-auto">
      <View
        className="h-full w-full items-center justify-center p-10"
      >
        <Image
          source={imageSource} // Fuente de la imagen
          style={{ width: 250, height: 250, marginBottom: 10 }} // Ajusta el tamaño según necesites
          resizeMode="contain" // Ajusta cómo se debe escalar la imagen
        />
        <ActivityIndicator size={size} color={color} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    marginTop: 10,
    fontSize: 30,
    color: "#E72D7C",
    fontWeight: "bold",
  },
});

export default LoadingSpinner;
