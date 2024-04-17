import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Link } from "expo-router";

const Tickets = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="space-y-4">
        <Image source={require("../../assets/images/bus-passengers.png")} className="-mt-[200px]" />
        <View className="space-y-6 items-center">
          <Text className="text-3xl font-semibold text-[#51259B] text-center">Oops!</Text>
          <Text className="text-[16px] font-semibold text-[#51259B] text-center">You don’t have any ticket yet. please book first. </Text>
          <Link href="/search/" asChild>
            <TouchableOpacity className="text-sm bg-[#51259B] justify-center py-4 px-6 rounded-lg">
              <Text className="text-white text-center uppercase">Book Now</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Tickets;
