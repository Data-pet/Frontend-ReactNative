import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingAloneText = ({ 
  message = "Cargando...", 
  size = "large", 
  color = "#E72D7C" 
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginTop: 10,
    fontSize: 30,
    color: "#E72D7C",
    fontWeight: "bold",
  },
});

export default LoadingAloneText;
