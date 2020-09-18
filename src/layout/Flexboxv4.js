import React from "react";
import { StyleSheet, View } from "react-native";

export default () => {
  return (
    <View style={style.FlexV4}>
      <View style={style.View4_0}></View>
      <View style={style.View4_1}></View>
      <View style={style.View4_2}></View>
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    width: 100,
    flexGrow: 1,
    backgroundColor: "#000",
  },
  View4_0: {
    backgroundColor: "#f01a",
    height: 100,
  },
  View4_1: {
    backgroundColor: "#ff801a",
    flexGrow: 9,
  },
  View4_2: {
    backgroundColor: "#ff3",
    flexGrow: 1,
  },
});
