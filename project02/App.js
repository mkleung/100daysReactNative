import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DailyView from "./components/daily-view"

const dailyWeather = [
  {date: "Mon", temp: 61},
  {date: "Tue", temp: 64},
  {date: "Wed", temp: 67},
  {date: "Thu", temp: 63},
  {date: "Fri", temp: 62},
  {date: "Sat", temp: 61},
  {date: "Sun", temp: 69},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>San Francisco</Text>
      <Text style={styles.temp}>Sunday Oct 1</Text>
      <Text>57 degrees</Text>
      <DailyView dailyWeather = {dailyWeather} />
      <Button title="Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  title: {
    color: '#e74c3c',
    fontSize: 36
  },
  
});
