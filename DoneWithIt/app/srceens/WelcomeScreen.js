import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/color";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.text}>Sell things you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  background: {
    flex: 1, // entire screen
    justifyContent: "flex-end", // sets object in it along pri(col)
    alignItems: "center", // sets object in it along sec(row)
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
});

export default WelcomeScreen;

// a new page:
// 1. create a new folder and put the object.js in it, then import it into the main App.js.
// 2. rsf to form the template.
// 3. import tags like <Image>, <Text>, <View> if it's used.
// 4. rnss to form the StyleSheet.
// 5. define the style in StyleSheet, then call it in the object like
//    <Image style={styles.xxx}>
// 6.
