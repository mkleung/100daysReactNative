import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setRounds] = useState(0);
  const [gameStatus, setGameStatus] = useState("")

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGameStatus("start");
    Keyboard.dismiss();
  }

  const gameOverHandler = () => {
    setUserNumber();
    setGameStatus("over");
  }

  const reset = () => {
    setGameStatus("");
    setRounds(0);
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number Game" userNumber={userNumber} guessRounds={guessRounds} gameStatus={gameStatus} />
      {gameStatus === "" && <StartGameScreen startGameHandler={startGameHandler} />}
      {gameStatus === "start" && <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} setRounds={setRounds} />}
      {gameStatus === "over" && <GameOverScreen reset={reset} guessRounds={guessRounds} />}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
