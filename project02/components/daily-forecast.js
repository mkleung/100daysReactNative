import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class DailyForecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.day}>{this.props.dayOfWeek}</Text>
                <Text style={styles.temp}>{this.props.temp}˚</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    day: {

    },
    temp: {
        fontWeight: 'bold'
    }
  });