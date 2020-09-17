import React from "react";

import { Button } from "react-native";

export default (props) => {
  function handleClick() {
    console.warn("Exec");
  }

  return <Button title="Executar" onPress={handleClick}></Button>;
};
