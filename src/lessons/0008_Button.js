import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./components/Button";

export default () => (
  <View style={styles?.App}>
    <Button />
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
