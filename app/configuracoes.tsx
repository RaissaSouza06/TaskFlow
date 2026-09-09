import {View, Text, Button} from 'react-native';
import { styles } from './styles';
import {router} from 'expo-router'

export default function Configuracoes(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>tela de Configurações</Text>
            <Button
                title='Voltar'
                onPress={router.back}
            />
        </View>
    )
}