import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [receitas, setReceitas] = useState([]);

  const carregarReceitas = async () => {
    const data = await AsyncStorage.getItem('receitas');
    if (data) setReceitas(JSON.parse(data));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarReceitas);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="Adicionar nova receita" onPress={() => navigation.navigate('Nova Receita')} />
      <FlatList
        data={receitas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { index })}>
            <View style={styles.card}>
              <Text style={styles.titulo}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 12, backgroundColor: '#f3f3f3', marginVertical: 8, borderRadius: 8 },
  titulo: { fontSize: 16, fontWeight: 'bold' },
});
