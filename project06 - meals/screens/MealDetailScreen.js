import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>TMealDetailScreenn</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

export default MealDetailScreen