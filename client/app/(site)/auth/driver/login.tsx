import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import ScreenHeaderBtn from "@/components/header/HeaderBackBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    setIsPending(true);
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post("http://10.0.2.2:7000/api/users/signin", {
        email: email,
        password: password,
      });

      // Handle successful response
      console.log("Response:", response.data);
      Toast.show({
        type: "success",
        text1: "You are now logged in your account",
      });
      setTimeout(() => {
        router.push("/driver/");
      }, 1000);
    } catch (error) {
      // Handle errors
      Toast.show({
        type: "error",
        text1: "There has been an error logging into your account!",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerTintColor: "#51259B",
        }}
      />
      <View className="w-full justify-start items-center px-4 pb-4 flex-1 space-y-6">
        <Image source={require("../../../../assets/images/icons/etix.png")} style={{ width: 200, height: 60 }} />
        <View className="bg-[#EEE9E9] w-full rounded-3xl py-10 px-6 pb-10 space-y-6">
          <Text className="text-center text-3xl text-[#51259B] uppercase font-semibold">login</Text>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text>Email</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-4">
              <MaterialCommunityIcons name="email-outline" size={24} color="#aaa" />
              <TextInput className="w-full flex-1" placeholder="Enter your email address" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center pb-4">
            <Text>Password</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-4">
              <Foundation name="key" size={24} color="#aaa" />
              <TextInput className="w-full flex-1" secureTextEntry={!showPassword} placeholder="Enter your Password" />
              <Feather name={showPassword ? "eye-off" : "eye"} size={24} color="#aaa" onPress={toggleShowPassword} />
            </View>
          </View>
          <TouchableOpacity
            disabled={isPending}
            // onPress={handleSignUp}
            onPress={() => router.push("/client/")}
            className="rounded-full bg-[#51259B] w-full h-[60px] items-center justify-center">
            <Text className="text-center text-white uppercase">{isPending ? "Please wait..." : "Login"} </Text>
          </TouchableOpacity>
        </View>
        <View className="px-4 w-full justify-center items-center">
          <TouchableOpacity className="mt-8 flex-row justify-center items-center gap-x-3 border border-[#51259B] rounded-full w-full h-[60px]">
            <Image source={require("../../../../assets/images/icons8-google-48.png")} />
            <Text className="text-lg">Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
