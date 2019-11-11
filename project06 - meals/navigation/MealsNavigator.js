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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'red'
}

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
    defaultNavigationOptions: defaultStackNavOptions
}
)

const FavNavigator = createStackNavigator({
    Favorites: FavouritesScreen,
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Restaurant',
            // tabBarIcon: ({ focused, horizontal, tintColor }) => {
            //     return <Ionicons name="ios-restaurant" size={25} color={tintColor} />;
            // },
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                )
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        tabBarLabel: 'Favorites!',
        navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Ionicons name="ios-star" size={25} color={tintColor} />;
            },
        }
    },
}

const MealsFavTabNavigator =
    Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        // shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    text: Colors.accentColor
                }
            });

export default createAppContainer(MealsFavTabNavigator)