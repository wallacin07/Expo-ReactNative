import { Text } from "react-native";

import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';
import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
   <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
   </Stack>
  );
}
