import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Video = () => {
  const navigation = useNavigation();

  navigation.getParent()?.setOptions({
    tabBarStyle: { display: "none" },
  });

  navigation.setOptions({
    headerShown: true,
    headerLeft: () => (
      <TouchableOpacity
        style={{
          paddingLeft: 12,
        }}
        onPress={() => {
          navigation.navigate("Home", {
            screen: "HomeNavigator",
            params: {
              screen: "Inicio",
            },
          });
          navigation.getParent()?.setOptions({
            tabBarStyle: { display: "flex" },
          });
        }}
      >
        <Ionicons name="ios-chevron-back" size={32} color="#000" />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.container}>
      <Text>Tela com tab desativada</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Video;
