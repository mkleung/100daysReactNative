import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import { Image } from 'react-native';


class CounterApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button_wrapper}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                       <Image
        source={require('../assets/add.png')}
        fadeDuration={0}
        style={styles.button}
      />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 40 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Image
        source={require('../assets/remove.png')}
        fadeDuration={0}
        style={styles.button}
      />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EC645B'
    },
    button_wrapper: {
        flexDirection: 'row', 
        width: 250, 
        height: 100,
        backgroundColor: "#FFF",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 50,
        paddingRight: 20,
        paddingLeft: 20
    },
    button: {
        width: 30,
        height: 30
    }
})