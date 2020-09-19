import React from "react";
import { View, Text } from "react-native";
import styles from "../components/style";

export default function son({ x, y }) {
  return (
    <View>
      <Text style={styles.largeText}>{x}</Text>
      <Text style={styles.largeText}>{y}</Text>
    </View>
  );
}
