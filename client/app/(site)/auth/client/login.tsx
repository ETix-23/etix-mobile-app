import API_BASE_URL from "@/api/endpoint";
import { setUser } from "@/features/user.slice";
import { Feather, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setIsPending(true);
    try {
      const response = await axios.post(API_BASE_URL + "/api/users/signin", formData);
      dispatch(setUser(response.data));

      console.log("Response:", response.data);
      Toast.show({
        type: "success",
        text1: "You are now logged in your account",
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
          text1: "There has been an error logging into your account!",
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
              <TextInput onChangeText={(value) => handleInputChange("email", value)} className="w-full flex-1" placeholder="Enter your email address" />
            </View>
          </View>
          <View className="space-y-2 w-full flex-col justify-center pb-4">
            <Text>Password</Text>
            <View className="flex-row space-x-3 items-center border border-[#51259B] rounded-full w-full h-[60px] bg-[#FFFAFA] px-4">
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
          <TouchableOpacity disabled={isPending} onPress={handleLogin} className="rounded-full bg-[#51259B] w-full h-[60px] items-center justify-center">
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
