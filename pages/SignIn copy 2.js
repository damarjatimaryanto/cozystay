import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

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
    <KeyboardAwareScrollView
      extraHeight={100}
      enableOnAndroid
      // resetScrollToCoords={true}
      // automaticallyAdjustContentInsets={false}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image_bg}
          resizeMode="cover"
          source={require("./../assets/img/icon/login_bg.png")}
        >
          <StatusBar
            translucent
            barStyle={"dark-content"}
            backgroundColor="transparent"
          />
          <View
            style={{
              flex: 0.2,
              // height: responsiveHeight(20),
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
          <View style={{ flex: 0.3, width: WIDTH }}></View>
          <View
            style={{
              flex: 0.1,
              width: WIDTH,
              // backgroundColor: "grey",
              // opacity: 0.5,
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={styles.text_container}>
              <Text style={styles.ayomulai}>Masuk ke Cozystay</Text>

              <Text style={styles.deskripsi}>
                Masuk untuk mendapatkan info kost terbaru
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              width: WIDTH,
              // backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              // opacity: 0.8,
            }}
          >
            <View style={styles.form_container}>
              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/mailbox.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Masukan Username"
                    placeholderTextColor={COLORS.abuabu}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/Password.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Masukan Kata Sandi"
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.abuabu}
                  />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.btn_mulai}
              >
                <Text style={styles.text_mulai}>MASUK</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 0.1 }}>
            <View style={styles.bottomtext_container}>
              <Text style={styles.text_style}>Belum punya Akun ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.text2_style}> DAFTAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 30,
    // justifyContent: "center",
    // alignItems: "center",
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
    marginTop: 30,
  },
  text_mulai: {
    fontFamily: "Roboto-Bold",
    color: COLORS.black,
  },
  ayomulai: {
    fontFamily: "Lato-Bold",
    fontSize: responsiveFontSize(3),
    color: "#E3E3E3",
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  deskripsi: {
    fontFamily: "Lato-Regular",
    color: "#C9C9C9",

    paddingHorizontal: 20,
    fontSize: responsiveFontSize(1.8),
  },
  form_container: {
    width: responsiveWidth(90),
  },

  form_style: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    // borderRadius: 5,
    marginVertical: 4.5,

    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 10,
  },
  icon_style: {
    width: 20,
    height: 20,
    tintColor: COLORS.abuabu,
  },
  image_container: {
    width: 48,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.abusoft,
  },
  input_container: {
    // backgroundColor: "yellow",
    width: "70%",
    height: "100%",
    justifyContent: "center",
    color: COLORS.abuabu,
  },
  input_style: {
    fontFamily: "Lato-Regular",
    color: COLORS.white,
  },
  bottomtext_container: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  text_style: {
    fontFamily: "Lato-Regular",
    color: COLORS.abuabu,
  },
  text2_style: {
    fontFamily: "Lato-Bold",
    color: COLORS.green,
  },
});
