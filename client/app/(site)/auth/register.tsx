import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import ScreenHeaderBtn from "@/components/header/HeaderBackBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => <ScreenHeaderBtn />,
        }}
      />
      <View className="w-full justify-start items-center px-4 pb-4 flex-1">
        <Image source={require("../../../assets/images/icons/etix.png")} style={{ width: 200, height: 160, marginTop: -50 }} />
        <View className="bg-[#EEE9E9] w-full rounded-3xl py-10 px-6 pb-10 space-y-6">
          <Text className="text-center text-3xl text-[#51259B] uppercase font-semibold">Signup</Text>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text className="px-3">Full name</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <Feather name="user" size={24} color="#aaa" />
              <TextInput className="w-full flex-1" placeholder="Enter your full names" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text className="px-3">Phone number</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <MaterialCommunityIcons name="phone" size={24} color="#aaa" />
              <TextInput keyboardType="numeric" className="w-full flex-1" placeholder="Enter your phone number" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text className="px-3">Email</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <MaterialCommunityIcons name="email-outline" size={24} color="#aaa" />
              <TextInput className="w-full flex-1" placeholder="Enter your email address" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center pb-4">
            <Text className="px-3">Password</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <Foundation name="key" size={24} color="#aaa" />
              <TextInput className="w-full flex-1" secureTextEntry={!showPassword} placeholder="Enter your Password" />
              <Feather name={showPassword ? "eye-off" : "eye"} size={24} color="#aaa" onPress={toggleShowPassword} />
            </View>
          </View>
          <TouchableOpacity className="rounded-full bg-[#51259B] w-full h-[60px] items-center justify-center">
            <Text className="text-center text-white uppercase">Sign up</Text>
          </TouchableOpacity>
        </View>
        <View className="px-4 w-full justify-center items-center">
          <TouchableOpacity className="mt-8 flex-row justify-center items-center gap-x-3 border border-[#51259B] rounded-full w-full h-[60px]">
            <Image source={require("../../../assets/images/icons8-google-48.png")} />
            <Text className="text-lg">Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}