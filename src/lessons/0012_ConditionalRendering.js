import React from "react";
import { View, StyleSheet } from "react-native";
import CondicionalRendering from "../src/components/CondicionalRendering";

export default () => (
  <View style={styles?.App}>
    <CondicionalRendering />
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
