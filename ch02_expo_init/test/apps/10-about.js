import React from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'

export default function AboutPage(){
    const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"
  return (
    <View style={styles.container}>
        <Text style={styles.title}>HI! Welcome.</Text>
       
        
        <View style={styles.textContainer}>
            <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
            <Text style={styles.desc01}>Desc 01!</Text>
            <Text style={styles.desc02}>Desc 02!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Instagram account</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F266A",
        alignItems:"center"
      
    },
    title: {
        fontSize:30,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:100,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }
})