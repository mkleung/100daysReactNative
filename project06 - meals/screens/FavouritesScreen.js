import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'
import { Platform } from '@unimodules/core';

const FavouritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <Text>No Favorite Meals Found</Text>
        </View>
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouritesScreen