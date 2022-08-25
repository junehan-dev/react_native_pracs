import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={StyleSheet.container}>

      <Image source={{url: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}></Image>

      <Text style={styles.instructions}>
        To share a photo from your phone with a firend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={{backgroundColor: "blue"}}>

        <Text style={{fontSize: 20, color: "#fff"}}>
          Pick a photo
        </Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  }
});