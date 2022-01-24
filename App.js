import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from './routes/RootNavigation'

import AppNavigator from "./routes/AppNavigator";

export default function App() {
  return (
    <NavigationContainer ref={RootNavigation}>
      <AppNavigator/>
    </NavigationContainer>
  );
}
