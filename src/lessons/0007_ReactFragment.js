import React from "react";
import { View, StyleSheet } from "react-native";
import Frag from "../components/Frag";

export default () => (
  <View style={styles?.App}>
    <Frag main={"Register"} secondary={"Screen register product"} />
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
