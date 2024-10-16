import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "react-native-vector-icons/AntDesign";
import BoxIcons from "react-native-vector-icons/Feather";
import Location from "react-native-vector-icons/Entypo";
pedidos = [
  {
    id: 1,
    name: "Dog",
    image:
      "https://images.unsplash.com/photo-1564872755-a0b3b1b0f1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Cat",
    image:
      "https://images.unsplash.com/photo-1564872755-a0b3b1b0f1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Bird",
    image:
      "https://images.unsplash.com/photo-1564872755-a0b3b1b0f1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
const Home2 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="w-full min-h-screen h-auto">
        {/*Esto es el header de la pantalla*/}
        {/*Padre*/}
        <View className="w-full flex flex-col bg-primary pt-4 pb-8 px-4 rounded-b-3xl shadow-lg mb-4">
           {/*header con el titulo y icono */}
          <View className="w-full flex flex-row justify-between items-center">
            <Text className="text-white text-2xl font-bold">Pedidos</Text>
            <View className="flex flex-row items-center gap-2">
              <Image
                source={{
                  uri: "https://d2kf8ptlxcina8.cloudfront.net/8ADWVBHPEK-preview.png",
                }} // Cambia esto por la imagen correcta
                className="w-20 h-20 rounded-full"
              />
            </View>
          </View>
          
          <View className="flex flex-row items-center justify-between mt-2">
            <TouchableOpacity className="mr-1 bg-white w-1/2 rounded-full px-3 py-3 justify-center items-center">
              <Text className="text-primary text-base font-bold">
                Completados
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="ml-1 bg-secondary w-1/2 rounded-full px-3 py-3 justify-center items-center">
              <Text className="text-white text-base font-bold">Nuevos</Text>
            </TouchableOpacity>
          </View>
          
          <View className="bg-white/40 w-full rounded-full px-4 py-5 justify-center items-start mt-4 relative">
            <Search
              name="search1"
              size={25}
              color="#ffff"
              className="absolute top-5 left-4"
            />
            <TextInput
              placeholder="Escribe tu pedido"
              className="pl-10 text-white font-semibold"
            />
          </View>
        </View>
        {/*Esto serán las cards de los pedidos, idealmente debe ser componente para listar*/}
        <View className="w-full h-auto p-4 my-4 rounded-3xl bg-white/80 flex flex-row justify-between items-center">
          <View className="flex justify-center items-center mr-6">
            <BoxIcons
              name="box"
              size={35}
              color="#fff"
              className="top-3 left-3 p-5 bg-black rounded-full"
            />
          </View>
          <View className="flex flex-col justify-start items-start w-3/4 h-auto">
            <View className="w-full flex flex-row justify-between items-center">
              <Text className="text-orange-300 font-bold text-lg ">
                1 Producto
              </Text>
              <Text className="bg-orange-300/25 p-2 rounded-full text-orange-300 font-bold">
                En camino
              </Text>
            </View>
            <View className="w-full flex justify-center items-start">
              <Text className="text-primary font-extrabold text-2xl">
                Pedido #0001
              </Text>
            </View>
            <View className="w-full flex flex-row justify-between items-center">
              <View className="flex w-full flex-row items-center">
                <Location
                  name="location-pin"
                  className="-ml-2"
                  size={30}
                  color="#000000"
                />
                <Text className="text-primary text-sm font-bold">
                  Visparo | Juan Carlos
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home2;
