import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
const DriverProfileButton = () => {
  return (
    <Link href="/driver/profile" asChild>
      <TouchableOpacity className="bg-[#f0f0f0] p-3 rounded-full">
        <View className="flex-row gap-3 items-center">
          <Image source={require("../../assets/images/driver-dummy-logo.png")} className="w-10 h-10" />
          <View>
            <Text className="font-semibold">Kwizera John</Text>
            <Text>Volcano</Text>
          </View>
          <View className="bg-white p-2 rounded-full">
            <FontAwesome name="bell-o" size={24} color="#4C4C4C" />
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default DriverProfileButton;
