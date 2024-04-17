import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <View className="flex-1 space-y-8 p-4">
        <View className="space-y-2">
          <Text className="text-lg font-semibold">First Name</Text>
          <Text>Kagabo</Text>
        </View>
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Last Name</Text>
          <Text>Lucky</Text>
        </View>
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Phone number</Text>
          <Text>0788911534</Text>
        </View>
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Email</Text>
          <Text>kagabolucky@gmail.com</Text>
        </View>
      </View>
      <Image source={require("../../assets/images/people-waving-hand-illustration.png")} className="w-full" />
    </SafeAreaView>
  );
};

export default Profile;
