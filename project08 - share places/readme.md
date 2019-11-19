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


### Access Device Camera

expo install expo-image-picker

expo install expo-permissions


```
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions

const component = () => {

    const verifyPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
        if (result.status !== 'granted') {
            Alert.alert(
                "Insufficient Permissions!",
                "You need to grant camera permissions to use this app",
                [{ text: "OK" }]
            )
            return false
        }
        return true;
    }
    const takeImageHandler = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) { return }
        ImagePicker.launchCameraAsync();
    }
    return (
        <View>
            <Button
                title="Take Image"
                color={Colors.primary}
                onPress={takeImageHandler} />
        </View>
    )
}

```