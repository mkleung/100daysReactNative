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

CAMERA
=======

### Access Device Camera

expo install expo-image-picker

expo install expo-permissions

expo install expo-file-system


Components/ImagePicker.js

```
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions

const component = () => {
    const [pickedImage, setPickedImage] = useState()
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
        const image = await ImagePicker.launchCameraAsync({
            allowEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        setPickedImage(image.uri)
        props.onImageTaken(image.uri)
    }
    return (
        <View>
            {!pickedImage ? (<Text>No Image picked</Text>) : (<Image style=    {styles.image} source={{ uri: pickedImage }} />)}
            <Button
                title="Take Image"
                color={Colors.primary}
                onPress={takeImageHandler} />
        </View>
    )
}

```

### Take New Place Screen 

```

const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('')
    const [selectedImage, setSelectedImage] = useState();

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }

    const titleChangeHandler = text => {
        setTitleValue(text)
    }

    const dispatch = useDispatch();

    const savePlaceHandler = () => {
        console.log(titleValue)
        dispatch(placesActions.addPlace(titleValue, selectedImage));
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue} />
                <ImagePicker onImageTaken={imageTakenHandler} />
                <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    )
}
```


### List images Screen


```
const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places)
    return (
        <FlatList
            data={places}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData, index) =>
                <PlaceItem
                    key={index}
                    image={itemData.item.imageUri}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate("PlaceDetail",
                            { placeTitle: itemData.item.title, placeId: itemData.item.id })
                    }} />} />
    )
}
```