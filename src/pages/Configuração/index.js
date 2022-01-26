import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Configuracao() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Configurações</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "80%",
          height: 30,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
        onPress={() => {
          navigation.navigate("Info");
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          Ir para a o perfil 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "80%",
          height: 30,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
        onPress={() => {
          navigation.navigate("Sobre",{
            nome: 'Adejar',
          });
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          Ir para o sobre
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "80%",
          height: 30,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
        onPress={() => {
          navigation.navigate("Publicacao");
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          Ir para uma publicações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "80%",
          height: 30,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
        onPress={() => {
          navigation.navigate("PublicacaoConfig");
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          Ir para uma publicação nas configurações
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
