import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals', params: {
							categoryId: itemData.item.id
						}
					})
				}} />
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
CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Meal Categories',
		headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item title="Menu" iconName="ios-menu" onPress={() => {
				navData.navigation.toggleDrawer();
			}}>
			</Item>
		</HeaderButtons>)
	}

}

export default CategoriesScreen;
