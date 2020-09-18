import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function ComponentControlled() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        placeholder={"Placeholder"}
        value={name}
        onChangeText={(name) => setName(name)}
      />
    </View>
  );
}
