import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { FadeInDown } from "react-native-reanimated";

const LoadingSpinner = ({
  message = "Cargando...",
  size = "large",
  color = "#12D27D",
}) => {
  return (
    <View className="w-full min-h-screen h-auto">
      <LinearGradient
        entering={FadeInDown.delay(1000).springify()}
        colors={["#0C1D55", "#1E3A7D", "#4A6BBE"]} // Colores del gradiente
        start={{ x: 0, y: 0 }} // Inicio en la esquina superior izquierda
        end={{ x: 1, y: 1 }}
        className="h-full w-full items-center justify-center p-10"
      >
        <ActivityIndicator size={size} color={color} />
        <Text style={styles.message}>{message}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    marginTop: 10,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default LoadingSpinner;
