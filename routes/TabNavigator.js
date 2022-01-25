import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

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
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color="blue" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
          tabBarLabel: "Inicio",
          title: false,
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="EstatisticaNavigator"
        component={EstatisticaNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="barschart" size={24} color="blue" />
            ) : (
              <AntDesign name="barschart" size={24} color="black" />
            ),
          tabBarLabel: "Estatística",
          title: false,
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="ConfiguracaoNavigator"
        component={ConfiguracaoNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="setting" size={24} color="blue" />
            ) : (
              <AntDesign name="setting" size={24} color="black" />
            ),
          tabBarLabel: "Configurações",
          title: false,
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
}
