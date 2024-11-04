import { Tabs } from 'expo-router';
import React from 'react';
import {Text, View} from 'react-native';
import Header from '@/components/header';

export default function TabLayout() {


  return (
    <>
      <Tabs>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>Itens cadastrados </Text>)}}></Tabs.Screen>
      </Tabs>
    
    </>
  );
}
