import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AboutPage from "../pages/about"
import MainPage from "../pages/main"
import IntroPage from "../pages/intro"

const Stack = createStackNavigator();
const navigatorStyle = {
	headerStyle : {
		backgroundColor: "white",
		borderBottomColor: "white",
		shadowColor: "white",
		height: 100,
	},
	headerTintColor: "#000",
	headerTextAlign: "left",
	headerBackTitleVisible: false,
};
const StackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={navigatorStyle}>
			<Stack.Screen name="MainPage" component={MainPage}/>
			<Stack.Screen name="AboutPage" component={AboutPage}/>
			<Stack.Screen name="IntroPage" component={IntroPage}/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
