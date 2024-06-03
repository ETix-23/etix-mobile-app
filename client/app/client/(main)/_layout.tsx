import { AntDesign } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Platform, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { loggedInUser } from "@/features/user.slice";
import { UserState } from "@/types/user";

function TabBarIcon(props: { name: React.ComponentProps<typeof AntDesign>["name"]; color: string }) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { user, token } = useSelector(loggedInUser) as UserState;
  if (!user || !token) return router.push("/");

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
          headerTintColor: "#51259B",
          headerTitleAlign: "center",
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
        name="search"
        options={{
          title: "Search",
          tabBarActiveTintColor: "#51259B",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TabBarIcon name="search1" color={focused ? "#51259B" : "#7C7575"} />
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: 6 }}>Search</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: "Tickets",
          headerTitle: "Your Tickets",
          headerTintColor: "#51259B",
          tabBarActiveTintColor: "#51259B",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#51259B",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -25 : -35,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                  }}>
                  <TabBarIcon name="bars" color="#fff" />
                </View>
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: -25 }}>Tickets</Text>
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
        name="settings"
        options={{
          headerTitle: "Settings",
          headerTintColor: "#51259B",
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#51259B",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Feather name="settings" size={24} color={focused ? "#51259B" : "#7C7575"} />
                <Text style={{ fontSize: 12, color: focused ? "#51259B" : "#7C7575", marginTop: 6 }}>Settings</Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
