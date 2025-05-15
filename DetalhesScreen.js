import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalhesScreen({ route, navigation }) {
  const { index } = route.params;
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      const data = await AsyncStorage.getItem('receitas');
      const lista = data ? JSON.parse(data) : [];
      setReceita(lista[index]);
    };
    carregar();
  }, []);

  const excluirReceita = async () => {
    Alert.alert('Confirmar', 'Deseja excluir esta receita?', [
      { text: 'Cancelar' },
      {
        text: 'Excluir',
        onPress: async () => {
          const data = await AsyncStorage.getItem('receitas');
          const lista = data ? JSON.parse(data) : [];
          lista.splice(index, 1);
          await AsyncStorage.setItem('receitas', JSON.stringify(lista));
          navigation.navigate('Bolos de Pote');
        },
      },
    ]);
  };

  if (!receita) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{receita.nome}</Text>
      <Text style={styles.label}>Ingredientes:</Text>
      <Text>{receita.ingredientes}</Text>
      <Text style={styles.label}>Modo de preparo:</Text>
      <Text>{receita.modoPreparo}</Text>
      <View style={styles.botoes}>
        <Button title="Editar" onPress={() => navigation.navigate('Editar Receita', { index })} />
        <Button title="Excluir" color="red" onPress={excluirReceita} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  label: { marginTop: 10, fontWeight: 'bold' },
  botoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
});
