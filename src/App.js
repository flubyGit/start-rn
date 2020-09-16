import React from "react";
import { View, StyleSheet } from "react-native";
import { Random } from "./components/Random";

export default () => (
  <View style={styles?.App}>
    <Random n1={10} n2={30} />
    <Random n1={10} n2={30} />
    <Random n1={10} n2={30} />
    <Random n1={10} n2={30} />
    <Random n1={10} n2={30} />
    <Random n1={10} n2={30} />
    <Random n1={10} n2={30} />
  </View>
);

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
