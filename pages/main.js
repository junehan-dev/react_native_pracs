import {React, useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native'
import Loading from "../components/loading"
import Card from "../components/card"

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
import data from '../data.json';



export default function MainPage() {
	const [state, setState] = useState({});
	const [ready, setReady] = useState(true);

	useEffect(() => {
				//setState(data);
				setReady(false);
			setTimeout(() => {
				setState(data);
			//	setReady(false);
			}, 1000);
		}, []
	);

	
	let tip = state.tip;
	let todayWeather = 10 + 17;
	let todayCondition = "흐림"

	function filterCategory(cate) {
		setState({tip: data.tip.filter((tip => tip.category === cate))});
	}

	return state.tip === undefined ? <Loading/> : (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>나만의 꿀팁</Text>
			<Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
			<Image style={styles.mainImage} source={{uri:main}}/>
			<ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
				<TouchableOpacity style={styles.middleButton01} onPress={()=> filterCategory("생활")}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
				<TouchableOpacity style={styles.middleButton02} onPress={()=> filterCategory("재태크")}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
				<TouchableOpacity style={styles.middleButton03} onPress={()=> filterCategory("반려견")}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
				<TouchableOpacity style={styles.middleButton04} onPress={()=> filterCategory("꿀팁 찜")}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
			</ScrollView>
			<View style={styles.cardContainer}>
				{ 
					tip.map((content, i) => (<Card content={content} key={i}/>))
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
