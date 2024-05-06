
import { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { Text, Button } from 'react-native-paper'

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

  return (
    <View style={styles.container}>
        <Text style={styles.textTitle} >Contador</Text>
        <View style={styles.container} >
            <Text>Iniciar: {counter}</Text>
            <Button style={styles.button} mode={'contained'} onPress={increment} buttonColor="gray">Incrementar</Button>
            <Button style={styles.button} mode={'contained'} onPress={decrement} buttonColor="gray">Decrementar</Button>
            <Button style={styles.button} mode={'contained'} onPress={reset} buttonColor="gray">Reset</Button>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'beige',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    button: {
        margin: 10,
        width: 150,
    },
    textTitle: {
        fontSize: 30,
        marginVertical: 30,
    }
  });