import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.buttoncontainer}>
        <View style={styles.nextbutton} />
        <View style={styles.sellbutton} />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    // flex: 1,
  },
  background: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    top: 30,
  },
  sellbutton: {
    backgroundColor: "tomato",
    height: 50,
    width: 50,
  },
  nextbutton: {
    backgroundColor: "dodgerblue",
    height: 50,
    width: 50,
  },
});

export default ViewImageScreen;
