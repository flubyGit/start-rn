import React from "react";
import { Text } from "react-native";

export default function Comp() {
  return <Text>Comp #01</Text>;
}
export function Comp1() {
  return <Text>Comp #02</Text>;
}
function Comp2() {
  return <Text>Comp #03</Text>;
}

export { Comp2 };
