import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import * as Location from "expo-location"
import axios from "axios"

import {ref, onValue} from "firebase/database"
import database from "../firebaseConn"

import Loading from "../components/loading"
import Card from "../components/card"
import data from '../data.json'


const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'

export default function MainPage({navigation, route}) {
	const [state, setState] = useState({});
	const [loc, setLocation] = useState({});
	const [weather, setWeather] = useState({});
	const [isReady, ready]  = useState(false);

	let todayWeather = 10 + 17;
	let todayCondition = "흐림"

	function filterCategory(cate) {
		setState({tip: data.tip.filter((tip => tip.category === cate))});
	}

	async function getLocation (){
		try {
			await Location.requestForegroundPermissionsAsync();
			let data = await Location.getCurrentPositionAsync();
		
			const {latitude, longitude} = data["coords"];
			if (!latitude || !longitude)
				throw new Error();
			setLocation({latitude, longitude});
			const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
			data = await axios.get(
				`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
			);
			const { temp } = data["data"]["main"];
			const weatherState = data["data"]["weather"][0]["main"];
			setWeather({temp, state: weatherState});
			console.log(weather);
			return (true);
		} catch (err) {
			console.log("ERROR", err);
			Alert.alert("unable to find the location", "reboot the app");
			return (false);
		}
	}

	useEffect(() => {
			const prom = new Promise((resolve, reject) => {
				const tipRef = ref(database, "tip/");
				onValue(tipRef, (snapshot) => {
					const val = snapshot.val();
					setState(val);
					resolve();
				});
			}).then(async () => {
				await getLocation() ? Promise.resolve() : Promise.reject();
			}).then(() =>{
				ready(true);
			});
		}, []
	);



	return (isReady === false) ? <Loading/> : (
		<ScrollView style={styles.container}>
			{/*<Text style={styles.title}>나만의 꿀팁</Text>*/}
			<TouchableOpacity style={styles.introButton} onPress={()=>navigation.navigate('IntroPage')}>
				<Text style={styles.introButtonText}>소개 페이지</Text>
			</TouchableOpacity>
			<Text style={styles.weather}>오늘의 날씨: {(weather["temp"] || '0') + '°C ' + (weather["state"] || "모름")} </Text>
			<Image style={styles.mainImage} source={{uri:main}}/>

			<ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
				<TouchableOpacity style={styles.middleButton01} onPress={()=> filterCategory("생활")}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
				<TouchableOpacity style={styles.middleButton02} onPress={()=> filterCategory("재태크")}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
				<TouchableOpacity style={styles.middleButton03} onPress={()=> filterCategory("반려견")}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
				<TouchableOpacity style={styles.middleButton04} onPress={()=> navigation.navigate("LikePage")}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
			</ScrollView>
			<View style={styles.cardContainer}>
				{ 
					state.map((content, i) => (<Card content={content} key={i} navigation={navigation}/>))
				}
			</View>
		</ScrollView>);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		marginTop:50,
		marginLeft:20
	},
	weather:{
		alignSelf:"flex-end",
		paddingRight:20
	},
	introButtonText: {
		color:"black",
		fontWeight:"700",
		fontSize: 12,
		textAlign:"center"
	},
	introButton: {
		width:90,
		height:44,
		padding:15,
		backgroundColor:"#aaa",
		borderRadius:15,
		margin:7,
		alignSelf: "flex-end",
	},
	mainImage: {
		width:'90%',
		height:200,
		borderRadius:10,
		marginTop:20,
		alignSelf:"center"
	},
	middleContainer:{
		marginTop:20,
		marginLeft:10,
		height:60
	},
	middleButton01: {
		width:100,
		height:50,
		padding:15,
		backgroundColor:"#fdc453",
		borderColor:"deeppink",
		borderRadius:15,
		margin:7
	},
	middleButton02: {
		width:100,
		height:50,
		padding:15,
		backgroundColor:"#fe8d6f",
		borderRadius:15,
		margin:7
	},
	middleButton03: {
		width:100,
		height:50,
		padding:15,
		backgroundColor:"#9adbc5",
		borderRadius:15,
		margin:7
	},
	middleButtonText: {
		color:"#fff",
		fontWeight:"700",
		textAlign:"center"
	},
	middleButton04: {
		width:100,
		height:50,
		padding:15,
		backgroundColor:"#f886a8",
		borderRadius:15,
		margin:7
	},
	cardContainer: {
		marginTop:10,
		marginLeft:10
	},
	card:{
		flex:1,
		flexDirection:"row",
		margin:10,
		borderBottomWidth:0.5,
		borderBottomColor:"#eee",
		paddingBottom:10
	},
	cardImage: {
		flex:1,
		width:100,
		height:100,
		borderRadius:10,
	},
	cardText: {
		flex:2,
		flexDirection:"column",
		marginLeft:10,
	},
	cardTitle: {
		fontSize:20,
		fontWeight:"700"
	},
	cardDesc: {
		fontSize:15
	},
	cardDate: {
		fontSize:10,
		color:"#A6A6A6",
	},
});
