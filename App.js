import MainNavigator from "./navigation/MainNavigator";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
