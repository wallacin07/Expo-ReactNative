import { Tabs } from 'expo-router';
import React from 'react';
import {Text, View} from 'react-native';
import Header from '@/components/header';

export default function TabLayout() {


  return (
    <>
      <Header image={require("../../assets/licensed-image.png")}/>
      <Tabs>
        <Tabs.Screen name='camisetas' options={{headerShown: false, tabBarIcon: () => (<Text>Camisetas</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='blusas' options={{headerShown: false, tabBarIcon: () => (<Text>Blusas </Text>)}}></Tabs.Screen>
        <Tabs.Screen name='bermudas' options={{headerShown: false, tabBarIcon: () => (<Text>Bermudas  </Text>)}}></Tabs.Screen>
        <Tabs.Screen name='calças' options={{headerShown: false, tabBarIcon: () => (<Text>Calças  </Text>)}}></Tabs.Screen>
        <Tabs.Screen name='couro' options={{headerShown: false, tabBarIcon: () => (<Text>Jaquetas de Couro  </Text>)}}></Tabs.Screen>
      </Tabs>
    
    </>
  );
}
