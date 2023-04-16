import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Home from "./pages/Home";
import KosDetail from "./pages/KosDetail";
import SplashScreen from "./pages/SplashScreen";
import Onboarding from "./pages/Onboarding";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
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

const Tab = createBottomTabNavigator();

function Back() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={{
        marginLeft: 12,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5,
        opacity: 0.7,
      }}
    >
      <AntDesign name="arrowleft" size={22} color="black" />
    </TouchableOpacity>
  );
}

function Back2() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Beranda")}
      style={{ paddingLeft: 12 }}
    >
      <AntDesign name="arrowleft" size={22} color={COLORS.primary} />
    </TouchableOpacity>
  );
}
function Koskosan() {
  const navigation = useNavigation();
  return (
    <View style={{ paddingLeft: 0 }}>
      <Image
        resizeMode="contain"
        style={{ width: responsiveWidth(25), height: responsiveHeight(2.5) }}
        source={require("./assets/img/icon/splash.png")}
      />
    </View>
  );
}
function Akun() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Akun</Text>
    </View>
  );
}

function Pencarian() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Pencarian</Text>
    </View>
  );
}

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),

    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
    "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),

    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins-Medium",
            color: COLORS.primary,
          },
          headerStyle: {
            backgroundColor: COLORS.black,
            elevation: 0,
          },
          headerTitleAlign: "center",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.black,
            // opacity: 0.1,
            // position: "absolute",
            // bottom: 15,
            // marginHorizontal: 40,
            elevation: 0,
            // borderRadius: 15,
            borderTopWidth: 0,
            height: 60,

            // ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="SplashSCreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
        {/*
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        /> */}

        <Tab.Screen
          name="KosDetail"
          component={KosDetail}
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerShown: true,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            headerLeft: () => <Back />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // headerTransparent: true,
            headerTitle: () => <Koskosan />,
            // headerShown: true,
            // // tabBarStyle: {display: 'none'},
            // headerLeft: () => <Koskosan />,

            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require("./assets/img/icon/beranda_fill.png")
                        : require("./assets/img/icon/beranda.png")
                    }
                    resizeMode="contain"
                    style={{
                      alignItems: "center",
                      width: 20,
                      height: 20,
                      tintColor: focused ? COLORS.green : "#B2B6C1",
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.green : "#B2B6C1",
                      fontSize: 12,
                      alignItems: "center",
                      fontFamily: "Poppins-Regular",
                      marginTop: 5,
                    }}
                  >
                    Beranda
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Pencarian"
          component={Pencarian}
          options={{
            title: "Pencarian",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require("./assets/img/icon/tabbar_pencarian.png")
                        : require("./assets/img/icon/tabbar_pencarian.png")
                    }
                    resizeMode="contain"
                    style={{
                      alignItems: "center",
                      width: 20,
                      height: 20,
                      tintColor: focused ? COLORS.green : "#B2B6C1",
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.green : "#B2B6C1",
                      fontSize: 12,
                      alignItems: "center",
                      fontFamily: "Poppins-Regular",
                      marginTop: 5,
                    }}
                  >
                    Pencarian
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Akun"
          component={Akun}
          options={{
            title: "Progress",
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require("./assets/img/icon/profil_fill.png")
                        : require("./assets/img/icon/profil.png")
                    }
                    resizeMode="contain"
                    style={{
                      alignItems: "center",
                      width: 20,
                      height: 20,
                      tintColor: focused ? COLORS.green : "#B2B6C1",
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.green : "#B2B6C1",
                      fontSize: 12,
                      alignItems: "center",
                      fontFamily: "Poppins-Regular",
                      marginTop: 5,
                    }}
                  >
                    Profil
                  </Text>
                </View>
              );
            },
          }}
        />

        {/* <Tab.Screen
          name="AkunScreen"
          component={AkunScreen}
          options={{
            title: "Akun",
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require("./assets/icon/beranda_fill.png")
                        : require("./assets/icon/beranda.png")
                    }
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#FFFFFF" : "#B2B6C1",
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? "#FFFFFF" : "#B2B6C1",
                      fontSize: 13,
                      alignItems: "center",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Akun
                  </Text>
                </View>
              );
            },
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 50,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonicon: {
    alignItems: "center",
  },
});
