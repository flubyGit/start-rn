import React, { useState } from "react";

import { Text, Button } from "react-native";
import style from "./style";

export default ({ pass = 1 }) => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(number + pass);
  const decrement = () => setNumber(number - pass);
  return (
    <>
      <Text style={style.largeTxt}>{number}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </>
  );
};
