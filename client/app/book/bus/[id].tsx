import { busData } from "@/constants/BusData";
import { Bus } from "@/constants/types";
import { formatDate } from "@/utils/formatDateTime";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const BookBus = () => {
  const params = useLocalSearchParams();
  const bus: Bus = busData.filter((b) => b.numberPlate === params.id)[0];

  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 h-full justify-between">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-1 h-full">
            <Image source={require("../../../assets/images/bus-image.png")} className="w-full h-[280px]" />
            <View className="flex-row justify-center">
              <View className="bg-[#51259B] w-full max-w-[200px] py-3 rounded-full -mt-6">
                <Text className="text-white text-xl font-semibold text-center">Bus 3</Text>
              </View>
            </View>
            <View className="p-4">
              <View className="bg-white p-4 rounded-2xl w-full">
                <Text className="px-2 pt-6">{formatDate(Number(params.date))}</Text>
                <View className="w-full bg-[#50259b11] backdrop-blur-3xl p-6 rounded-2xl mt-4 shadow-lg">
                  <Text className="text-lg font-semibold text-[#4F4D4D] text-center">Plate No. {bus.numberPlate}</Text>
                  <View className="p-2 flex-row justify-between">
                    <View className="space-y-1">
                      <Text className="text-[#51259B] text-lg">Kigali</Text>
                    </View>
                    <View className="space-y-1 items-end">
                      <Text className="text-[#51259B] text-lg">Musanze</Text>
                    </View>
                  </View>
                  <View className="flex-row items-center justify-between gap-4">
                    <Text className="text-[#a3a3a3]">5:00AM</Text>
                    <View className="flex-row items-center flex-1">
                      <FontAwesome6 name="circle-dot" size={15} color="#a3a3a3" />
                      <View className="border-t border-[#a3a3a3] border-dashed flex-1"></View>
                      <FontAwesome6 name="circle-dot" size={15} color="#a3a3a3" />
                    </View>
                    <Text className="text-[#a3a3a3]">6:24AM</Text>
                  </View>
                </View>
                <View className="mt-6 space-y-1">
                  <Text className="font-semibold text-lg">Available Seats</Text>
                  <View className="flex-row justify-between">
                    <Text className="text-[#a3a3a3]">12 seats available</Text>
                    <Text className="text-[#a3a3a3]">2*2 Seat Arrangement</Text>
                  </View>
                </View>
                <View className="mt-6 space-y-5">
                  <Text className="font-semibold text-lg">Facility</Text>
                  <View className="flex-row space-x-3">
                    <MaterialCommunityIcons name="seat" size={20} color="#615f5f" />
                    <Text className="text-[#403F3F]">Comfort Seats</Text>
                  </View>
                  <View className="flex-row space-x-3">
                    <Feather name="clock" size={20} color="#615f5f" />
                    <Text className="text-[#403F3F]">On Time</Text>
                  </View>
                  <View className="flex-row space-x-3">
                    <Entypo name="suitcase" size={20} color="#615f5f" />
                    <Text className="text-[#403F3F]">Storage Space</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="bg-white flex-row justify-between p-6 border-t border-[#dbdbdb]">
          <View>
            <Text className="text-[#a3a3a3] font-semibold">1 * {1500} RWF</Text>
            <Text className="text-[#403F3F] font-semibold text-xl">{Number(params.numberOfSeats) * 1500} RWF</Text>
          </View>
          <TouchableOpacity className="text-sm bg-[#51259B] justify-center py-4 px-3 rounded-lg">
            <Text className="text-white text-center uppercase">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookBus;
