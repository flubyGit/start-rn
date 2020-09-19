import React from "react";
import { View, StyleSheet } from "react-native";
import UserLogout from "../src/components/UserLogout";

export default () => (
  <View style={styles?.App}>
    <UserLogout user={{ name: "Gui", email: "gui@gmail.com" }} />
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
