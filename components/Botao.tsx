import { Pressable, StyleSheet, Text } from "react-native";

interface BotaoProps {
  texto: string;
  onPress: () => void;
  cor?: string;
}

export default function Botao({ texto, onPress, cor = '#ffffff'}: BotaoProps) {
  // com o any volta a funcionar como se fosse js, sem tipagem, declarando com interface, eu crio um tipo para minha variável
  return (
    <Pressable
      style={({ pressed }) => [
        styles.botao,
        pressed && styles.botaoPressionado,
        {backgroundColor: cor}
      ]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  botaoPressionado: {
    opacity: 0.8,
  },
});