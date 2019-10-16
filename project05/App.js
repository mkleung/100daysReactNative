import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setRounds] = useState(0);
  const [gameStatus, setGameStatus] = useState("")

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
    />;
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGameStatus("start");
    Keyboard.dismiss();
  }

  const gameOverHandler = () => {
    // setUserNumber();
    setGameStatus("over");
  }

  const reset = () => {
    setGameStatus("");
    setRounds(0);
    setUserNumber();
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number Game" userNumber={userNumber} guessRounds={guessRounds} gameStatus={gameStatus} />
      {gameStatus === "" && <StartGameScreen startGameHandler={startGameHandler} />}
      {gameStatus === "start" && <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} setRounds={setRounds} />}
      {gameStatus === "over" && <GameOverScreen reset={reset} guessRounds={guessRounds} userNumber={userNumber} />}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  }
});
