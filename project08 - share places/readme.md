### Step 1: Installation

npm install --save react-navigation

expo install react-native-gesture-handler react-native-reanimated

npm install --save react-navigation-stack


### Step 2: Create Navigation

Inside navigation/AppNavigator.js

```
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen'
import Colors from '../constants/Colors'

const AppNavigator = createStackNavigator({
    Places: HomeScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})
export default createAppContainer(AppNavigator )
```


### Step 3: Add title inside Component

Inside screens/HomeScreen.js

```
HomeScreen.navigationOptions = {
    headerTitle: 'Home'
}
```


### Step 4:Create a header button

npm install --save react-navigation-header-buttons

npm install --save @expo/vector-icons


Inside components/HeaderButton.js

```
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'

const CustomerHeaderButton = props => {
    return (
        <HeaderButton {...props}
            IonComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primary}
        />
    )
}
export default CustomerHeaderButton;
```


