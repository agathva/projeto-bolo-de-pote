import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NovaReceitaScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  const salvarReceita = async () => {
    if (!nome || !ingredientes || !modoPreparo) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const novaReceita = { nome, ingredientes, modoPreparo };
    const data = await AsyncStorage.getItem('receitas');
    const receitas = data ? JSON.parse(data) : [];
    receitas.push(novaReceita);
    await AsyncStorage.setItem('receitas', JSON.stringify(receitas));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome do bolo" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Ingredientes" value={ingredientes} onChangeText={setIngredientes} multiline />
      <TextInput style={styles.input} placeholder="Modo de preparo" value={modoPreparo} onChangeText={setModoPreparo} multiline />
      <Button title="Salvar" onPress={salvarReceita} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { backgroundColor: '#eee', padding: 10, marginVertical: 8, borderRadius: 6 },
});
