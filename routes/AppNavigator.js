import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";
import ImageScreen from "../screens/ImageScreen";
import ImageByIdScreen from "../screens/ImageByIdScreen";

const Stack = createStaticNavigation();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Images" component={ImageScreen} />
                <Stack.Screen name="ImagesId" component={ImageByIdScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;