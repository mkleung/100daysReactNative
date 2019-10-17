import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState();

    // validation
    const numberInputHandler = inputText => {
        // remove underscore, comma
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    // const confirmInputHandler = () => {
    //     const chosenNumber = parseInt(enteredValue);
    //     if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
    //         Alert.alert('Invalid Number!', 'Number must be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
    //         return;
    //     }
    //     setConfirmed(true);
    //     setEnteredValue('')
    //     setSelectedNumber(parseInt(enteredValue));
    //     Keyboard.dismiss();
    // }

    // let confirmedOutput;
    // if (confirmed) {
    //     confirmedOutput = (
    //         <Card style={styles.summaryContainer}>
    //             <Text>You selected: </Text>
    //             <NumberContainer>{selectedNumber}</NumberContainer>
    //             <Button title="START" onPress={() => props.onStartGame(selectedNumber)} />
    //         </Card>
    //     )
    // }

    const startGameHandler = () => {
        props.startGameHandler(enteredValue)
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>

                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.title}>Select number for Computer to guess</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            maxLength={2}
                            value={enteredValue}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={[{ width: "100%" }]}>
                                <Button title="START" color={Colors.primary} onPress={startGameHandler} />
                            </View>
                            <View style={[{ width: "100%" }]}>
                                <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                            </View>
                        </View>
                    </View>
                </Card>

            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 40
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 500,
        maxWidth: '80%',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 120,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        width: 80,
        backgroundColor: Colors.primary,
    },
    input: {
        width: '100%',
        height: 50,
        textAlign: "center"
    }
});

export default StartGameScreen;