import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Success! The correct number is {props.userNumber} </Text>
                <Text>Rounds: {props.guessRounds}</Text>
                <View style={styles.restart}>
                    <Button color={Colors.accent} title="Restart" onPress={props.reset} />
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        width: 500,
        maxWidth: '80%',
        alignItems: 'center',
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 40
    },
    restart: {
        marginTop: 40,
        width: '100%'
    },
    title: {
        fontWeight: 'bold'
    }
});

export default GameOverScreen;
