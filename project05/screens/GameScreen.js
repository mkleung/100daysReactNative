import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;
    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return random;
    }
}



const GameScreen = props => {
    const [computerGuess, setComputerGuess] = useState(generateRandomBetween(1, 100, props.userNumber));

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // const { userNumber, gameOverHandler } = props;
    // useEffect(() => {
    //     if (computerGuess === userNumber) {
    //         console.log("game over");
    //     }

    // }, [userNumber, gameOverHandler, computerGuess, rounds]);

    // const nextGuessHandler = (direction) => {
    //     if (
    //         (direction === 'lower' && computerGuess < props.userNumber) ||
    //         (direction === 'greater' && computerGuess > props.userNumber)) {
    //         Alert.alert('Dont lie', 'This is wrong', [{ text: 'Sorry', style: 'cancel' }]);
    //         return;
    //     }
    //     if (direction === 'lower') {
    //         currentHigh.current = computerGuess;
    //     } else {
    //         currentLow.current = computerGuess;
    //     }

    //     const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, computerGuess);
    //     setComputerGuess(nextNumber);

    //     setRounds(curRounds => curRounds + 1)

    // }

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && computerGuess < props.userNumber) ||
            (direction === 'greater' && computerGuess > props.userNumber)
        ) {
            Alert.alert('Error', 'Pick another choice', [{ text: 'ok', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = computerGuess;
        } else {
            currentLow.current = computerGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, computerGuess);
        setComputerGuess(nextNumber);

        if (parseInt(nextNumber) === parseInt(props.userNumber)) {
            props.gameOverHandler();
        }
        props.setRounds(curRounds => curRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <NumberContainer>{computerGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Text>Is the Computer's Guess:</Text>
                <View style={styles.buttons}>
                    <Button title="Lower?" onPress={nextGuessHandler.bind(this, 'lower')}></Button>
                    <Button title="Greater?" onPress={nextGuessHandler.bind(this, 'greater')}></Button>
                </View>

            </Card>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        textAlign: 'center'
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default GameScreen;