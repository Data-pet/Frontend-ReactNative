import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FadeInDown } from "react-native-reanimated";
import NavBar from "../components/nav bar/NavBar";
import ToastAddYourPet from "../components/toast/ToastAddYourPet";
import Header from "../components/header/Header";
import NotFoundPets from "../components/notFound/NotFoundPets";
import Slider from "../components/slider/Slider";
import guembe from "../../assets/guembe.png";
import guembeRosa from "../../assets/guembeRosa.png";
import guembeBlanco from "../../assets/guembeBlanco.png";
import { setMascotas } from "../redux/reducers/petsSlice";
import { mascotasUsuario } from "../api/pets";
import LoadingAloneText from "../Loading/LoadingAloneText";
export default function Home() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.mascotas);
  const idUsuario = useSelector((state) => state.user.user.idUsuario);
  //console.log(pets);
  useEffect(() => {
    const obtenerMascotas = async () => {
      try {
        setLoading(true);
        const res = await mascotasUsuario(idUsuario);
        dispatch(setMascotas(res));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    obtenerMascotas();
  }, []);
  return (
    <View className="w-full min-h-screen h-auto relative">
      <View
        entering={FadeInDown.delay(1000).springify()}
        className="h-full w-full"
      >
        <Header />
        <ToastAddYourPet />
        {loading ? (
          <View className="mt-10">
            <LoadingAloneText message="Cargando mascotas..." />
          </View>
        ) : (
          <View>
            {!pets || pets.length === 0 ? (
              <NotFoundPets />
            ) : (
              <Slider data={pets} />
            )}
          </View>
        )}

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
      <NavBar />
    </View>
  );
}
