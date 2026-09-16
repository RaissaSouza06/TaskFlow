import { Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Botao from "@/components/Botao";

export default function Tarefas() {
    function voltarInicio(){
        router.dismissAll()
        router.push("/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>
            <Botao
                texto="Voltar"
                onPress={router.back}
                cor="#3db05eff"
            />

            <Botao
                texto='Configurações'
                onPress={() => router.push("./configuracoes")}
                cor="#3348eaff"
            />

            <Botao
                texto='Inicio'
                onPress={voltarInicio}
                cor="#ea2f4bff"
            />
        </View>
    )
}