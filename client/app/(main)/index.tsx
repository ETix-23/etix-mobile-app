import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View className="items-center flex-1 space-y-10">
        <Text className="text-2xl font-semibold">Welcome Lucky</Text>
        <Image source={require("../../assets/images/dummy-dashboard-data.png")} style={{ width: 380, height: 520 }} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
