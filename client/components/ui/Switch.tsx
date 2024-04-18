import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const CustomSwitch = ({ value, onChange }: { value: boolean; onChange: (value: boolean) => void }) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange && onChange(newValue);
  };

  return (
    <TouchableOpacity style={[styles.switchContainer, isChecked ? styles.switchOn : styles.switchOff]} onPress={toggleSwitch}>
      <View style={[styles.switchHandle, isChecked ? styles.switchHandleOn : styles.switchHandleOff]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 46,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
  switchOn: {
    backgroundColor: "#51259B",
  },
  switchOff: {
    backgroundColor: "#DAD6E0",
  },
  switchHandle: {
    width: 22,
    height: 22,
    borderRadius: 13,
    backgroundColor: "white",
    position: "absolute",
  },
  switchHandleOn: {
    left: 20,
  },
  switchHandleOff: {
    left: 4,
  },
});

export default CustomSwitch;
