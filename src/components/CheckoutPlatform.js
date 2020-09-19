import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { Platform } from "react-native";

export default () => {
  const { OS } = Platform;
  return (
    <View>
      {OS === "android" ? (
        <Text style={styles.largeTxt}>Android</Text>
      ) : (
        <Text style={styles.largeTxt}>Ios</Text>
      )}
    </View>
  );

  // if (OS === "android") return <Text style={styles.largeTxt}>Android</Text>;
  // else if (OS === "ios") return <Text style={styles.largeTxt}>Ios</Text>;
  // else return <Text style={styles.largeTxt}>Nenhuma das duas</Text>;
};
