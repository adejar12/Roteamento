import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../src/components/Header";

const Stack = createStackNavigator();

import PublicacaoScreen from "../src/pages/Publicação";
import InicioScreen from "../src/pages/Inicio";
import Video from "../src/pages/Video";

export default function HomeNavigator() {
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
            navigation.navigate("Home", {
              screen: "HomeNavigator",
              params: {
                screen: "Inicio",
              },
            })
          }
        >
          <Ionicons name="ios-chevron-back" size={32} color="#000" />
        </TouchableOpacity>
      ),
    };
  };

  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#FFF" } }}>
      <Stack.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          title: false,
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Publicacao"
        component={PublicacaoScreen}
        options={options()}
      />
      <Stack.Screen name="Video" component={Video} options={options()} />
    </Stack.Navigator>
  );
}
