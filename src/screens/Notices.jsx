import { View, Text, Image } from "react-native";
import perritoGatoNoticia from "../../assets/perrito y gato viendo noticias.png";
import NavBar from "../components/nav bar/NavBar";
import guembe from "../../assets/guembe.png";
import guembeRosa from "../../assets/guembeRosa.png";
import guembeBlanco from "../../assets/guembeBlanco.png";
const Notices = () => {
  return (
    <View className="w-full min-h-screen h-auto p-4 relative">
      <View className="w-full mt-10">
        <Text className="text-primary font-semibold text-2xl">
          Sección de noticias
        </Text>
        <Text className="text-gray-400 mt-2">
          Esta Sección aún se encuentra en desarrollo, proximamente se agregará
          la sección de noticias
        </Text>
        <View className="flex flex-col justify-center items-center mt-36">
          <Image
            source={perritoGatoNoticia}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
          <Text className="text-secondary text-lg text-center mt-2">
            Proximamente podras encontrar noticias relevantes para tí y tus
            amigos
          </Text>
        </View>
      </View>
      <NavBar />
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
    </View>
  );
};

export default Notices;
