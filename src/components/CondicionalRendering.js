import React from "react";
import { Text, SafeAreaView } from "react-native";

export default function CondicionalRendering({ num = 0 }) {
  return (
    <SafeAreaView>
      {num % 2 === 0 ? <Text>Par</Text> : <Text>Impar</Text>}
    </SafeAreaView>
  );
}
