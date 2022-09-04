import {React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Share } from 'react-native';


const popup = () => Alert.alert("POPUP nomsg");

export default function AboutPage({navigation, route}) {

	const [tip, setTip] = useState({
				"idx":9,
				"category":"재테크",
				"title":"렌탈 서비스 금액 비교해보기",
				"image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
				"desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
				"date":"2020.09.09"
	});
	const share = () => Share.share({message: `${tip.title}\n\n${tip.desc}\n=n${tip.image}`});

	useEffect(() => {
		console.log(route);
		navigation.setOptions({
			title: route.params.title,
			headerStyle: {
				backgroundColor: "#000",
				shadowColor: "#000",
			},
			headerTintColor: "#fff",
		});
		setTip(route.params);
	}, []);
	
	const popup = () => Alert.alert("Popup!");

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.mainImage} source={{uri:tip.image}}/>
			<Text style={styles.title}>{tip.title}</Text>
			<View style={styles.textContainer}>
				<Text style={styles.desc}>{tip.desc}</Text>
				<TouchableOpacity onPress={popup}>
					<Text style={styles.mybutton}>Button!</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={share}>
					<Text style={styles.mybutton}>Share!</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		display: "flex",
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: '700',
		alignSelf:"center"
	},
	textContainer: {
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	desc: {
		color: "white",
		alignSelf:"center",
		marginBottom: 20,
	},
	mybutton: {
		color: "white",
		fontSize: 20,
		alignSelf: "center",
		padding: 20,
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
