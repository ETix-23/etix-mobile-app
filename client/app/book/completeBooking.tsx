import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { Bus } from "@/constants/types";
import { busData } from "@/constants/BusData";
import { Link } from "expo-router";

const CompleteBooking = () => {
  const params = useLocalSearchParams();
  const bus: Bus = busData.filter((b) => b.numberPlate === params.id)[0];

  return (
    <View className="flex-1 bg-white p-3 justify-between">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: "#51259B",
          headerTitle: "Complete Booking",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <View className="space-y-4">
        <View className="space-y-3">
          <Text>Passenger names </Text>
          <TextInput className="h-[60px] bg-[#F2F2F2] px-4 rounded-xl" placeholder="Enter your full names" />
        </View>
        <View className="bg-[#F2F2F2] px-4 py-6 rounded-2xl space-y-6">
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold">Ticket No:</Text>
            <Text>FDq345</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold">Bus No:</Text>
            <Text>{bus.numberPlate}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold">Duration:</Text>
            <Text>2 hours</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold">Departure Time:</Text>
            <Text>{bus.busStops[0].arrivalTime}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold">Destination:</Text>
            <Text>
              {bus.busStops[0].name} - {bus.busStops[1].name}
            </Text>
          </View>
        </View>
        <View className="bg-[#F2F2F2] px-4 py-6 rounded-2xl flex-row justify-between items-center">
          <Text className="font-semibold text-lg">Total:</Text>
          <Text className="font-semibold text-2xl text-[#51259B]">{Number(params.numberOfSeats) * 1500} RWF</Text>
        </View>
      </View>
      <View className="space-y-4 pb-3">
        <Text>Cost Per ticket is 1,500 RWF</Text>
        <Link
          href={{
            pathname: "/book/payment/selectPayment",
            params: { ...params },
          }}
          asChild>
          <TouchableOpacity className="text-sm bg-[#51259B] justify-center py-4 px-6 rounded-lg">
            <Text className="text-white text-center uppercase">Continue to payment</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default CompleteBooking;
