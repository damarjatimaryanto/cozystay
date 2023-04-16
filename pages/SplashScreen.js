import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  StatusBar,
  BackHandler,
  ImageBackground,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const COLORS = {
  primary: "#00AAFF",
  white: "#FFFFFF",
  orange: "#FFBC14",
  abuabu: "#9098B1",
  abusoft: "#EBF0FF",
  black: "#151515",
  black_soft: "#151515",
  green: "#3AF891",
};
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate("Onboarding");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <Image
        resizeMode="contain"
        style={{ width: 190, height: 39 }}
        source={require("../assets/img/icon/splash.png")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black_soft,
    justifyContent: "center",
    alignItems: "center",
  },
});
