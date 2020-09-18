import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Flexboxv4 from "./src/layout/Flexboxv4";

export default () => (
  <SafeAreaView style={styles?.App}>
    <Flexboxv4 />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
