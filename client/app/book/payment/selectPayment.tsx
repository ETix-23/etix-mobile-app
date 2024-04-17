import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { busData } from "@/constants/BusData";
import { Bus } from "@/constants/types";
import { Entypo } from "@expo/vector-icons";

const SelectPayment = () => {
  const params = useLocalSearchParams();
  const bus: Bus = busData.filter((b) => b.numberPlate === params.id)[0];

  return (
    <SafeAreaView className="flex-1 bg-[#f2f2f2] p-3">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: "#51259B",
          headerTitle: "Select Payment",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="space-y-6">
          <View className="bg-white p-7 rounded-3xl space-y-4">
            <Text className="font-semibold text-lg">Total Payment</Text>
            <Text className="font-semibold text-2xl text-[#51259B]">{Number(params.numberOfSeats) * 1500} RWF</Text>
            <View className="border-t border-[#A39D9D] pt-4">
              <Text>Please select one of the payment method below</Text>
            </View>
          </View>
          <View className="space-y-4">
            <Text className="font-semibold text-xl">Payment Method</Text>
            <View className="bg-white p-7 rounded-3xl space-y-4">
              <View className="flex-row justify-between items-center pb-2">
                <Text className="font-semibold text-lg text-[#6C6A6A]">Mobile Money</Text>
                <View className="flex-row items-center gap-x-1">
                  <Text className="text-[#51259B] uppercase">Select</Text>
                  <Entypo name="chevron-small-right" size={22} color="#51259B" />
                </View>
              </View>
              <View className="border-t border-[#A39D9D] pt-4">
                <Text className="text-lg">*182*3*2*097267#</Text>
              </View>
            </View>
          </View>
          <View className="bg-white p-6 rounded-3xl space-y-4">
            <View className="flex-row justify-between items-center pb-2">
              <Text className="font-semibold text-lg text-[#6C6A6A]">Credit Card </Text>
              <View className="flex-row items-center gap-x-1">
                <Text className="text-[#51259B] uppercase">Select</Text>
                <Entypo name="chevron-small-right" size={22} color="#51259B" />
              </View>
            </View>
            <View className="border-t border-[#A39D9D] pt-4 flex-row items-center space-x-3">
              <Image source={require("../../../assets/images/mastercard.png")} />
              <Image source={require("../../../assets/images/credit-card.png")} />
              <Image source={require("../../../assets/images/visa.png")} />
            </View>
          </View>
          <View className="bg-white p-6 rounded-3xl space-y-4">
            <View className="flex-row justify-between items-center pb-2">
              <Text className="font-semibold text-lg text-[#6C6A6A]">Bank Transfer </Text>
              <View className="flex-row items-center gap-x-1">
                <Text className="text-[#51259B] uppercase">Select</Text>
                <Entypo name="chevron-small-right" size={22} color="#51259B" />
              </View>
            </View>
            <View className="border-t border-[#A39D9D] pt-4 flex-row items-center space-x-3">
              <Image source={require("../../../assets/images/google-wallet.png")} />
              <Image source={require("../../../assets/images/bank-cards.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectPayment;
