import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ir para a página sobre</Text>
      <Button title="Sobre"
        onPress={() => navigation.navigate('Sobre',{nome:'Adejar'})}
      />

      <Text>Ir para a  Página Home</Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
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
