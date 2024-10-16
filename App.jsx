import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Redux
import { Provider } from "react-redux";
import { store } from "./src/redux/store.js";

// Screens
import Home from "./src/screens/Home";
import Register from "./src/screens/Register.jsx";
import Login from "./src/screens/Login.jsx";

// Auth
import VerifyAccess from "./src/Ahut/VerifyAccess.jsx";

// Toast
import Toast from "react-native-toast-message";

// Styles
import { NativeWindStyleSheet } from "nativewind";
import Home2 from "./src/screens/Home2.jsx";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            {/* Rutas protegidas */}
            <Stack.Screen name="ProtectedRoutes" component={ProtectedRoutes} />
          </Stack.Navigator>

          {/* Componente Toast global */}
          <Toast />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const ProtectedRoutes = () => {
  return (
    <VerifyAccess>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </VerifyAccess>
  );
};
