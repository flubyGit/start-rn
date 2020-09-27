import React from "react";

import PropTypes from "prop-types";

import { StyleSheet, Dimensions, TouchableHighlight, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    backgroundColor: "#fa8231",
    color: "#fff",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});

export default function Button({ double, triple, operation, onClick, label }) {
  const stylesButton = [styles.button];

  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  double: PropTypes.bool.isRequired,
  triple: PropTypes.bool.isRequired,
  operation: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
