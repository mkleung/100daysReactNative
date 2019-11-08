import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>FiltersScreen</Text>
        </View>
    )
}

export default FiltersScreen