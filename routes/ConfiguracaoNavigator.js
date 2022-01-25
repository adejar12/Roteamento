import { createStackNavigator  } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

import SobreSreen from "../src/pages/Sobre";
import InfoSreen from "../src/pages/Info";
import PerfilSreen from "../src/pages/Perfil";
import ConfiguracaoSreen from "../src/pages/Configuração";

export default function ConfiguracaoNavigator() {
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
              screen: "ConfiguracaoNavigator",
              params: {
                screen: "Configuracao",
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
      <Stack.Screen name="Configuracao" component={ConfiguracaoSreen}  options={{
        title:false
      }} />
      <Stack.Screen
        name="Perfil"
        component={PerfilSreen}
        options={options({
          screen: "Configuracao",
        })}
      />
      <Stack.Screen
        name="Info"
        component={InfoSreen}
        options={options({
          screen: "Configuracao",
        })}
      />
      <Stack.Screen
        name="Sobre"
        component={SobreSreen}
        options={options({
          screen: "Configuracao",
        })}
      />
    </Stack.Navigator>
  );
}
