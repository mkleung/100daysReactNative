import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const styles = StyleSheet.create({
	screen : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

const renderGridItem = (itemData) => {
	return (
		<View style={styles.gridItem}>
			<Text>{itemData.item.title}</Text>
		</View>
	);
};

const CategoriesScreen = (props) => {
	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;
