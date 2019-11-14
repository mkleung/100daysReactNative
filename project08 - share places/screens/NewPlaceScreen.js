import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NewPlaceScreen = props => {
    return (
        <View>
            <Text>NewPlaceScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default NewPlaceScreen