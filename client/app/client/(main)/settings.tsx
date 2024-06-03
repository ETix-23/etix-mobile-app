import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "@/features/user.slice";

const Settings = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <View className="flex-1 bg-white">
      <Text>
        Settings
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Settings;
