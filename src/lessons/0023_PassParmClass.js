import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Mega from "./src/components/Mega";

export default () => (
  <SafeAreaView style={styles?.App}>
    <Mega qntNumbers={7} />
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
