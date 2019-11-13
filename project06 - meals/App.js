import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens, enableScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator'

import { createStore, combineReducers } from 'redux'
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
	meals: mealsReducer
})

const store = createStore(rootReducer);



if (Platform.OS === "android") {
	enableScreens()
}
else {
	useScreens()
}

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
	}
	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
