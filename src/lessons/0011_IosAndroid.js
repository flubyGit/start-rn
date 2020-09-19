import React from "react";
import { View, StyleSheet } from "react-native";
import CheckoutPlatform from "../components/CheckoutPlatform";

export default () => (
  <View style={styles?.App}>
    <CheckoutPlatform />
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
