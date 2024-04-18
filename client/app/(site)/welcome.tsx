import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";

const welcome = () => {
  const params = useLocalSearchParams();
  const role = params.role;
  return (
    <SafeAreaView className="bg-white flex-1">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1 items-center flex-col justify-between pb-3">
        <Image source={require("../../assets/images/icons/etix.png")} style={{ width: 200, height: 160 }} />
        <View className="space-y-6 items-center h-full flex-1">
          <Image source={require("../../assets/images/bus-park-illustration.png")} />
          <Text className="text-2xl font-semibold">Welcome</Text>
          <Text className="text-center max-w-[280px] leading-6">
            <Text className="font-semibold">ETix </Text>is a online booking service for bus transportation. Login or Sign Up now to use this service
          </Text>
        </View>
        {role === "client" && (
          <View className="flex-row w-full space-x-3 px-2">
            <TouchableOpacity onPress={() => router.push("/auth/client/login")} className="text-sm bg-[#51259B] flex-1 justify-center h-[60px] rounded-full">
              <Text className="text-white text-center uppercase">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/auth/client/register")} className="text-sm bg-[#51259B] flex-1 justify-center h-[60px] rounded-full">
              <Text className="text-white text-center uppercase">Sign up</Text>
            </TouchableOpacity>
          </View>
        )}
        {role === "driver" && (
          <View className="flex-row w-full space-x-3 px-2">
            <TouchableOpacity onPress={() => router.push("/auth/driver/login")} className="text-sm bg-[#51259B] flex-1 justify-center h-[60px] rounded-full">
              <Text className="text-white text-center uppercase">Login as driver</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default welcome;
