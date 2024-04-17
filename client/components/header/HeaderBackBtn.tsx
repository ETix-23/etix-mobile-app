import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable } from "react-native";
const ScreenHeaderBtn = () => {
  return (
    <Pressable className="ml-2" onPress={() => router.back()}>
      {({ pressed }) => <AntDesign name="arrowleft" style={{ color: "#693BB8", fontSize: 20, marginRight: 15, opacity: pressed ? 0.5 : 1 }} />}
    </Pressable>
  );
};

export default ScreenHeaderBtn;
