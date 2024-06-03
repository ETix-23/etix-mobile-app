import { Link, Stack } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Success = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="space-y-4">
        <Image source={require("../../../assets/images/passengers-waiting.png")} className="-mt-[200px]" />
        <View className="space-y-5 items-center">
          <Text className="text-3xl font-semibold text-[#51259B] text-center">You have booked your bus seat.</Text>
          <Text className="text-[16px] font-semibold text-[#51259B] text-center">Enjoy your bus ride with us. Thank you!</Text>
          <Link href="/client/tickets" asChild>
            <TouchableOpacity className="text-sm bg-[#51259B] justify-center py-4 px-6 rounded-lg">
              <Text className="text-white text-center uppercase">View Tickets</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;
