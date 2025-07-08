import React from 'react';
import type {JSX, PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
  symbol: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 8,
    marginVertical: 4,
    height: 50,
  },
  flag: {
    fontSize: 28,
    color: '#ffffff',
  },
  country: {
    fontSize: 16,
    color: '#2d3436',
  },
});

export default CurrencyButton;
