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
import { TextInput } from "react-native";

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
  black_transparent: "#292E32",
  font_color: "#E3E3E3",
  grey_1: "#878787",
  transparent: "#4A46464C",
};
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" />

      <ScrollView>
        <View
          style={{
            // backgroundColor: COLORS.black_soft,
            width: responsiveWidth(90),
            marginLeft: responsiveWidth(5),
            height: 70,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontFamily: "Lato-Regular", color: COLORS.white }}>
            Hi, Robert
          </Text>
          <Text
            style={{
              fontFamily: "Lato-Regular",
              color: COLORS.white,
              fontSize: responsiveFontSize(3),
            }}
          >
            Ayo cari kost an Kamu !
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: COLORS.black_soft,
            width: responsiveWidth(90),
            marginLeft: responsiveWidth(5),
            height: 70,
            justifyContent: "space-between",
            flexDirection: "row",
            marginVertical: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("P encarian")}
            style={{
              backgroundColor: COLORS.black_transparent,
              width: responsiveWidth(78),
              height: responsiveHeight(5),
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <TextInput
              style={{
                width: "85%",
                height: "90%",
                // backgroundColor: "white",
                fontFamily: "Lato-Regular",
                color: COLORS.white,
              }}
              placeholder="Cari di sini"
              placeholderTextColor={COLORS.white}
            /> */}

            <Text style={{ fontFamily: "Lato-Regular", color: COLORS.white }}>
              Cari kost di sini
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.black_transparent,
              width: responsiveWidth(11),
              height: responsiveHeight(5),
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "50%", height: "50%" }}
              source={require("./../assets/img/icon/pencarian.png")}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "Lato-Bold",
            color: COLORS.white,
            fontSize: responsiveFontSize(2),
            marginLeft: responsiveWidth(5),
          }}
        >
          Yang terdekat dengan kamu
        </Text>
        <ScrollView horizontal={true} style={styles.scroll}>
          {/* //! Box style */}
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KosDetail")}
          >
            <View>
              <Image
                style={styles.img}
                source={require("./../assets/img/foto/kos5.jpg")}
              />
              <View style={styles.jeniskos_style}>
                <Text style={styles.jeniskos}>PUTRA</Text>
              </View>
            </View>

            <View style={styles.keterangan_container}>
              <Text style={styles.namakos_style}>Kos Elite Harmoni</Text>
              <View style={styles.alamat_container}>
                <Image
                  style={styles.alamat_img}
                  source={require("./../assets/img/icon/location2.png")}
                />
                <Text style={styles.alamat_style}>
                  Desa Ledug, Kembaran, Banyumas
                </Text>
              </View>
              {/* <Text style={styles.fasilitas_style} numberOfLines={1}>
                K. Mandi Dalam, Wifi, Kloset Duduk, Lemari, Meja Belajar
              </Text> */}
            </View>
            <View style={styles.line_container}>
              <View style={styles.line_style}></View>
            </View>
            <View style={styles.harga_container}>
              <View style={styles.harga_text_container}>
                <Text style={styles.hargaRP_style}>Rp.</Text>
                <Text style={styles.harga_style}> 1.500.000</Text>
                <Text style={styles.perbulan_style}> / Bulan</Text>
              </View>

              <View>
                <Text style={styles.sisakamar_style}> Sisa 3 Kamar</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* //! Box style */}
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KosDetail")}
          >
            <View>
              <Image
                style={styles.img}
                source={require("./../assets/img/foto/kos6.jpg")}
              />
              <View style={styles.jeniskos_style}>
                <Text style={styles.jeniskos}>PUTRI</Text>
              </View>
            </View>

            <View style={styles.keterangan_container}>
              <Text style={styles.namakos_style}>Kost Dahlia Ibu Nono</Text>
              <View style={styles.alamat_container}>
                <Image
                  style={styles.alamat_img}
                  source={require("./../assets/img/icon/location2.png")}
                />
                <Text style={styles.alamat_style}>
                  Dukuh Waluh, Purwokerto Timur
                </Text>
              </View>
              {/* <Text style={styles.fasilitas_style} numberOfLines={1}>
                K. Mandi Dalam, Wifi, Kloset Duduk, Lemari, Meja Belajar
              </Text> */}
            </View>
            <View style={styles.line_container}>
              <View style={styles.line_style}></View>
            </View>
            <View style={styles.harga_container}>
              <View style={styles.harga_text_container}>
                <Text style={styles.hargaRP_style}>Rp.</Text>
                <Text style={styles.harga_style}> 600.000</Text>
                <Text style={styles.perbulan_style}> / Bulan</Text>
              </View>

              <View>
                <Text style={styles.sisakamar_style}> Sisa 0 Kamar</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* //! Box style */}
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KosDetail")}
          >
            <View>
              <Image
                style={styles.img}
                source={require("./../assets/img/foto/kos7.jpg")}
              />
              <View style={styles.jeniskos_style}>
                <Text style={styles.jeniskos}>CAMPUR</Text>
              </View>
            </View>

            <View style={styles.keterangan_container}>
              <Text style={styles.namakos_style} numberOfLines={1}>
                Wisma Napoleon Bonaparte
              </Text>
              <View style={styles.alamat_container}>
                <Image
                  style={styles.alamat_img}
                  source={require("./../assets/img/icon/location2.png")}
                />
                <Text style={styles.alamat_style} numberOfLines={1}>
                  Dukuh Waluh, Purwokerto Timur
                </Text>
              </View>
              {/* <Text style={styles.fasilitas_style} numberOfLines={1}>
                K. Mandi Dalam, Wifi, Kloset Duduk, Lemari, Meja Belajar
              </Text> */}
            </View>
            <View style={styles.line_container}>
              <View style={styles.line_style}></View>
            </View>
            <View style={styles.harga_container}>
              <View style={styles.harga_text_container}>
                <Text style={styles.hargaRP_style}>Rp.</Text>
                <Text style={styles.harga_style}> 1.150.000</Text>
                <Text style={styles.perbulan_style}> / Bulan</Text>
              </View>

              <View>
                <Text style={styles.sisakamar_style}> Sisa 1 Kamar</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            marginTop: 15,
            // backgroundColor: "grey",
            width: responsiveWidth(90),
            marginHorizontal: responsiveWidth(5),
          }}
        >
          <Text
            style={{
              fontFamily: "Lato-Bold",
              color: COLORS.white,
              fontSize: responsiveFontSize(2),
            }}
          >
            Rekomendasi
          </Text>

          <View
            style={{
              backgroundColor: COLORS.black_transparent,
              width: responsiveWidth(90),

              // height: 400,
              marginTop: 10,
              marginRight: 10,
              borderRadius: 10,
              paddingBottom: 5,
              padding: 5,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: responsiveWidth(26),
                height: responsiveWidth(26),
              }}
            >
              <Image
                style={styles.img_2}
                source={require("./../assets/img/foto/kos7.jpg")}
              />
              <View style={styles.jeniskos_style}>
                <Text style={styles.jeniskos}>CAMPUR</Text>
              </View>
            </View>
            <View
              style={{
                width: responsiveWidth(60),
                height: responsiveWidth(26),
                backgroundColor: "white",
              }}
            ></View>
          </View>
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
    marginHorizontal: responsiveWidth(5),
  },
  box: {
    backgroundColor: COLORS.black_transparent,
    width: responsiveWidth(60),

    // height: 400,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingBottom: 5,
    padding: 5,
  },
  img: {
    width: "100%",
    height: responsiveWidth(26),
    borderRadius: 7,
  },
  img_2: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  jenis_style: {
    marginVertical: 10,
    flexDirection: "row",
  },
  jeniskos_style: {
    padding: 5,
    backgroundColor: "#0000004D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    // opacity: 0.1,
    position: "absolute",
    left: responsiveWidth(1),
    top: responsiveHeight(0.5),
  },
  jeniskos: {
    fontFamily: "Roboto-Medium",
    color: "white",
    fontSize: responsiveFontSize(1.3),
  },
  keterangan_container: { marginTop: 10, marginLeft: 5, marginRight: 5 },
  alamat_container: {
    flexDirection: "row",
    marginVertical: 5,
    // backgroundColor: "white",
  },
  alamat_img: { width: 12, height: 12 },
  line_container: { justifyContent: "center", alignItems: "center" },
  line_style: {
    height: 1,
    width: "95%",
    backgroundColor: COLORS.grey_1,
    marginVertical: 5,
    // marginHorizontal: 5,
  },
  harga_text_container: {
    flexDirection: "row",
    // backgroundColor: "grey",
    width: "70%",
  },
  sisakamar_style: {
    color: COLORS.green,
    fontFamily: "Lato-Regular",
    fontSize: 10,
    // textAlign: "center",
    // textAlignVertical: "center",
    marginLeft: 10,
  },
  namakos_style: {
    fontFamily: "Lato-Bold",
    fontSize: responsiveFontSize(2.3),
    color: COLORS.white,
  },
  alamat_style: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
    color: COLORS.grey_1,
  },
  fasilitas_style: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
    color: COLORS.grey_1,
  },
  harga_style: {
    fontFamily: "Lato-Bold",
    color: COLORS.white,
  },
  perbulan_style: {
    fontFamily: "Lato-Bold",
    fontSize: 10,
    color: COLORS.white,
    textAlignVertical: "bottom",
  },
  hargaRP_style: {
    fontSize: 12,
    fontFamily: "Lato-Bold",
    color: COLORS.white,
  },
  harga_container: {
    // marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    // backgroundColor: "grey",
  },
});
