import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

export const ListPokeScreen = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPoke(data.results));
  }, []);

  const mostrarPokemon = ({ item }) => (
    <View style={{ padding: scale(10), borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: scale(14), fontWeight: 'bold' }}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={poke}
      renderItem={mostrarPokemon}
      keyExtractor={(item) => item.url}
    />
  );
};