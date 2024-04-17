import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Emergency = () => {
  return (
    <View className="flex-1 bg-white space-y-4 items-center">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Emergency",
          headerTintColor: "#51259B",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Image source={require("../assets/images/emergency.png")} className="mx-auto" />
      <Text className="text-2xl font-bold text-center">Having a situation ??</Text>
      <Text className="text-[16px]  text-center leading-7">
        During an emergency situation our App ETix offers emergency calls services to the nearest emergency facilities . In case of an emergency click the
        button below and dial up the nearest service to save the day.
      </Text>
      <TouchableOpacity className="bg-[#51259B] justify-center py-4 px-6 rounded-lg">
        <Text className="text-sm text-white uppercase">Contact us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Emergency;
