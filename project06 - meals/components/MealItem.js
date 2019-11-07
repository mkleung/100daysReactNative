import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View >
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<Text>{props.title}</Text>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealRow    : {
		flexDirection : 'row'
	},
	mealItem   : {
		height          : 200,
		width           : '100%',
		backgroundColor : '#CCC'
	},
	mealHeader : {
		height : '80%'
	},
	mealDetail : {
        height : '20%',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    }
});

export default MealItem;
