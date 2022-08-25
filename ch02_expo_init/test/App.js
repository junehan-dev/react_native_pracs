import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

const main = {
  description: "To share a photo from your phone with a friend, just press the button below!"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
  	color: "white",
    
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
      <Text style={styles.textStyle}>{main.description}</Text>
      <StatusBar style="dark" />
    </View>
  );
}

