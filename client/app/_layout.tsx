import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { store, persistor } from "@/store/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { NativeWindStyleSheet } from "nativewind";
import Toast from "react-native-toast-message";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { loggedInUser } from "@/features/user.slice";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootLayoutNav />
        </PersistGate>
        <Toast />
      </Provider>
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { user, token } = useSelector(loggedInUser);
  const isLoggedIn = Boolean(user && token);  

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>

    <Stack initialRouteName={isLoggedIn ? "client" : "(site)"}>
      <Stack.Screen name="(site)" options={{ headerShown: false }} />
      <Stack.Screen name="client" options={{ headerShown: false }} />
      <Stack.Screen name="driver" options={{ headerShown: false }} />
      <Stack.Screen name="emergency" options={{ headerShown: false, presentation: "modal" }} />
    </Stack>

    // </ThemeProvider>
  );
}
