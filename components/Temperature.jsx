import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Temperature.style";

export default function Temperature({ value, unit }) {
  return (
    <Text style={styles.text}>
      {value} {unit}
    </Text>
  );
}
