import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import MainPage from "./pages/main"
import AboutPage from "./pages/about"
import StackNavigator from "./navigation/stackNavigator"


export default function App() {
	console.disableYellowBox = true;

	return (
		<NavigationContainer>
			<StatusBar style = "black"/>
			<StackNavigator/>
		</NavigationContainer>
	// <MainPage/>
	// <AboutPage/>
	);
}


