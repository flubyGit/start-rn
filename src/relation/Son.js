import React from "react";
import { View, Text } from "react-native";

export default (props) => {
  return (
    <View>
      <Text>
        {props.name} {props.surname}
      </Text>
    </View>
  );
};
