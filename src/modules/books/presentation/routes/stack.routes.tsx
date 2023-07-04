import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { HomeDependenciesProvider } from "../di/HomeDependenciesContext";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const BookStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="main">
                {() => (
                    <NativeBaseProvider>
                        <HomeDependenciesProvider>
                            <Home />
                        </HomeDependenciesProvider>
                    </NativeBaseProvider>
                )}
            </Screen>
        </Navigator>
    );
};
