import React from "react";
import { View, StyleSheet } from "react-native";
import Father from "../src/relation/Father";
import Son from "../src/relation/Son";

export default () => (
  <View style={styles?.App}>
    <Father>
      <Son name="Bia" surname="Moreira" />
    </Father>
    <Father>
      <Son name="Bia" surname="Cristina" />
    </Father>
    <Father>
      <Son name="Lucas" surname="Mateus" />
    </Father>
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
