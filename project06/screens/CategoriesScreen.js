import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

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
        </View>
    )
}

export default CategoriesScreen