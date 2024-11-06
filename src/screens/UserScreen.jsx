import { View, Text, Image } from "react-native";
import React from "react";
import NavBar from "../components/nav bar/NavBar";
import guembe from "../../assets/guembe.png";
import guembeRosa from "../../assets/guembeRosa.png";
import guembeBlanco from "../../assets/guembeBlanco.png";
import { useSelector } from "react-redux";
const UserScreen = () => {
  const user = useSelector((state) => state.user.user);
  const primerasLetras  = user.name.slice(0, 2).toUpperCase();

  return (
    <View className="w-full min-h-screen h-auto relative">
      <View className="flex flex-col w-full h-auto mt-10 p-4">
        <Text className="text-2xl text-primary font-semibold">
          Detalles de tú perfil
        </Text>
        <Text className="text-gray-400 mt-1 mb-4">
          En esta sección podrás ver todos los detalles de usuario y algunas
          funcioanlidades.
        </Text>

        <View className="flex justify-center items-center">
          <View className="w-20 h-20 rounded-full bg-accent justify-center items-center">
            <Text className="text-white uppercase text-2xl font-bold">
              {primerasLetras}
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-between mb-4 pb-4 border-b border-gray-400/25">
          <Text className="font-semibold text-base text-secondary">
            Nombre completo:
          </Text>
          <Text className="font-semibold text-base text-primary">
            {user.name}, {user.apellido}
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-4 pb-4 border-b border-gray-400/25">
          <Text className="font-semibold text-base text-secondary">DNI:</Text>
          <Text className="font-semibold text-base text-primary">
            {user.DNI}
          </Text>
        </View>

        <View className="flex flex-row justify-between mb-4 pb-4 border-b border-gray-400/25">
          <Text className="font-semibold text-base text-secondary">
            Correo:
          </Text>
          <Text className="font-semibold text-base text-primary">
            {user.correo}
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-4 pb-4 border-b border-gray-400/25">
          <Text className="font-semibold text-base text-secondary">
            Telefono:
          </Text>
          <Text className="font-semibold text-base text-primary">
            {user.telefono}
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-4 pb-4 border-b border-gray-400/25">
          <Text className="font-semibold text-base text-secondary">
            Dirección actual:
          </Text>
          <Text className="font-semibold text-base text-primary">
            {user.direccion.Barrio}, {user.direccion.Calle},{" "}
            {user.direccion.Ciudad}
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-4 pb-4 border-b border-gray-400/25">
          <Text className="font-semibold text-base text-secondary">
            Tipo de usuario:
          </Text>
          <Text className="font-semibold text-base text-primary">
            {user.tipoUsuario}
          </Text>
        </View>
        <Text className="text-info mt-1 mb-4">
          Nota: Estamos trabajando en mejorar esta sección. Pronto tendrás
          nuevas funcionalidades y una mejor experiencia.
        </Text>
      </View>
      <Image
        className="absolute -bottom-10 -right-48 -z-10"
        style={{ width: 350, height: 250, resizeMode: "contain" }}
        source={guembe}
      />
      <Image
        className="absolute -bottom-10 -right-48 -z-10"
        style={{ width: 330, height: 220, resizeMode: "contain" }}
        source={guembeRosa}
      />
      <Image
        className="absolute -bottom-10 -left-44 -z-10"
        style={{
          width: 350,
          height: 250,
          resizeMode: "contain",
          transform: [{ scaleX: -1 }],
        }}
        source={guembe}
      />
      <Image
        className="absolute -bottom-10 -left-44 -z-10"
        style={{
          width: 330,
          height: 220,
          resizeMode: "contain",
          transform: [{ scaleX: -1 }],
        }}
        source={guembeBlanco}
      />
      <NavBar />
    </View>
  );
};

export default UserScreen;
