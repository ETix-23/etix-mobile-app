import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";
import { busData } from "@/constants/BusData";
import BusCard from "@/components/cards/BusCard";
import { useLocalSearchParams } from "expo-router";
import { formatDate } from "@/utils/formatDateTime";

const Search = () => {
  const params = useLocalSearchParams();
  const formattedDate = formatDate(Number(params.date));

  return (
    <SafeAreaView className="flex-1 p-2">
      <View className="items-center">
        <Image source={require("../../assets/images/icons/etix.png")} style={{ width: 150, height: 120, marginTop: -100 }} />
        <View className="w-full py-3">
          <View className="flex-row gap-3">
            <View className="bg-white flex-1 p-4 rounded-2xl space-y-2">
              <Text className="text-[#ccc]">From</Text>
              <Text className="capitalize">{params.from}</Text>
            </View>
            <View className="bg-white flex-1 p-4 rounded-2xl space-y-2">
              <Text className="text-[#ccc]">From</Text>
              <Text className="capitalize">{params.to}</Text>
            </View>
          </View>
          <View className="flex-row space-x-3 mt-3">
            <View className="bg-white flex-1 p-4 rounded-2xl space-y-2">
              <Text className="text-[#ccc]">{formattedDate}</Text>
            </View>
            <View className="bg-white flex-1 p-4 rounded-2xl space-y-2">
              <Text className="text-[#ccc]">
                {params.numberOfSeats} Seat{params.numberOfSeats == "1" ? "" : "s"}
              </Text>
            </View>
          </View>
        </View>
        <View className="w-full">
          <FlatList
            data={busData}
            renderItem={({ item }) => <BusCard busData={item} params={params} />}
            contentContainerStyle={{ rowGap: 16, marginTop: 5, width: "100%" }}
            keyExtractor={(item) => item.numberPlate}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
