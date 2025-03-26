import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCard from '../../components/FlatCard';
import ElevatedCard from '../../components/ElevatedCard';
import FancyCard from '../../components/FancyCard';
import ActionCard from '../../components/ActionCard';

function AppStyler() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AppStyler;
