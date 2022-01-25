import { createStackNavigator  } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

import Estatistica from "../src/pages/Estatistica";
import EstatisticaComum from "../src/pages/EstatisticaComum";
import EstatistaPublicidade from "../src/pages/EstatisticaPublicidade";

export default function EstatisticaNavigator() {
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
              screen: "EstatisticaNavigator",
              params: {
                screen: "Estatistica",
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
      <Stack.Screen name="Estatistica" component={Estatistica}  options={{
        title:false
      }}/>
      <Stack.Screen
        name="EstatisticaComum"
        component={EstatisticaComum}
        options={options({
          screen: "Estatistica",
        })}
      />
      <Stack.Screen
        name="EstatistaPublicidade"
        component={EstatistaPublicidade}
        options={options({
          screen: "Estatistica",
        })}
      />
    </Stack.Navigator>
  );
}
