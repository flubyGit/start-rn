/* eslint-disable no-self-assign */
/* eslint-disable prefer-destructuring */
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function App() {
  const [stateCalculator, setStateCalculator] = useState(initialState);

  const addDigit = n => {
    const { displayValue, clearDisplay, values, current } = stateCalculator;

    const displayClear = displayValue === "0" || clearDisplay;
    if (n === "." && !clearDisplay && displayValue.includes(".")) return;

    const currentValue = displayClear ? "" : displayValue;
    const displayValues = currentValue + n;

    setStateCalculator({ displayValues, clearDisplay: false });

    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const valuesArray = [...values];
      valuesArray[current] = newValue;
      setStateCalculator({ values: valuesArray });
    }
  };
  const clearMemory = () => {
    setStateCalculator({ ...initialState });
  };
  const setOperation = operation => {
    const { current, values } = stateCalculator;

    if (current === 0)
      setStateCalculator({ operation, current: 1, clearDisplay: true });
    else {
      const equals = operation === "=";

      const valuesArray = [...values];
      try {
        valuesArray[0] = eval(
          `${valuesArray[0]} ${operation} ${valuesArray[1]}`
        );
      } catch (error) {
        valuesArray[0] = valuesArray[0];
      }
      valuesArray[1] = 0;
      setStateCalculator({
        displayValue: `${valuesArray[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        valuesArray,
      });
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttons: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });

  return (
    <View style={styles.container}>
      <Display value={stateCalculator.displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={() => clearMemory()} />
        <Button label="/" operation onClick={() => setOperation("/")} />
        <Button label="7" onClick={() => addDigit(7)} />
        <Button label="8" onClick={() => addDigit(8)} />
        <Button label="9" onClick={() => addDigit(9)} />
        <Button label="*" operation onClick={() => setOperation("*")} />
        <Button label="4" onClick={() => addDigit(4)} />
        <Button label="5" onClick={() => addDigit(5)} />
        <Button label="6" onClick={() => addDigit(6)} />
        <Button label="-" operation onClick={() => setOperation("-")} />
        <Button label="1" onClick={() => addDigit(1)} />
        <Button label="2" onClick={() => addDigit(2)} />
        <Button label="3" onClick={() => addDigit(3)} />
        <Button label="+" operation onClick={() => setOperation("+")} />
        <Button label="0" double onClick={() => addDigit(0)} />
        <Button label="." onClick={() => setOperation(".")} />
        <Button label="=" onClick={() => setOperation("=")} />
      </View>
    </View>
  );
}
