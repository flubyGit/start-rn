import React from "react";

import { Button } from "react-native";

export default (props) => {
  function handleClick() {
    console.warn("Exec");
  }
  const handleExecute = () => console.warn("Exec");

  return (
    <>
      <Button title="1" onPress={handleClick} />
      <Button
        title="2"
        onPress={function () {
          console.warn("2");
        }}
      />
      <Button title="3" onPress={() => console.warn("#03")} />
    </>
  );
};
