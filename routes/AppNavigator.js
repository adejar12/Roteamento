import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Stack = createStackNavigator();
import TabNavigator from "./TabNavigator";
import Publicacao from "../src/pages/Publicação";

export default function AppNavigator() {

    const navigation = useNavigation();

    const options = (route) => {
        return {
          headerTitle: "",
          headerShown: true,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 12,
              }}
              onPress={() =>
                navigation.goBack()
              }
            >
              <Ionicons name="ios-chevron-back" size={32} color="#000" />
            </TouchableOpacity>
          ),
        };
      };

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
      <Stack.Screen
        name="PublicacaoExterna"
        component={Publicacao}
        options={options()}
      />
    </Stack.Navigator>
  );
}
