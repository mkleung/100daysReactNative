import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {


	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Course Goal'
					style={styles.input}
					onChangeText={props.goalInputHandler}
					value={props.enteredGoal}
				/>
				<Button title='ADD' onPress={props.addGoalHandler} />
				<Button title="CANCEL" color="red" onPress={props.cancelHandler} />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer : {
		justifyContent : 'center',
		alignItems     : 'center',
		flex           : 1
	},
	input          : {
		borderBottomColor : 'black',
		borderWidth       : 1,
		padding           : 10,
		width             : '90%',
		marginBottom      : 10
	}
});

export default GoalInput;
