import { formatDate, formatTime } from "@/utils/formatDateTime";
import { AntDesign, Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
const SearchPage = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    numberOfSeats: "1",
    date: Date.now(),
    time: Date.now(),
  });
  const handleInputChange = (name: string, value: string | number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formattedTime = formatTime(Number(formData.date));
  const formattedDate = formatDate(Number(formData.date));

  return (
    <View className="flex-1 items-center pb-3 flex bg-white p-2">
      <Image source={require("../../../assets/images/icons/etix.png")} style={{ width: 200, height: 160 }} />
      <View className="space-y-2 items-center">
        <Text className="text-2xl font-semibold">Hello, Lucky.</Text>
        <Text className="text-base font-semibold">Looking for a bus?</Text>
      </View>
      {/* <Image source={require("../../assets/images/bus-stop-illustration.png")} style={{ width: 220, height: 160 }} /> */}
      <View className="flex-1 w-full flex-col justify-between">
        <View className="bg-[#EEE9E9] pl-4 pr-6 py-10 rounded-3xl mt-6 space-y-6">
          <View className="flex-row space-x-4">
            <View className="space-y-[54px]">
              <Entypo name="location-pin" size={24} color="black" />
              <View className="border-r border-[#c0c0c0] border-dashed absolute w-1 h-16 -top-9 left-2" />
              <Feather name="users" size={24} color="black" />
              <FontAwesome6 name="location-crosshairs" size={24} color="black" />
            </View>
            <View className="flex-1 space-y-6">
              <View>
                <Text className="font-semibold">From</Text>
                <TextInput
                  testID="from"
                  value={formData.from}
                  onChangeText={(value) => handleInputChange("from", value)}
                  className="border-b border-dashed border-[#7c7b7b] h-[36px]"
                />
              </View>
              <View>
                <Text className="font-semibold">To</Text>
                <TextInput
                  testID="to"
                  value={formData.to}
                  onChangeText={(value) => handleInputChange("to", value)}
                  className="border-b border-dashed border-[#7c7b7b] h-[36px]"
                />
              </View>
              <View>
                <Text className="font-semibold">Seats</Text>
                <TextInput
                  testID="seats"
                  value={formData.numberOfSeats}
                  onChangeText={(value) => handleInputChange("numberOfSeats", value)}
                  className="border-b border-dashed border-[#7c7b7b] h-[36px]"
                />
              </View>
            </View>
          </View>
          <View className="flex-row pr-2">
            <View className="flex-row flex-1 gap-2">
              <AntDesign name="calendar" size={24} color="black" />
              <View className="flex-1">
                <Text className="font-semibold">Date</Text>
                <TextInput testID="date" value={formattedDate} className="border-b border-dashed border-[#7c7b7b] h-[36px] w-full" />
              </View>
            </View>
            <View className="flex-row flex-1 gap-2">
              <Feather name="clock" size={24} color="black" />
              <View className="flex-1">
                <Text className="font-semibold">Time</Text>
                <TextInput testID="time" value={formattedTime} className="border-b border-dashed border-[#7c7b7b] h-[36px] w-full" />
              </View>
            </View>
          </View>
        </View>
        <Link
          href={{
            pathname: "/search/results",
            params: { from: formData.from, to: formData.to, numberOfSeats: formData.numberOfSeats, date: formData.date, time: formData.time },
          }}
          push
          asChild>
          <TouchableOpacity className="bg-[#51259B] items-center justify-center h-[60px] w-full max-w-[200px] mx-auto rounded-full">
            <Text className="text-center text-white">Search Now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SearchPage;
