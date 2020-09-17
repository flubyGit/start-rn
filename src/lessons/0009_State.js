import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../components/Counter";

export default () => (
  <View style={styles?.App}>
    <Counter initial={0} pass={13} />
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
