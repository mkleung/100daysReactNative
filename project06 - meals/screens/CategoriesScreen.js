import React from 'react'
import { View,Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const CategoriesScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
            <Button title="Go to meals" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals' })}} />
        </View>
    )
}

export default CategoriesScreen