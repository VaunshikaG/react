import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function counterApp() {
  const [counter, setCounter] = useState(5);

  const increment = () => {
    // this will increment +1 only as useStates run code in batch
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // to direct increament it to 10
    // will update bcz you are using callback in setCounter method, so after 1 callback is finished 2nd will be called
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(counter - +1);
  };

  return (
    <View style={styles.container}>
      <Text>Counter {counter}</Text>
      <Pressable onPress={increment} style={styles.rollDiceBtnText}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable onPress={decrement} style={styles.rollDiceBtnText}>
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rollDiceBtnText: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default counterApp;
