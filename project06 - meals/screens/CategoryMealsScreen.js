import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const CategoryMealsScreen = (props) => {

	const catId = props.navigation.getParam('categoryId')
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

	return (
		<View style={styles.screen}>
			<Text>CategoryMealsScreen</Text>
			<Text>{selectedCategory.title}</Text>
			<Button
				title='Go to meals'
				onPress={() => {
					props.navigation.navigate({ routeName: 'MealDetail' });
				}}
			/>
			<Button
				title='Go Back'
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {

	const catId = navigationData.navigation.getParam('categoryId')
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

	return {
		headerTitle: selectedCategory.title
	}

}

export default CategoryMealsScreen;
