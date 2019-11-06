import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	}
});



const CategoriesScreen = (props) => {

	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals', params: {
							categoryId: itemData.item.id
						}
					})
				}}>
				<View >
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>

		);
	};

	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

// HEADER
CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',

}

export default CategoriesScreen;
