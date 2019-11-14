import { Platform } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PlacesListScreen from '../screebs/PlacesListScreen'
import PlaceDetailScreen from '../screebs/PlaceDetailScreen'
import newPlaceScreen from '../screebs/newPlaceScreen'
import MapScreen from '../screebs/MapScreen'
import Colors from '../constants/Colors'


const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: newPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundcolor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(PlacesNavigator)