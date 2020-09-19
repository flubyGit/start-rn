import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Square from "./Square";

export default () => {
  return (
    <SafeAreaView style={style.FlexV1}>
      <Square />
      <Square color={"#f00"} />
      <Square color={"#090"} />
      <Square color={"#0f9"} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
});
