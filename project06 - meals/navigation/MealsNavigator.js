import React, { Component } from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/Colors'
import FavouritesScreen from '../screens/FavouritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import FiltersScreen from '../screens/FiltersScreen'

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


const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},
    {
        navigationOptions: {
            drawerLabel: 'Filters!'
        },
        defaultNavigationOptions: defaultStackNavOptions
    })



const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
}
);



export default createAppContainer(MainNavigator)