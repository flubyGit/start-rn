import React from "react";
import { View, StyleSheet } from "react-native";
import Flexboxv2 from "../src/layout/Flexboxv2";

export default () => (
  <View style={styles?.App}>
    <Flexboxv2 />
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
