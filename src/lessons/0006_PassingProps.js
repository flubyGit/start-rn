import React from "react";
import { View, StyleSheet } from "react-native";
import MinMax from "../components/MinMax";

export default () => (
  <View style={styles?.App}>
    <MinMax min="3" max="30" />
    <MinMax min={3} max={93} />
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
