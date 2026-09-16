import {View, Text} from 'react-native';
import { styles } from './styles';
import {router} from 'expo-router'
import Botao from '@/components/Botao';

export default function Configuracoes(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>tela de Configurações</Text>
            <Botao
                texto='Voltar'
                onPress={router.back}
                cor="#e3e33dff"
            />
        </View>
    )
}