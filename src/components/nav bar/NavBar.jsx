import { View } from "react-native";
import React, { Component } from "react";
import Home from "react-native-vector-icons/Octicons";
import Bars from "react-native-vector-icons/FontAwesome6";
import User from "react-native-vector-icons/AntDesign";
import Pet from "react-native-vector-icons/MaterialIcons";
import Animated, { BounceIn } from "react-native-reanimated";
import { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

export class NavBar extends Component {
  render() {
    return (
      <View className="absolute bottom-0 w-full h-16">
        <LinearGradient
          entering={FadeInDown.delay(1000).springify()}
          colors={["#0C1D40", "#1E3A8D", "#0C1D40"]}
          start={{ x: 0, y: 0 }} // Inicio en la esquina superior izquierda
          end={{ x: 1, y: 1 }}
          className="flex flex-row h-full w-full items-center justify-around"
        >
          <Animated.View entering={BounceIn.delay(100).springify()}>
            <User name="user" size={25} color="#fff" />
          </Animated.View>

          <Animated.View entering={BounceIn.delay(250).springify()}>
            <Pet name="pets" size={25} color="#fff" />
          </Animated.View>

          <Animated.View
            entering={BounceIn.delay(400).springify()}
            className="mb-5 items-center border border-white justify-center rounded-full w-20 h-20 bg-secondary"
          > 
            <Home name="home" size={20} color="#fff" />
          </Animated.View>
 
          <Animated.View entering={BounceIn.delay(250).springify()}>
            <User name="user" size={25} color="#fff" />
          </Animated.View>

          <Animated.View entering={BounceIn.delay(100).springify()}>
            <Bars name="bars" size={25} color="#fff" />
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }
}

export default NavBar;
