import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>Rounds: {props.guessRounds}</Text>
            <View style={styles.restart}>
                <Button title="Restart" onPress={props.reset} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 40
    },
    restart: {
        marginTop: 40
    }
});

export default GameOverScreen;
