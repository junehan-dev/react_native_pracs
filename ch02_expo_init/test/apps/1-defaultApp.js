import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
  return (
    <View style={styles.container}>
      <Image source={styles.logo.source} style={{ width: styles.logo.width }} alt={styles.logo.alt} />
      <Text style={styles.instructions}>{main.description}</Text>
      <StatusBar style="dark" />
    </View>
  );
}
