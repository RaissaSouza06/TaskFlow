import AsyncStorage from '@react-native-async-storage/async-storage'

const CHAVE_TAREFAS = "@taskflow:tarefas"

export async function salvarTarefas(tarefas:any[]){
    try {
        const dados = JSON.stringify(tarefas);
        await AsyncStorage.setItem(CHAVE_TAREFAS, dados)
    } catch(error) {
        console.error("Erro ao salvar as tarefas", error)
    }
}

export async function carregarTarefas(){
    try {
        const dados = await AsyncStorage.getItem(CHAVE_TAREFAS);
        if(!dados){
            return [];
        }
        return JSON.parse(dados)
    } catch(error) {
        console.error("Erro ao carregar as tarefas", error)
    }
}

export async function limparTarefas(){
    try {
        await AsyncStorage.removeItem(CHAVE_TAREFAS);
    } catch(error) {
        console.error("Erro ao limpar as tarefas", error)
    }
}