import React from "react";
import { View, StyleSheet } from "react-native";
import ListProducts from "../src/products/listProductsv2";

export default () => (
  <View style={styles?.App}>
    <ListProducts />
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
