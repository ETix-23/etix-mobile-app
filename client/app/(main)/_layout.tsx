import { AntDesign } from "@expo/vector-icons";
import React from "react";

import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import ScreenHeaderBtn from "@/components/header/HeaderBackBtn";

function TabBarIcon(props: { name: React.ComponentProps<typeof AntDesign>["name"]; color: string }) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          height: 60,
          elevation: 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarActiveTintColor: "#51259B",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarActiveTintColor: "#51259B",
          tabBarIcon: ({ color }) => <TabBarIcon name="search1" color={color} />,
          headerShown: true,
          headerLeft: () => <ScreenHeaderBtn />,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarActiveTintColor: "#51259B",
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: "#51259B",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
