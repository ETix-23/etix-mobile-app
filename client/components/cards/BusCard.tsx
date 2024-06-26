import { Bus } from "@/constants/types";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BusCard: React.FC<{ busData: Bus; params: any }> = ({ busData, params }) => {
  const { arrivalTime, currency, departureTime, destination, numberOfTickets, origin, transportCompany, price } = busData;
  return (
    <View className="bg-white rounded-2xl shadow-md shadow-[#adadad] p-4">
      <View>
        <View className="flex-row justify-between items-center py-4 px-3">
          <Text className="text-[#51259B] text-3xl font-semibold">{transportCompany.name}</Text>
          <View className="flex-row items-center gap-x-2 bg-[#eee] p-1 pr-2 rounded-full">
            <Text className="text-[#aaa]">Plate Number : </Text>
            {/* <Text className="text-[#A39D9D] font-semibold text-base">{numberPlate}</Text> */}
          </View>
        </View>
        <View className="w-[80%] mx-auto space-y-10 mt-2 mb-10">
          <View className="flex-row justify-between">
            {/* <Text>{departureTime.getDate()}</Text> */}
            <View className="items-center">
              <Text>{origin}</Text>
              <Text className="text-[#A39D9D]">Pickup</Text>
            </View>
            <View className="border-r border-[#c0c0c0] border-dashed absolute w-1 h-16 top-[18px] left-5" />
          </View>
          <View className="flex-row justify-between">
            {/* <Text>{arrivalTime.getDate()}</Text> */}
            <View className="items-center">
              <Text>{destination}</Text>
              <Text className="text-[#A39D9D]">Drop</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="border-t border-[#dfdfdf] flex-row justify-between py-4 px-3 items-center">
        <View className="space-y-1 justify-center">
          <Text className="text-[#A39D9D]">Amount</Text>
          <Text className="text-[#51259B] text-xl font-semibold">
            {price} {currency}
          </Text>
        </View>
        <Link
          href={{
            pathname: `/book/bus/${busData._id}`,
            params: { ...params },
          }}
          asChild>
          <TouchableOpacity className="text-sm bg-[#51259B] justify-center py-4 px-3 rounded-lg">
            <Text className="text-white text-center uppercase">Book Now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default BusCard;
