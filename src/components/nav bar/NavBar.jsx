import { View } from "react-native";
import React, { Component } from "react";
import Newspaper from "react-native-vector-icons/FontAwesome6";
import User from "react-native-vector-icons/AntDesign";
import Pet from "react-native-vector-icons/MaterialIcons";
import Animated, { BounceIn } from "react-native-reanimated";
import { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

export class NavBar extends Component {
  render() {
    return (
      <View className="absolute bottom-5 w-full h-14 flex justify-center items-center">
        <LinearGradient
          entering={FadeInDown.delay(1000).springify()}
          colors={["#E72D7C", "#E72D7C", "#E72D7C"]} 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex flex-row h-16  w-2/3 items-center justify-around rounded-full"
        >
          <Animated.View entering={BounceIn.delay(300)}>
            <Newspaper name="newspaper" size={25} color="#fff" />
          </Animated.View>

          <Animated.View
            entering={BounceIn.delay(400).springify()}
            className="mb-2 items-center justify-center rounded-full w-24 h-24 bg-primary"
          >
            <Pet name="pets" size={50} color="#fff" />
          </Animated.View>

          <Animated.View entering={BounceIn.delay(300)}>
            <User name="user" size={25} color="#fff" />
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }
}

export default NavBar;
