import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Text } from 'react-native-paper'


export const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text >Ejemplo de React Native Navigation</Text>
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'beige',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  