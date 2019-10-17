import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';

function Timer({ interval, style }){
	const pad = (n) => (n < 10 ? '0' + n : n);
	const duration = moment.duration(interval);
	const centiseconds = Math.floor(duration.milliseconds() / 10);
	return (
		<View style={styles.timerContainer}>
			<Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}:</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
		</View>
	);
}

function RoundButton({ title, color, background, onPress }){
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.7}
			style={[ styles.button, { backgroundColor: background } ]}>
			<Text style={[ styles.buttonTitle, { color } ]}>{title}</Text>
		</TouchableOpacity>
	);
}

function Lap({ number, interval }){
	return (
		<View style={styles.lap}>
			<Text style={styles.lapText}>Lap {number}</Text>
			<Timer style={[styles.lapText, styles.lapTimer]} interval={interval} />
		</View>
	);
}

function LapsTable({ laps, timer }){
	return (
		<ScrollView style={styles.scrollView}>
			{laps.map((lap, index) => (
				<Lap
					key={laps.length - index}
					number={laps.length - index}
					interval={index === 0 ? timer + lap : lap}
				/>
			))}
		</ScrollView>
	);
}

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			start : 0,
			now   : 0,
			laps  : []
		};
	}

	start = () => {
		const now = new Date().getTime();
		this.setState({
			start : now,
			now,
			laps  : [ 0 ]
		});

		this.timer = setInterval(() => {
			this.setState({ now: new Date().getTime() });
		}, 100);
  };

  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now
    })

    this.timer = setInterval(() => {
			this.setState({ now: new Date().getTime() });
		}, 100);
  }

  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0
    })
  }
  
  stop = () => {
    clearInterval(this.timer)

    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps

    this.setState({
      laps: [ firstLap + now - start, ...other ],
      start: 0,
      now: 0
    })

  }

  lap = () => {
    const timestamp = new Date().getTime()
    
    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps

    this.setState({
      laps: [0, firstLap + now - start, ...other ],
      start: timestamp,
      now: timestamp
    })
  }

	render() {
		const { now, start, laps } = this.state;
		const timer = now - start;

		return (
			<View style={styles.container}>
				<Timer interval={laps.reduce((total, curr) => total + curr, 0) + timer} style={styles.timer} />
        {laps.length === 0 && (
          <View style={styles.buttonsRow}>
					<RoundButton title='Reset' color='#FFF' background='#7f8c8d' />
					<RoundButton title='Start' color='#FFF' background='#16a085' onPress={this.start} />
				</View>

        )}

        {start > 0 && (
          <View style={styles.buttonsRow}>
					<RoundButton title='Lap' color='#FFF' background='#7f8c8d' onPress={this.lap} />
					<RoundButton title='Stop' color='#FFF' background='#c0392b' onPress={this.stop} />
				</View>
        )
        }


        {laps.length > 0 && start === 0 && (
          <View style={styles.buttonsRow}>
					<RoundButton title='Reset' color='#FFF' background='#7f8c8d' onPress={this.reset} />
					<RoundButton title='Resume' color='#FFF' background='#16a085' onPress={this.resume} />
				</View>
        )
        }
        

				<LapsTable laps={laps} timer={timer} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container   : {
		flex              : 1,
		backgroundColor   : '#1e272e',
		alignItems        : 'center',
		paddingHorizontal : 20,
		paddingTop        : 130
	},
	timer       : {
		color      : '#FFFFFF',
		fontSize   : 76,
    fontWeight : '200',
    width: 120
	},
	button      : {
		width          : 80,
		height         : 80,
		borderRadius   : 40,
		justifyContent : 'center',
		alignItems     : 'center'
	},

	buttonTitle : {
		fontSize : 18
	},

	buttonsRow  : {
		flexDirection  : 'row',
		alignSelf      : 'stretch',
		justifyContent : 'space-between',
		marginTop      : 80,
		marginBottom   : 30
	},

	lapText     : {
		color    : '#FFFFFF',
    fontSize : 18,
    width: 50
  },
  lapTimer: {
    width: 30
  },
	lap         : {
		flexDirection   : 'row',
		justifyContent  : 'space-between',
		borderTopWidth  : 1,
		paddingVertical : 10
	},
	scrollView  : {
		alignSelf : 'stretch'
	},
	fastest     : {
		color : '#2ecc71'
	},
	slowest     : {
		color : '#c0392b'
  },
  timerContainer : {
    flexDirection: 'row'
  }
});
