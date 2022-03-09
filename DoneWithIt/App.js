import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import WelcomeScreen from "./app/srceens/WelcomeScreen";
import ViewImageScreen from "./app/srceens/ViewImageScreen";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  // const handlePress = () => console.log("App executed");
  // const { landscape } = useDeviceOrientation();
  return <WelcomeScreen />;
}

// const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// View: SafeAreaView

//-------------------------------------------------------------------------------

// Text: must in the <Text>, numberOfLine{} can change the text, out of the screen to ....
// <Text numberOfLines={1} onPress={handlePress}>
//  Hello React Native
// </Text>

//-------------------------------------------------------------------------------

// Image: source-require(local)/{uri:url}, blur, fade
//<Image source={require("./assets/favicon.png")} />

//-------------------------------------------------------------------------------

// Touchable: WithoutFeedback, Highlight, Opacity, NativeFeedback(For view)
// <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
// <View
//   style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
// ></View>
// </TouchableNativeFeedback>

// <TouchableOpacity>
// <Image
//   fadeDuration={1000}
//   blurRadius={5}
//   source={{
//     width: 200,
//     height: 300,
//     uri: "https://picsum.photos/200/300",
//   }}
// />
// </TouchableOpacity>

//------------------------------------------------------------------------

// Button and Alert.
// <Button
//   title="click me"
//   onPress={() =>
//     Alert.alert("title", "message", [
//       { text: "yes",onPress: () => console.log("yes"), },     // button 1
//       { text: "nope", onPress: () => console.log("nope") },   // button 2
//       { text: "ahh", onPress: () => console.log("ahh") },     // button 3
//     ])
//   }
// />

// -----------------------------------------------------------------------

// Style: using StyleSheet.create() can check whether the property is valid(spelling probs)
// we can pass an array[], storing multiple styles to style attribute.
// The latter will overwrite the former.
// Using Platform.OS can delcare the property base on the platform IOS/Android

// ---------------------------------------------------------------------------

// Dimensions: useDimensions() can return the info of the screen.
// Orientation: detect portrait(直)/landscape(橫), in app.js can change the supporting mode

// <SafeAreaView style={[styles.container]}>
// <View
//   style={{
//     width: "100%",
//     height: landscape ? "100%" : "40%",
//     backgroundColor: "dodgerblue",
//   }}
// ></View>

// <StatusBar style="auto" />
// </SafeAreaView>

// ----------------------------------------------------------

// Style: similar to css: flex:ratio of objects, flexdirection: row/col,
// justify/align: main/secondary axis,

// <View
//   style={{
//     backgroundColor: "white",
//     flex: 1,
//     flexDirection: "row", // row/col
//     justifyContent: "center", // bases on primary axis
//     alignItems: "center", // align each line based on secondary items
//     alignContent: "center", // align the whole content ...., only works while wrapping
//     flexWrap: "wrap", // 換行
//   }}
// >
//   <View
//     style={{
//       backgroundColor: "dodgerblue",
//       width: 100,
//       height: 300,
//       alignSelf: "flex-end", // for control the sub object
//       top: 20,
//       position: "absolute", // based on its parent
//     }}
//   />
//   <View style={{ backgroundColor: "gold", width: 100, height: 200 }} />
//   <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
//   <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
// </View>
