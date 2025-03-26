import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card !!</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2016/08/blogging-083016.jpg',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            JavaScript, a cornerstone of web development, has evolved
            significantly since its inception. The latest version, ES2023,
            introduces a suite of new features aimed at enhancing the language's
            flexibility and developer experience.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text>Read more</Text>
          </TouchableOpacity>
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
  cardImage: {
    height: 180,
    marginBottom: 8,
  },
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  bodyContainer: {},
  footerContainer: {},
});
