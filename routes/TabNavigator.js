import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeNavigator from "./HomeNavigator";
import EstatisticaNavigator from "./EstatisticaNavigator";
import ConfiguracaoNavigator from "./ConfiguracaoNavigator";

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="EstatisticaNavigator"
        component={EstatisticaNavigator}
        options={{
          tabBarLabel: "Estatística",
        }}
      />
      <Tab.Screen
        name="ConfiguracaoNavigator"
        component={ConfiguracaoNavigator}
        options={{
          tabBarLabel: "Configurações",
        }}
      />
    </Tab.Navigator>
  );
}
