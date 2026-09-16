import Botao from "@/components/Botao";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
//import Caixa from "@/components/Caixa";

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  function iniciarAplicacao() {
    setIniciado(true);
    router.push("/tarefas");
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>TaskFlow</Text>

          {iniciado ? (
            <Text style={styles.descricao}>Bem vindo as TaskFlow!</Text>
          ) : (
            <Text style={styles.descricao}>
              Organize sua tarefas de forma simples
            </Text>
          )}
          {/* <Button
            title="configurações"
            onPress={() => router.push("/configuracoes")}
          /> */}
          <Botao
            texto={iniciado ? "Continuar" : "Começar"}
            onPress={iniciarAplicacao}
            cor="#174972ff"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
