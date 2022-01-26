import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView>
    <View
      style={{
        height: 50,
        width: "100%",
          backgroundColor: '#686868',
          alignItems: 'center',
        justifyContent:'center'
      }}
    >
      <Text>Header</Text>
    </View>
    </SafeAreaView>

  );
}
