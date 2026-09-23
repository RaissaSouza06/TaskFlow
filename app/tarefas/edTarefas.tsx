import { styles } from "@/styles/global"
import {View, Text, TextInput} from "react-native"

export default function AddTarefas(){
    return(
        <View>
            <Text>Nova Tarefa</Text>
            <TextInput style={styles.campo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    campo: {
        borderWidht:1
    }
})