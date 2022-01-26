import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Sobre() {

  const { params } = useRoute();
  return (
    <View style={styles.container}>
          <Text>Página Sobre</Text>
          <Text>Meu nome é {params?.nome}</Text>
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
