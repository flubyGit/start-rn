import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import If from "./CondicionalRendering2";
export default (props) => {
  const user = props.user || {};
  return (
    <View style={styles.largeTxt}>
      <If test={user && Object.keys(user).length !== 0}>
        <Text>Usuário Logado</Text>
        <Text>
          {" "}
          {user.name} {user.email}
        </Text>
      </If>
    </View>
  );
};
