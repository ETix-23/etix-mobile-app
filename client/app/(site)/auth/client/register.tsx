import API_BASE_URL from "@/api/endpoint";
import { Feather, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    names: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [isPending, setIsPending] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    setIsPending(true);
    try {
      const response = await axios.post(API_BASE_URL + "/api/users/signup", formData);

      Toast.show({
        type: "success",
        text1: "Your account has been created successfully",
      });

      setTimeout(() => {
        router.push("/(main)/");
      }, 1000);
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Backend error:", error.response.data);
        Toast.show({
          type: "error",
          text1: "There has been an error creating your account!",
          text2: error.response.data.error || "Unknown error",
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Network error:", error.request);
        Toast.show({
          type: "error",
          text1: "Network error",
          text2: "Please check your internet connection and try again.",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error:", error.message);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message,
        });
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <Image source={require("../../../../assets/images/icons/etix.png")} style={{ width: 200, height: 60, marginLeft: 36, marginBottom: 2 }} />
          ),
          headerTintColor: "#51259B",
        }}
      />
      <View className="w-full justify-start items-center px-4 pb-4 flex-1 space-y-2 mt-5">
        <View className="bg-[#EEE9E9] w-full rounded-3xl py-7 px-5 pb-10 space-y-5">
          <Text className="text-center text-3xl text-[#51259B] uppercase font-semibold">Signup</Text>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text>Full name</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <Feather name="user" size={24} color="#aaa" />
              <TextInput onChangeText={(value) => handleInputChange("name", value)} className="w-full flex-1" placeholder="Enter your full names" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text>Phone number</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <MaterialCommunityIcons name="phone" size={24} color="#aaa" />
              <TextInput
                onChangeText={(value) => handleInputChange("phoneNumber", value)}
                keyboardType="numeric"
                className="w-full flex-1"
                placeholder="Enter your phone number"
              />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center">
            <Text>Email</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <MaterialCommunityIcons name="email-outline" size={24} color="#aaa" />
              <TextInput onChangeText={(value) => handleInputChange("email", value)} className="w-full flex-1" placeholder="Enter your email address" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center pb-4">
            <Text>Password</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-5">
              <Foundation name="key" size={24} color="#aaa" />
              <TextInput
                onChangeText={(value) => handleInputChange("password", value)}
                className="w-full flex-1"
                secureTextEntry={!showPassword}
                placeholder="Enter your Password"
              />
              <Feather name={showPassword ? "eye-off" : "eye"} size={24} color="#aaa" onPress={toggleShowPassword} />
            </View>
          </View>
          <TouchableOpacity disabled={isPending} onPress={handleSignUp} className="rounded-full bg-[#51259B] w-full h-[60px] items-center justify-center">
            <Text className="text-center text-white uppercase">{isPending ? "Please wait..." : "Sign up"}</Text>
          </TouchableOpacity>
        </View>
        <View className="px-4 w-full justify-center items-center">
          <TouchableOpacity className="mt-4 flex-row justify-center items-center gap-x-3 border border-[#51259B] rounded-full w-full h-[60px]">
            <Image source={require("../../../../assets/images/icons8-google-48.png")} />
            <Text className="text-lg">Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
