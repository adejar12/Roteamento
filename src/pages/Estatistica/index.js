import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Estatistica() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Estatistica</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "80%",
          height: 30,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 80,
        }}
        onPress={() => {
          navigation.navigate("EstatisticaComum");
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          Ir para a estatistica 
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
