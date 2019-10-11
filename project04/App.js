import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(){
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ courseGoals, setCourseGoals ] = useState([]);
	const [ isAddMode, setIsAddMode] = useState(false);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);

	};

	const cancelHandler = () => {
		setIsAddMode(false);
	}

	const addGoalHandler = () => {
		//  spread operator
		// take the coursegoals array, extract all the elements into the new [] array
		// the comma adds a new element
		// enetedgoal is the new element
		// setCourseGoals([...courseGoals, enteredGoal])
		//OR
		setCourseGoals((currentGoals) => [ ...currentGoals, { id: Math.random().toString(), value: enteredGoal } ]);
		setIsAddMode(false);
		setEnteredGoal("")
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		})
	}

	return (
		<View style={styles.screen}>
			<Button title="Add new goal" onPress={() => setIsAddMode(true)} />
			<GoalInput cancelHandler={cancelHandler} visible={isAddMode} goalInputHandler={goalInputHandler} enteredGoal={enteredGoal} addGoalHandler={addGoalHandler} />
			{/* Flatlist give better performance than scrollview */}
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen : {
		padding : 50
	}
});
