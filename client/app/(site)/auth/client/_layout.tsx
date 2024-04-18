import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        animation: "ios",
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    />
  );
};

export default Layout;
