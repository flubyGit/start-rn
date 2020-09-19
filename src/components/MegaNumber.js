import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "./style";

export default ({ num }) => {
  return (
    <View style={style.Container}>
      <Text style={[styled.largeTxt, style.Num]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    height: 50,
    margin: 5,
    borderRadius: 25,
    width: 50,
  },
  Num: {
    color: "#fff",
  },
});
