import React from "react";
import { View, StyleSheet } from "react-native";
import Flexboxv4 from "../src/layout/Flexboxv4";

export default () => (
  <View style={styles?.App}>
    <Flexboxv4 />
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
