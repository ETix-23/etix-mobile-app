import CustomSwitch from "@/components/ui/Switch";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Emergency = () => {
  const [selectedEmergency, setSelectedEmergency] = useState<String | null>(null);
  const [isChecked, setIsChecked] = useState(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className="flex-1 bg-white p-4 space-y-10">
        <View className="space-y-3">
          <Text className="text-lg font-semibold">If you are in an emergency, press the button below</Text>
          <TouchableOpacity className="py-4 bg-[#51259B] items-center rounded-xl">
            <Text className="text-white uppercase">Emergency</Text>
          </TouchableOpacity>
        </View>
        <View className="space-y-3">
          <Text className="text-lg font-semibold">Share your location with us</Text>
          <View className="space-y-3 flex-row justify-between">
            <Text>Share my location</Text>
            <CustomSwitch value={isChecked} onChange={setIsChecked} />
          </View>
        </View>
        <View className="space-y-3">
          <Text className="text-lg font-semibold">Please describe the type of emergency for rapid assistance</Text>
          <Pressable
            onPress={() => setSelectedEmergency("Medical Emergency")}
            className="border border-[#B0B0B0] flex-row items-center space-x-6 p-5 rounded-2xl">
            <View className={`bg-[#51259B] h-6 w-6 rounded-full justify-center items-center`}>
              <View className={`bg-white h-5 w-5 rounded-full items-center justify-center`}>
                <View
                  className={`h-4 w-4 rounded-full bg-[#51259B] transition-all duration-500 ${
                    selectedEmergency === "Medical Emergency" ? "opacity-100" : "opacity-0"
                  }`}></View>
              </View>
            </View>
            <View className="space-y-2">
              <Text className="font-semibold text-[16px]">Medical emergency</Text>
              <Text className="text-[#4859B3]">Call 112</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setSelectedEmergency("Fire or explosion")}
            className="border border-[#B0B0B0] flex-row items-center space-x-6 p-5 rounded-2xl">
            <View className={`bg-[#51259B] h-6 w-6 rounded-full justify-center items-center`}>
              <View className={`bg-white h-5 w-5 rounded-full items-center justify-center`}>
                <View
                  className={`h-4 w-4 rounded-full bg-[#51259B] transition-all duration-500 ${
                    selectedEmergency === "Fire or explosion" ? "opacity-100" : "opacity-0"
                  }`}></View>
              </View>
            </View>
            <View className="space-y-2">
              <Text className="font-semibold text-[16px]">Fire or explosion</Text>
              <Text className="text-[#4859B3]">Get to a safe place</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSelectedEmergency("Assault")} className="border border-[#B0B0B0] flex-row items-center space-x-6 p-5 rounded-2xl">
            <View className={`bg-[#51259B] h-6 w-6 rounded-full justify-center items-center`}>
              <View className={`bg-white h-5 w-5 rounded-full items-center justify-center`}>
                <View
                  className={`h-4 w-4 bg-[#51259B] transition-all duration-500 rounded-full ${
                    selectedEmergency === "Assault" ? "opacity-100" : "opacity-0"
                  }`}></View>
              </View>
            </View>
            <View className="space-y-2">
              <Text className="font-semibold text-[16px]">Assault</Text>
              <Text className="text-[#4859B3]">Get to a safe place and call 112</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSelectedEmergency("Other")} className="border border-[#B0B0B0] flex-row items-center space-x-6 p-5 rounded-2xl">
            <View className={`bg-[#51259B] h-6 w-6 rounded-full justify-center items-center`}>
              <View className={`bg-white h-5 w-5 rounded-full items-center justify-center`}>
                <View
                  className={`h-4 w-4  bg-[#51259B] transition-all duration-500 rounded-full ${
                    selectedEmergency === "Other" ? "opacity-100" : "opacity-0"
                  }`}></View>
              </View>
            </View>
            <View className="space-y-2">
              <Text className="font-semibold text-[16px]">Other</Text>
              <Text className="text-[#4859B3]">Describe the situation</Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Emergency;
