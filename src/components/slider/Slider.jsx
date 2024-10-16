import { View, Text, FlatList } from "react-native";
import React from "react";
import Animated, {
  FadeInRight,
  FadeInUp,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import SliderItem from "./SliderItem";

const Slider = ({ data }) => {
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });
  return (
    <Animated.View
      entering={FadeInRight.delay(2000).springify()}
      className="flex justify-center items-center mt-8"
    >
      <Animated.FlatList
        data={data}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
      />
    </Animated.View>
  );
};

export default Slider;
