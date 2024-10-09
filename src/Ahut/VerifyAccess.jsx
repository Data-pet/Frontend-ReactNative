import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Loading/LoadingSpinner";

const VerifyAccess = ({ children }) => {
  const navigation = useNavigation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);  

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login"); // Redirige a la pantalla de inicio de sesión si no está autenticado
    }
  }, [isAuthenticated, navigation]);

  // Renderiza los hijos solo si está autenticado
  if (isAuthenticated) {
    return <>{children}</>; // Renderiza los componentes hijos si está autenticado
  }

  // Puedes devolver un componente de carga o vacío mientras se verifica la autenticación
  return <LoadingSpinner message="Verificando autenticación..." />;
};

export default VerifyAccess;
