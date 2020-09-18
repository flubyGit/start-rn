import React from "react";
import { View, StyleSheet } from "react-native";
import ComponentControlled from "../src/components/ComponentControlled";

export default () => (
  <View style={styles?.App}>
    <ComponentControlled />
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
