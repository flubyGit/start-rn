import React from "react";

import { Text } from "react-native";
import style from "./style";

export const Random = ({ min = 0, max = 0 }) => {
  const count = max - min + 1;
  const solution = parseInt(Math.random() * count) + min;

  return <Text style={style.largeTxt}>Random: {solution}</Text>;
};
