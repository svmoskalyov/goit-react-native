import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_500Medium,
// } from "@expo-google-fonts/roboto";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   RobotoRegular: Roboto_400Regular,
  //   RobotoMedium: Roboto_500Medium,
  // });

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: "flex-end",
//   },
// });
