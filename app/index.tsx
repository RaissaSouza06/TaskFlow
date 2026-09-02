import { Image, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import {useState} from 'react';

// Define e exporta a função principal da tela Home do aplicativo
export default function Home() {
  
  // Função executada quando o botão é pressionado, exibindo uma mensagem no console
  function iniciarAplicacao() {
    console.log("O botão foi pressionado!")
  }
  
  return (
    // SafeAreaView protege os limites da tela para o conteúdo não ficar escondido sob o notch ou barras
    <SafeAreaView style={styles.safeArea}>
      
      {/* View principal que funciona como container (div) para centralizar e organizar o layout */}
      <View style={styles.container}>
        
        {/* View que agrupa os elementos visuais formando um cartão central */}
        <View style={styles.card}>
          
          {/* Componente Image para exibir a logo do aplicativo de forma contida */}
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          
          {/* Componente Text obrigatório para exibir o título principal do app */}
          <Text style={styles.titulo}>TaskFlow</Text>

          {/* Componente Text para exibir a frase descritiva logo abaixo do título */}
          <Text style={styles.descricao}>
            Organize sua tarefas de forma simples
          </Text>

          {/* Pressable é o componente interativo usado para criar botões customizados */}
          <Pressable
            onPress={iniciarAplicacao} // Aciona a função criada acima quando o botão é tocado
            style={({ pressed }) => [
              styles.botao, // Aplica o estilo padrão do botão
              pressed && styles.botaoPressionado, // Aplica estilo extra se estiver sendo pressionado no momento
            ]}
          >
            {({ pressed }) => (
              // Text interno do botão que muda de forma dinâmica usando um operador ternário
              <Text style={styles.textoBotao}>
                {pressed ? "Carregando..." : "Começar"}
              </Text>
            )}
          </Pressable>
          
        </View>
      </View>
    </SafeAreaView>
  );
}