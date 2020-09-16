import React from "react";
import { Text } from "react-native";
import style from "../components/style";

export default function Comp() {
  return <Text style={style.largeTxt}>Comp #01</Text>;
}
export function Comp1() {
  return <Text style={style.largeTxt}>Comp #02</Text>;
}
function Comp2() {
  return <Text style={style.largeTxt}>Comp #03</Text>;
}

export { Comp2 };
