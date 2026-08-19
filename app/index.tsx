import {StyleSheet, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>TaskFlow</Text>
                <Text>Organize sua tarefa de forma simples</Text>
            </View>
        </SafeAreaView>
    );
}
