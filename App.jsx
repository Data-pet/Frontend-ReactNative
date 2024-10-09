import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import Toast from 'react-native-toast-message'; // Importa Toast

// Styles
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

const ProtectedRoutes = () => {
  return (
    <VerifyAccess>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </VerifyAccess>
  );
};
