import React from "react";
import { View, StyleSheet } from "react-native";
import Father from "../direct/Father";

export default () => (
  <View style={styles?.App}>
    <Father />
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
