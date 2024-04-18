import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-4 space-y-4">
      <View className="flex-row items-center gap-4">
        <Image source={require("../../assets/images/driver-dummy-logo.png")} className="w-[120px] h-[120px]" />
        <View className="space-y-2">
          <Text className="text-2xl font-bold">John doe</Text>
          <Text className="text-[16px]">Employee ID : 98765</Text>
        </View>
      </View>
      <View className="border border-[#B7B7B7] flex-row items-center rounded-2xl py-5 pr-6 space-x-5">
        <Image source={require("../../assets/images/bus-illustration.png")} />
        <View className="flex-1 space-y-3">
          <View className="flex-row justify-between w-full">
            <Text className="font-semibold">Plate No:</Text>
            <Text>RAA498</Text>
          </View>
          <View className="flex-row justify-between w-full">
            <Text className="font-semibold">Model:</Text>
            <Text>Coaster</Text>
          </View>
          <View className="flex-row justify-between w-full">
            <Text className="font-semibold">Damages:</Text>
            <Text>None</Text>
          </View>
        </View>
      </View>
      <View className="space-y-1">
        <View className="flex-row gap-3">
          <View className="border border-[#B7B7B7] py-10 px-6 justify-center flex-1 rounded-3xl">
            <Text className="text-4xl">34</Text>
            <Text className="text-[16px]">Completed rides</Text>
          </View>
          <View className="border border-[#B7B7B7] py-10 px-6 justify-center flex-1 rounded-3xl">
            <Text className="text-4xl">1,020</Text>
            <Text className="text-[16px]">Passengers driven</Text>
          </View>
        </View>
        <View className="flex-row gap-3">
          <View className="border border-[#B7B7B7] py-10 px-6 justify-center flex-1 rounded-3xl">
            <Text className="text-4xl">32</Text>
            <Text className="text-[16px]">On-time rides</Text>
          </View>
          <View className="border border-[#B7B7B7] py-10 px-6 justify-center flex-1 rounded-3xl">
            <Text className="text-4xl">4.2</Text>
            <Text className="text-[16px]">Overall Rating</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
