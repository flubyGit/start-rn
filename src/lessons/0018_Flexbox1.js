import React from "react";
import { View, StyleSheet } from "react-native";
import Flexboxv1 from "../src/layout/Flexboxv1";

export default () => (
  <View style={styles?.App}>
    <Flexboxv1 />
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
