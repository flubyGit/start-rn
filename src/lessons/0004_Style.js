import React from "react";
import { View, StyleSheet } from "react-native";

export default () => <View style={styles?.App}>Testing styles</View>;

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
