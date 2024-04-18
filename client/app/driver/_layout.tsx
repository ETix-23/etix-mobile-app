import { AntDesign } from "@expo/vector-icons";
import React from "react";

import { Tabs, router } from "expo-router";

import DriverProfileButton from "@/components/header/DriverProfileButton";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import ScreenHeaderBtn from "@/components/header/HeaderBackBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          height: 64,
          elevation: 10,
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: "#51259B",
          headerShown: true,
          headerTitle: "",
          headerRight: () => <DriverProfileButton />,
          headerLeft: () => <Image source={require("../../assets/images/icons/etix.png")} style={{ width: 100, height: 80 }} />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TabBarIcon name="home" color={focused ? "#51259B" : "#7C7575"} />
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: 6 }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          title: "Schedules",
          tabBarActiveTintColor: "#51259B",
          headerShown: true,
          headerTintColor: "#51259B",
          headerTitleAlign: "center",
          headerLeft: () => <ScreenHeaderBtn />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome name="bus" size={24} color={focused ? "#51259B" : "#7C7575"} />
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: 6 }}>Schedules</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: "Your Information",
          headerTintColor: "#51259B",
          tabBarActiveTintColor: "#51259B",
          headerTitleAlign: "center",
          headerRight: () => <Feather onPress={() => router.push("/emergency")} name="info" size={24} color="#51259B" />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TabBarIcon name="user" color={focused ? "#51259B" : "#7C7575"} />
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: 6 }}>Profile</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="emergency"
        options={{
          headerTitle: "Emergency Assistance",
          headerTintColor: "#51259B",
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#51259B",
          headerLeft: () => <ScreenHeaderBtn />,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="alert-decagram-outline" size={26} color={focused ? "#51259B" : "#7C7575"} />
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: 6 }}>Emergency</Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
