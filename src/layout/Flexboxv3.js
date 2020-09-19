import React from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default () => {
  return (
    <View style={style.FlexV3}>
      <Square />
      <Square color={"#f00"} />
      <Square color={"#090"} />
      <Square color={"#0f9"} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    height: 250,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#000",
  },
});
