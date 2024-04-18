import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { driverSchedule } from "@/constants/DriverSchedules";
import DriverSchedule from "@/components/cards/DriverSchedule";

const Schedules = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-4 space-y-4">
      <View className="flex-row items-center space-x-3">
        <View className="flex-row w-[125px] justify-center bg-[#ececec] py-2.5 rounded-xl">
          <Text className="text-[17px]">Time</Text>
        </View>
        <View className="flex-row flex-1 justify-center bg-[#ececec] py-2.5 rounded-xl">
          <Text className="text-[17px]">Task</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingTop: 10 }}
        data={driverSchedule}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <DriverSchedule schedule={item} index={index} />}
      />
      <View className="flex-row py-2">
        <View className="flex-1 flex-row items-center space-x-3">
          <View className="h-5 w-5 rounded-md bg-[#B8B5BC]" />
          <Text>To be done</Text>
        </View>
        <View className="flex-1 flex-row items-center space-x-3">
          <View className="h-5 w-5 rounded-md bg-[#51259B]" />
          <Text>Active Task</Text>
        </View>
        <View className="flex-1 flex-row items-center space-x-3">
          <View className="h-5 w-5 rounded-md bg-[#41ca78]" />
          <Text>Completed</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Schedules;
