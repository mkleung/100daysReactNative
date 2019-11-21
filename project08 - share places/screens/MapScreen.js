import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../constants/Colors';
const MapScreen = props => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const mapRegion = {
        latitude: 45.4215,
        longitude: -75.6972,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        });
    };




    let markerCoordinates;

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        };
    }

    const savePickedLocationHandler = useCallback(() => {

        // if (!selectedLocation) {
        //     return;
        // }
        props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
    }, [])

    useEffect(() => {
        props.navigation.setParams({ saveLocation: savePickedLocationHandler })
    }, [savePickedLocationHandler])



    return (
        <MapView
            style={styles.map}
            region={mapRegion}
            onPress={selectLocationHandler}
        >
            {markerCoordinates && (
                <Marker title="Picked Location" coordinate={markerCoordinates} />
            )}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS === "android" ? 'white' : Colors.primary
    }
});

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('saveLocation')
    return {
        headerRight: <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
            <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
    }
}

export default MapScreen;
