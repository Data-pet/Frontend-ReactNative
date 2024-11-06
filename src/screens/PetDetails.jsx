import { View, Text, ScrollView } from "react-native";
import React from "react";
import FormEditPet from "../sections/Edit Pet/FormEditPet";

const PetDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView
     className="w-full min-h-screen h-auto pb-10 relative">
      <View className="flex justify-start w-full items-start mt-10 p-4">
        <Text className="text-2xl text-primary font-semibold">
          Detalles de la mascota
        </Text>
        <Text className="text-gray-400 mt-1">
          En esta sección podrás ver todos los detalles de la mascota
          <Text className="text-secondary font-semibold"> {item.nombre}.</Text>
        </Text>
        <Text className="text-secondary font-semibold text-3xl mt-2">Identificador: #{item.idMascota}</Text>
      </View>
      <FormEditPet item={item} />
    </ScrollView>
  );
};

export default PetDetails;
