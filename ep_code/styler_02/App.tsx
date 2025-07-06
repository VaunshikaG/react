import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCard from '../../components/FlatCard';
import ElevatedCard from '../../components/ElevatedCard';
import FancyCard from '../../components/FancyCard';
import ActionCard from '../../components/ActionCard';
import ContactList from '../../components/ContactList';

function AppStyler() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AppStyler;
