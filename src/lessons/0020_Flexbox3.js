import React from "react";
import { View, StyleSheet } from "react-native";
import Flexboxv3 from "../src/layout/Flexboxv3";

export default () => (
  <View style={styles?.App}>
    <Flexboxv3 />
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
