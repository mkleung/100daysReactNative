import React, { Component } from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/Colors'
import FavouritesScreen from '../screens/FavouritesScreen'
import { Ionicons } from '@expo/vector-icons'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'red'
    }
}
)

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Restaurant',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Ionicons name="ios-restaurant" size={25} color={tintColor} />;
            },
        }
    },
    Favorites: {
        screen: FavouritesScreen,
        tabBarLabel: 'Favorites!',
        navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Ionicons name="ios-star" size={25} color={tintColor} />;
            },
        }
    },
}, {
    tabBarOptions: {
        text: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator)