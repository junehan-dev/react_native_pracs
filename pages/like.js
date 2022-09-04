import {React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import LikeCard from "../components/likeCard.js"

const popup = () => Alert.alert("POPUP nomsg");

export default function AboutPage({navigation, route}) {
	const [tip, setTip] = useState([
		{
			"idx":9,
			"category":"재테크",
			"title":"렌탈 서비스 금액 비교해보기",
			"image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
			"desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
			"date":"2020.09.09"
		},
		{
			"idx":4,
			"category":"재테크",
			"title":"할인행사, 한정할인판매 문구의 함정 탈출!",
			"image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money2.png",
			"desc":"‘안 사면 100% 할인’이라는 말 들어보셨나요? 견물생심, 좋은 물건을 보면 사고 싶기 마련입니다. 특히 대대적인 ‘할인 행사’ 중인 대형 마트에 갔을 때는 말할 것도 없겠죠. 따라서 생필품을 살 때, 한꺼번에 사서 사용하는 것보다 필요할 때 조금씩 구매하는 편이 좋습니다. 장을 보면서 대형마트에 자주 가다 보면 지금 필요한 것뿐 아니라 앞으로 필요할 것까지 사게 되어 지출이 커지기 때문입니다. 특히 할인 품목을 보면 뜻하지 않은 소비를 하는 경우도 많아진다. 홈쇼핑, 대형마트 등의 ‘할인행사’, ‘한정할인판매’ 등의 문구를 조심하세요. ",
			"date":"2020.09.09"
		},
	]);

	useEffect(() => {
		navigation.setOptions({
			title: "keep this post",
		});
	});
	
	const popup = () => Alert.alert("Popup!");

	return (
		<ScrollView style={styles.container}>
			{
				tip.map((content,i)=>{
					return(<LikeCard key={i} content={content} navigation={navigation}/>)
				})
			}
		</ScrollView>);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
