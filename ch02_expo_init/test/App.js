import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,
  Image, 
//  LogBox 
} from "react-native";
import logo from "./assets/logo.png"

const main = {
  description: "To share a photo from your phone with a friend, just press the button below!",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo : {
    source: logo,
    width: "84%",
    alt: "Logo Image",
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default function App() {
  /* Default built-in Logging Ignore */
  // LogBox.ignoreLogs(["Warning: ..."]);

  // DEBUGGING
  /* Error with stop app
   * throw Error("Error message");
   */

  /* Error without stop app
   * console.error("Error message");
   */
  //console.error("Error message");


  /* Error with alert
   * console.warn("Warn message");
   */
 
  return (
    <View style={styles.container}>
      <Image source={styles.logo.source} style={{ width: styles.logo.width }} alt={styles.logo.alt} />
      <Text style={styles.instructions}>{main.description}</Text>
      <StatusBar style="dark" />
    </View>
  );
}
