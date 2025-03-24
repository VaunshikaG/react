import React, {JSX} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

// using typescript
function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        heyyy!!
      </Text>
    </View>
  );
}

// using stylesheet obj
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
