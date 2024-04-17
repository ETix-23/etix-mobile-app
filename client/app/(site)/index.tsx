import { Stack, router } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1 pb-5 flex flex-col justify-between">
        <View></View>
        <View className="flex justify-center items-center">
          <Image source={require("../../assets/images/icons/etix.png")} style={{ width: 200, height: 160 }} />
        </View>

        <TouchableOpacity onPress={() => router.push("/selectRole")} className="bg-[#51259B] items-center justify-center h-[60px] w-full max-w-[200px] mx-auto rounded-full">
          <Text className="text-center text-white">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
