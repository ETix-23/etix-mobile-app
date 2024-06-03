import { loggedInUser } from "@/features/user.slice";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector(loggedInUser);
  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <View className="flex-1 space-y-8 p-4">
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Your Names</Text>
          <Text>{user?.name}</Text>
        </View>

        <View className="space-y-2">
          <Text className="text-lg font-semibold">Phone number</Text>
          <Text>{user?.phoneNumber}</Text>
        </View>
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Email</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
      <Image source={require("../../../assets/images/people-waving-hand-illustration.png")} className="w-full" />
    </SafeAreaView>
  );
};

export default Profile;
