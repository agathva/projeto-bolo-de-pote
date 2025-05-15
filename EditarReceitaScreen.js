import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditarReceitaScreen({ route, navigation }) {
  const { index } = route.params;
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  useEffect(() => {
    const carregar = async () => {
      const data = await AsyncStorage.getItem('receitas');
      const lista = data ? JSON.parse(data) : [];
      const receita = lista[index];
      setNome(receita.nome);
      setIngredientes(receita.ingredientes);
      setModoPreparo(receita.modoPreparo);
    };
    carregar();
  }, []);

  const salvarEdicao = async () => {
    if (!nome || !ingredientes || !modoPreparo) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const data = await AsyncStorage.getItem('receitas');
    const lista = data ? JSON.parse(data) : [];
    lista[index] = { nome, ingredientes, modoPreparo };
    await AsyncStorage.setItem('receitas', JSON.stringify(lista));
    navigation.navigate('Detalhes', { index });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome do bolo" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Ingredientes" value={ingredientes} onChangeText={setIngredientes} multiline />
      <TextInput style={styles.input} placeholder="Modo de preparo" value={modoPreparo} onChangeText={setModoPreparo} multiline />
      <Button title="Salvar alterações" onPress={salvarEdicao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { backgroundColor: '#eee', padding: 10, marginVertical: 8, borderRadius: 6 },
});
