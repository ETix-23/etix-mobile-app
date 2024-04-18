import { View, Text } from "react-native";
import React, { FC } from "react";
import { Schedule } from "@/constants/types";
interface Props {
  schedule: Schedule;
  index: number;
}

const DriverSchedule: FC<Props> = ({ schedule, index }) => {
  const { task, time } = schedule;
  return (
    <View className="flex-row">
      <View className="w-[130px] border-r border-[#ABABAB]">
        <Text className={`text-[16px] ${index === 0 ? "text-black" : "text-[#B8B5BC]"}`}>{time}</Text>
      </View>
      <View className={`flex-1 py-4 px-6 rounded-3xl space-y-3 mb-3 ml-3  ${index === 0 ? "bg-[#51259B]" : "bg-[#d6d6d6]"}`}>
        <Text className={`${index === 0 && "text-white"}`}>{task.duration} hours</Text>
        <Text className={`${index === 0 && "text-white"}`}>
          {task.start} - {task.destination}
        </Text>
        <Text className={`${index === 0 && "text-white"}`}>{task.passengerCount} passengers</Text>
      </View>
    </View>
  );
};

export default DriverSchedule;
