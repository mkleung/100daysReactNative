import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/Colors'
import FavouritesScreen from '../screens/FavouritesScreen'

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

// const MealsFavTabNavigator = createBottomTabNavigator({
//     Meals: MealsNavigator,
//     Favorites: FavouritesScreen
// });


const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { screen: MealsNavigator },
    Favorites: { screen: FavouritesScreen },
});

export default createAppContainer(MealsFavTabNavigator)