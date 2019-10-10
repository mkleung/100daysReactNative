import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput = (props) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='Course Goal'
				style={styles.input}
				onChangeText={props.goalInputHandler}
				value={props.enteredGoal}
			/>
			<Button title='ADD' onPress={props.addGoalHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer : {
		flexDirection  : 'row',
		justifyContent : 'space-between',
		alignItems     : 'center'
	},
	input          : {
		borderBottomColor : 'black',
		borderWidth       : 1,
		padding           : 10,
		width             : '90%'
	}
});

export default GoalInput;
