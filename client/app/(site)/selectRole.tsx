import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";

const selectRole = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="items-center py-3">
        <Image source={require("../../assets/images/icons/etix.png")} style={{ width: 200, height: 160 }} />
        <Text className="text-xl font-semibold">Are you here as ? </Text>
        <View className="flex-row justify-center gap-2 flex-wrap mt-10">
          <Link
            href={{
              pathname: "/welcome",
              params: { role: "driver" },
            }}
            asChild>
            <TouchableOpacity className="px-14 h-[56px] items-center justify-center bg-[#D9D9D9] rounded-full">
              <Text className="capitalize">driver</Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={{
              pathname: "/welcome",
              params: { role: "client" },
            }}
            asChild>
            <TouchableOpacity className="px-14 h-[56px] items-center justify-center bg-[#D9D9D9] rounded-full">
              <Text className="capitalize">client</Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={{
              pathname: "/welcome",
              params: { role: "entity-driver" },
            }}
            asChild>
            <TouchableOpacity className="px-14 h-[56px] items-center justify-center bg-[#D9D9D9] rounded-full">
              <Text className="capitalize">entity manager</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default selectRole;
