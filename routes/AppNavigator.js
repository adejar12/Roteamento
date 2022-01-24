import { createStackNavigator  } from "@react-navigation/stack";

const Stack = createStackNavigator();
import TabNavigator from "./TabNavigator";

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: "#f0f0f0",
        },
        headerTintColor: "#f0f0f0",
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
