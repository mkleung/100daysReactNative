import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

import { useSelector } from 'react-redux'


const FavouritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals);

    return (
        <MealList listData={availableMeals} navigation={props.navigation} />
    )
}


FavouritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites',
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}>
            </Item>
        </HeaderButtons>)
    }

}


export default FavouritesScreen