import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places !!</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={require('../assets/city_img.png')}
          //   source={{
          //     uri: 'https://i.pinimg.com/736x/86/8c/f8/868cf8e306037bf4fe930a31bf021954.jpg',
          //   }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Shaniwar Wada</Text>
          <Text style={styles.cardLabel}>Pune City</Text>
          <Text style={styles.cardDesc}>
            Shaniwar Wada is a historical fortification in the city of Pune,
            India. Built in 1732, it was the seat of the Peshwas of the Maratha
            Confederacy until 1818.
          </Text>
          <Text style={styles.cardFooter}>Pune, Maharashtra</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    // flex: 1,
    // flexDirection: 'row',
    padding: 8,
  },
  card: {
    height: 360,
    width: 350,
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#F9DDA4',
    elevation: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 15,
    // borderRadius: 12,
  },
  cardImage: {
    width: '100%',
    height: 180,
    marginBottom: 8,
    alignItems: 'center',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    marginBottom: 2,
  },
  cardDesc: {
    color: '#4C4B4B',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 10,
    marginBottom: 6,
    flexShrink: 1,
  },
  cardFooter: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 10,
    textAlign: 'right',
  },
});
function rgb(arg0: number, arg1: number, arg2: number): any {
  throw new Error('Function not implemented.');
}
