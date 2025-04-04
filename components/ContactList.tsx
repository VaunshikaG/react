import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: '101',
      name: 'Aarav Sharma',
      status: 'Exploring the world, one line of code at a time.',
      imgUrl: 'https://avatar.iran.liara.run/public/13',
    },
    {
      uid: '102',
      name: 'Sanya Mehta',
      status: 'Coffee, books, and late-night coding sessions.',
      imgUrl: 'https://avatar.iran.liara.run/public/78',
    },
    {
      uid: '103',
      name: 'Rohan Verma',
      status: 'Dreaming in algorithms, living in reality.',
      imgUrl: 'https://avatar.iran.liara.run/public/41',
    },
    {
      uid: '104',
      name: 'Neha Kapoor',
      status: 'Designing pixels by day, painting dreams by night.',
      imgUrl: 'https://avatar.iran.liara.run/public/98',
    },
    {
      uid: '105',
      name: 'Vikram Iyer',
      status: 'Tech enthusiast with a passion for innovation.',
      imgUrl: 'https://avatar.iran.liara.run/public/40',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {/* => () no need to use return; => {} need to use return */}
        {/* 2 diff ways to write the list */}
        {contacts.map(({uid, name, status, imgUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={styles.userImg}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
        {/* {contacts.map(item => {
          return (
            <View key={item.uid} style={styles.userCard}>
              <Image
                source={{
                  uri: item.imgUrl,
                }}
                style={styles.userImg}
              />
              <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userStatus}>{item.status}</Text>
              </View>
            </View>
          );
        })} */}
      </ScrollView>
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
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#EAF0F1',
    borderRadius: 5,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
  },
});
