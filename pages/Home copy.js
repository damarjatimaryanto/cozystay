// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
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
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" />

      <ScrollView>
        <View style={styles.scroll}>
          {/* //! Box style */}
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KosDetail")}
          >
            <View>
              <Image
                style={styles.img}
                source={require("./../assets/img/foto/kos2.jpg")}
              />
            </View>
            <View style={styles.jenis_style}>
              <Text style={styles.jenis_box}>Campur</Text>
              <Text style={styles.sisakamar_style}>Sisa 1 Kamar</Text>
            </View>
            <View>
              <Text style={styles.namakos_style}>Kos Elite Harmoni</Text>
              <Text style={styles.alamat_style}>
                Dukuh Waluh, Purwokerto Timur
              </Text>
              <Text style={styles.fasilitas_style} numberOfLines={1}>
                K. Mandi Dalam, Wifi, Kloset Duduk, Lemari, Meja Belajar
              </Text>
            </View>
            <View style={styles.harga_container}>
              <Text style={styles.hargaRP_style}>Rp.</Text>
              <Text style={styles.harga_style}> 1.500.000</Text>
              <Text style={styles.perbulan_style}> / Bulan</Text>
            </View>
          </TouchableOpacity>

          {/* //! Box style */}
          <TouchableOpacity style={styles.box}>
            <View>
              <Image
                style={styles.img}
                source={require("./../assets/img/foto/kos2.jpg")}
              />
            </View>
            <View style={styles.jenis_style}>
              <Text style={styles.jenis_box}>Campur</Text>
              <Text style={styles.sisakamar_style}>Sisa 3 Kamar</Text>
            </View>
            <View>
              <Text style={styles.namakos_style}>Kos Elite Harmoni</Text>
              <Text style={styles.alamat_style}>
                Dukuh Waluh, Purwokerto Timur
              </Text>
              <Text style={styles.fasilitas_style} numberOfLines={1}>
                K. Mandi Dalam, Wifi, Kloset Duduk, Lemari, Meja Belajar
              </Text>
            </View>
            <View style={styles.harga_container}>
              <Text style={styles.hargaRP_style}>Rp.</Text>
              <Text style={styles.harga_style}> 1.500.000</Text>
              <Text style={styles.perbulan_style}> / Bulan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 50,
  },
  scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: "5%",
    // backgroundColor: "grey",
  },
  box: {
    // backgroundColor: "#E7EFF2",
    width: "45%",
    // height: 300,
    margin: 10,
    borderRadius: 5,
    paddingBottom: 5,
  },
  img: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
  jenis_style: {
    marginVertical: 10,
    flexDirection: "row",
  },
  jenis_box: {
    fontFamily: "Poppins-Medium",
    borderColor: "grey",
    borderWidth: 2,
    padding: 1,
    width: 60,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 10,
  },
  sisakamar_style: {
    color: "red",
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 10,
  },
  namakos_style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  alamat_style: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  fasilitas_style: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "grey",
  },
  harga_style: {
    fontFamily: "Poppins-Bold",
    // color: "#40BFFF",
  },
  perbulan_style: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "black",
  },
  hargaRP_style: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#000",
  },
  harga_container: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
