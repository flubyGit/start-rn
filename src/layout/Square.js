import React from "react";
import { View } from "react-native";

export default ({ color }) => {
  const side = 50;
  return (
    <View
      style={{
        height: side,
        width: side,
        backgroundColor: color || "#000",
      }}
    ></View>
  );
};
