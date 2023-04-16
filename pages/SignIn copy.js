import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const COLORS = {
  primary: "#00AAFF",
  white: "#FFFFFF",
  orange: "#FFBC14",
  abuabu: "#9098B1",
  abusoft: "#EBF0FF",
};

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={COLORS.white} />
      <Image
        source={require("./../assets/img/icon/logo.png")}
        style={styles.Image}
      />
      <View style={styles.text_container}>
        <Text style={styles.ayomulai}>Sign in to continue</Text>
      </View>

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
              placeholder="Your Username"
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
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={COLORS.abuabu}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.btn_mulai}
        >
          <Text style={styles.text_mulai}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomtext_container}>
        <Text style={styles.text_style}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.text2_style}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: "30%",
  },

  Image: {
    width: 160,
    height: 85,
  },
  text_container: {
    marginTop: 80,
    marginBottom: 20,
  },
  btn_mulai: {
    width: "100%",
    height: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  text_mulai: {
    fontFamily: "Poppins-Medium",
    color: COLORS.white,
  },
  ayomulai: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: COLORS.abuabu,
    textAlign: "center",
    textAlignVertical: "center",
  },
  form_container: {
    width: width * 0.85,
  },
  form_style: {
    borderColor: COLORS.abusoft,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    width: "100%",
    height: 48,
    borderRadius: 5,
    marginVertical: 4.5,
  },
  icon_style: {
    width: 20,
    height: 20,
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
    fontFamily: "Poppins-Regular",
    color: COLORS.abuabu,
  },
  bottomtext_container: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  text_style: {
    fontFamily: "Poppins-Regular",
    color: COLORS.abuabu,
  },
  text2_style: {
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
  },
});
