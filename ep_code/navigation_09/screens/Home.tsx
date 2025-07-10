import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// navigation using props
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// type safety - typescript
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to details"
        // onPress={() => navigation.navigate('Details', { productId: '55' })}

        // without parameters
        // onPress={() => navigation.navigate('Details'})}

        onPress={() => navigation.push('Details', { productId: '55' })}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
