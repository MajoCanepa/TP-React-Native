import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Inicio"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Drawer.Screen
              name="Contador"
              component={CounterScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="counter"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Login"
              component={LoginScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="login"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
