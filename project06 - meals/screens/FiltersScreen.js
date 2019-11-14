import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import FilterSwitch from '../components/FilterSwitch'


const FiltersScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        }
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    // Communicate between navigation and component
    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters</Text>
            <FilterSwitch
                label="Gluten Free"
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose Free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter',
        headerLeft:
            (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}>
                    </Item>
                </HeaderButtons>
            ),
        headerRight:
            (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Save" iconName="ios-save" onPress={() => {
                        navData.navigation.getParam('save')
                    }}>
                    </Item>
                </HeaderButtons>
            ),
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})

export default FiltersScreen