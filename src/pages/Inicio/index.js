import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Página Inicio</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Publicacao");
        }}
      >
        <Text> Ir para a publicação Interna</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PublicacaoExterna");
        }}
      >
        <Text> Ir para a Publicação Externa</Text>
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
