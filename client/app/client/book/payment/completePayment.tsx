import { busData } from "@/constants/BusData";
import { Bus } from "@/constants/types";
import axios from "axios";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const CompletePayment = () => {
  const params = useLocalSearchParams();
  const bus: Bus = busData.filter((b) => b.numberPlate === params.id)[0];

  const createTicket = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:5000/api/tickets/new", {
        companyName: "Volcano",
        pickup: "Kigali",
        destination: "Musanze",
        timeAvailable: "3:30 PM",
        price: 5000,
        busNo: "RA344",
      });

      if (response) {
        router.push("/client/book/success");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Something went wrong creating ticket",
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f2f2f2] p-3 justify-between">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: "#51259B",
          headerTitle: "Complete Payment",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          presentation: "modal",
        }}
      />
      <View className="space-y-4">
        <View className="bg-white p-7 rounded-3xl space-y-4">
          <Text className="font-semibold text-lg">Total Payment</Text>
          <Text className="font-semibold text-2xl text-[#51259B]">{Number(params.numberOfSeats) * 1500} RWF</Text>
          <View className="border-t border-[#A39D9D] pt-4">
            <Text>Please select one of the payment method below</Text>
          </View>
        </View>
        <View className="bg-white p-7 rounded-3xl space-y-4">
          <View className="space-y-3">
            <Text>Card Number</Text>
            <View className="flex-row space-x-4 h-[60px] bg-[#F2F2F2] px-4 items-center rounded-xl">
              <Image source={require("../../../../assets/images/visa.png")} />
              <TextInput className="" placeholder="Enter card number" />
            </View>
          </View>
          <View className="space-y-1">
            <Text>Valid Until</Text>
            <View className="flex-row gap-3">
              <TextInput className="h-[56px] bg-[#F2F2F2] px-4 rounded-xl flex-1" placeholder="Date" />
              <TextInput className="h-[56px] bg-[#F2F2F2] px-4 rounded-xl flex-1" placeholder="Month" />
              <TextInput className="h-[56px] bg-[#F2F2F2] px-4 rounded-xl flex-1" placeholder="Year" />
            </View>
          </View>
          <View className="space-y-3">
            <Text>Card Holder</Text>
            <TextInput className="h-[60px] bg-[#F2F2F2] px-4 rounded-xl" placeholder="Enter your card holder names" />
          </View>
          <View className="space-y-3">
            <Text>VCC</Text>
            <TextInput className="h-[60px] bg-[#F2F2F2] px-4 rounded-xl" placeholder="VCC" />
          </View>
        </View>
      </View>
      <View className="space-y-4 pb-3">
        <TouchableOpacity onPress={createTicket} className="text-sm bg-[#51259B] justify-center py-4 px-6 rounded-lg">
          <Text className="text-white text-center uppercase">Confirm payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CompletePayment;
