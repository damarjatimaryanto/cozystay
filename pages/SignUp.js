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
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
  grey_soft: "#C9C9C9",
};

export default function SignUp() {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <KeyboardAwareScrollView extraHeight={100} enableOnAndroid>
      <View>
        <ImageBackground
          style={styles.image_bg}
          resizeMode="cover"
          source={require("./../assets/img/icon/login_bg.png")}
        >
          <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />

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
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(3.5),
              }}
              source={require("../assets/img/icon/splash.png")}
            />
          </View>

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
              <Text style={styles.ayomulai}>Daftar ke Cozystay</Text>

              <Text style={styles.deskripsi}>
                Dapatkan dan berikan rekomendasi kost terbaik dengan cara daftar
                ke CozyStay.
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.6,
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
                    source={require("./../assets/img/icon/icon_user.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Nama Depan"
                    placeholderTextColor={COLORS.white}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/icon_user.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Nama Belakang"
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.white}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/letter.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Email"
                    placeholderTextColor={COLORS.white}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/phone.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="No. Telephone"
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.white}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/icon_leveluser.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Masuk Sebagai"
                    placeholderTextColor={COLORS.white}
                  />
                </View>
                <View style={styles.show_container}>
                  <Image
                    style={styles.iconselect_style}
                    source={require("./../assets/img/icon/icon_select.png")}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require("./../assets/img/icon/icon_password.png")}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Kata Sandi"
                    secureTextEntry={isSecureEntry}
                    placeholderTextColor={COLORS.white}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev) => !prev);
                  }}
                  style={styles.show_container}
                >
                  {/* <Text style={{ color: COLORS.white }}>
                    {" "}
                    {isSecureEntry ? "Show" : "Hide"}{" "}
                  </Text> */}

                  <Image
                    style={styles.icon_style}
                    source={
                      isSecureEntry
                        ? require("./../assets/img/icon/icon_eye2.png")
                        : require("./../assets/img/icon/icon_eye1.png")
                    }
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                // onPress={() => navigation.navigate("SignIn")}

                style={styles.btn_mulai}
              >
                <Text style={styles.text_mulai}>DAFTAR</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 0.1 }}>
            <View style={styles.bottomtext_container}>
              <Text style={styles.text_style}>Sudah punya Akun ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.text2_style}> MASUK</Text>
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
    // flex: 1,
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
    fontSize: responsiveScreenFontSize(3),
    color: COLORS.white,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  deskripsi: {
    fontFamily: "Lato-Regular",
    color: COLORS.white,

    paddingHorizontal: 20,
    fontSize: responsiveScreenFontSize(1.8),
  },
  form_container: {
    width: responsiveWidth(90),
  },

  form_style: {
    flexDirection: "row",
    width: "100%",
    height: responsiveHeight(6),
    // borderRadius: 5,
    marginVertical: 4.5,

    borderBottomWidth: 1,
    borderBottomColor: COLORS.abuabu,
    marginBottom: 10,
  },
  icon_style: {
    width: "45%",
    height: "45%",
    tintColor: COLORS.white,
  },
  iconselect_style: {
    width: 11,
    height: 7,
    tintColor: COLORS.white,
  },
  image_container: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.abusoft,
  },
  input_container: {
    // backgroundColor: "yellow",
    width: "75%",
    height: "100%",
    justifyContent: "center",
    color: COLORS.white,
  },
  input_style: {
    fontFamily: "Lato-Regular",
    color: COLORS.white,
    fontSize: responsiveFontSize(1.8),
  },
  bottomtext_container: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  text_style: {
    fontFamily: "Lato-Regular",
    color: COLORS.white,
  },
  text2_style: {
    fontFamily: "Lato-Bold",
    color: COLORS.green,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  show_container: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.abusoft,
    // opacity: 0.5,
  },
});
