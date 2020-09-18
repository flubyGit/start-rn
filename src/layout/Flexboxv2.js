import React from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default () => {
  return (
    <View style={style.FlexV2}>
      <Square />
      <Square color={"#f00"} />
      <Square color={"#090"} />
      <Square color={"#0f9"} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
