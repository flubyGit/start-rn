import React from "react";

import { Text } from "react-native";
import style from "../components/style";

export default ({ min, max }) => (
  <Text style={style.largeTxt}>
    O valor {max} é maior que o valor {min}
  </Text>
);
