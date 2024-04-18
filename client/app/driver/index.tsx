import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const Dashboard = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-6 space-y-6">
      <Text className="text-2xl font-semibold">Daily report </Text>
      <View className="items-center flex-1">
        <Image source={require("../../assets/images/dummy-dashboard-data.png")} style={{ width: 380, height: 520 }} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
