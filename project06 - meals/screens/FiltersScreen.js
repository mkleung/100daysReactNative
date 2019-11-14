import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import FilterSwitch from '../components/FilterSwitch'
import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/meals'

const FiltersScreen = props => {
    const { navigation } = props;
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {

            isVegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters))

    }, [isVegetarian, dispatch])

    // Communicate between navigation and component
    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters</Text>

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