import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const COLORS = {
  primary: "#00AAFF",
  white: "#FFFFFF",
  orange: "#FFBC14",
  abuabu: "#9098B1",
  abusoft: "#EBF0FF",
  black: "#151515",
  black_soft: "#202020",
  green: "#3AF891",
};

export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image_bg}
        resizeMode="cover"
        source={require("./../assets/img/icon/intro_bg2.png")}
      >
        <StatusBar
          translucent
          barStyle={"dark-content"}
          backgroundColor="transparent"
        />

        <View
          style={{
            flex: 0.2,
            // backgroundColor: "black",
            width: WIDTH,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 138, height: 27 }}
            source={require("../assets/img/icon/splash.png")}
          />
        </View>
        <View style={{ flex: 0.2, width: WIDTH }}></View>
        <View style={{ flex: 0.2, width: WIDTH }}></View>
        <View style={{ flex: 0.2, width: WIDTH }}>
          <View style={styles.text_container}>
            <Text style={styles.ayomulai}>
              Five star quality, feels like home
            </Text>

            <Text style={styles.deskripsi}>
              CozyStay hadir buat kamu yang kesusahan buat nyari kost yang
              sesuai kebutuhan dan budget
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.2,
            width: WIDTH,
            // backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={styles.btn_mulai}
          >
            <Text style={styles.text_mulai}>MULAI</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image_bg: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
    // justifyContent: "center",
    alignItems: "center",
  },

  Image: {
    width: 250,
    height: 250,
  },
  btn_mulai: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: COLORS.green,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom: 50,

    shadowColor: "#3AF891",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  text_mulai: {
    color: COLORS.black,
    fontFamily: "Roboto-Black",
  },
  ayomulai: {
    fontFamily: "Lato-Bold",
    // fontSize: responsiveFontSize(3.5),
    fontSize: RFValue(14, WIDTH),
    color: "#E3E3E3",
    textAlign: "center",
    marginBottom: 10,
  },
  deskripsi: {
    fontFamily: "Lato-Regular",
    color: "#C9C9C9",
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: HEIGHT * 0.015,
  },
  text_container: {
    height: "100%",

    // position: "absolute",
    // backgroundColor: "grey",
    // bottom: 200,
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
});
