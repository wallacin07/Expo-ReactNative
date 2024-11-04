import { Text } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Anton: require('../assets/fonts/Anton-Regular.ttf'),
    aaa: Inter_900Black
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
   <Stack>
    <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="(adm)" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="(users)" options={{headerShown: false}}></Stack.Screen>
   </Stack>
  );
}
