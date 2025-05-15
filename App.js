import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import NovaReceitaScreen from './NovaReceitaScreen';
import DetalhesScreen from './DetalhesScreen';
import EditarReceitaScreen from './EditarReceitaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bolos de Pote" component={HomeScreen} />
        <Stack.Screen name="Nova Receita" component={NovaReceitaScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Editar Receita" component={EditarReceitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
