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
        <Text style={styles.headerText}>
          What's new in javascript 21 - ES12
        </Text>
        <Image
          // source={require('../assets/js_img.jpg')}
          source={{
            uri: 'https://i.pinimg.com/736x/b2/c8/8c/b2c88cc60c9dd46457c7aa11564f07f6.jpg',
          }}
          style={styles.cardImage}
          onError={error =>
            console.log('Image load error:', error.nativeEvent.error)
          }
        />
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
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
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
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  card: {
    height: 360,
    width: 350,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    paddingVertical: 10,
    backgroundColor: '#F5BCBA',
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  bodyContainer: {
    color: '#4C4B4B',
    fontSize: 14,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 14,
    color: '#FFF',
    backgroundColor: '#0A3D62',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
