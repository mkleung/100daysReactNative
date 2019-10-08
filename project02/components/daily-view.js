import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DailyForecast from './daily-forecast'

export default class DailyView extends Component {
    render () {

      const views = this.props.dailyWeather.map((day, i) => {
          return <DailyForecast key={i} dayOfWeek={day.date} temp={day.temp} />
      })
        return (
             <View style={styles.forecast}>
             {views}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    forecast: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f00',
        width: '100%'
      },
      forecastTemp: {
        fontSize: 24,
        fontWeight: 'bold'
      }
})