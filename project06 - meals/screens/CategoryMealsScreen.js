import React from 'react'
import { View,Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Button title="Go to meals" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail' })}} />
        </View>
    )
}

export default CategoryMealsScreen