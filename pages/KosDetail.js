import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import React, { Component, useState } from "react";

import { ScrollView } from "react-native";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const COLORS = { primary: "#40BFFF", white: "#FFFFFF" };
const images = [
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__480.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg",
  "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__480.jpg",
  "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337__480.jpg",
  "https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089__480.jpg",
];

export default function KosDetail() {
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View>
        <ScrollView
          style={{ width: width, height: 250 }}
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.img_style}
              source={require("./../assets/img/foto/kos2.jpg")}
            />
          ))}
        </ScrollView>
        <View style={styles.dot_style}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.namakos}>Kos Elite Harmoni</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  img_style: {
    width: width,
    height: 300,
    // marginRight: 10,
  },
  dot_style: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
  // dotActive: {
  //   backgroundColor: "black",
  //   width: 15,
  //   height: 7,
  //   borderRadius: 10,
  //   margin: 3,
  // },
  // dot: {
  //   backgroundColor: "white",
  //   width: 7,
  //   height: 7,
  //   borderRadius: 10,
  //   margin: 3,
  // },
  namakos: {
    fontFamily: "Poppins-Regular",
  },
});
