import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const FavouritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>FavouritesScreen</Text>
        </View>
    )
}

export default FavouritesScreen