import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styled from "./style";
import MegaNumber from "./MegaNumber";

export default class Mega extends Component {
  state = {
    qntNumbers: this.props.qntNumbers,
    numbers: [],
  };
  alterQntNumber = (text) => {
    this.setState({
      qntNumbers: +text,
    });
  };

  generateNumNot = (array) => {
    const newNumber = parseInt(Math.random() * 60) + 1;

    return array.includes(newNumber) ? this.generateNumNot(array) : newNumber;
  };

  generateNumbers = () => {
    const numbers = Array(this.state.qntNumbers)
      .fill()
      .reduce((n) => [...n, this.generateNumNot(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numbers });
  };

  showNumbers() {
    const nums = this.state.numbers;

    return nums.map((n) => {
      return <MegaNumber key={n} num={n} />;
    });
  }
  render() {
    const { qntNumbers } = this.state;
    return (
      <>
        <Text style={styled.largeTxt}>Generator Megasena</Text>
        <TextInput
          style={{ borderBottomWidth: 1 }}
          keyboardType={"numeric"}
          placeholder="Qntd de números"
          value={`${qntNumbers}`}
          onChangeText={this.alterQntNumber}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {this.showNumbers()}
        </View>

        <Button onPress={this.generateNumbers} title={"Gerar"}></Button>
      </>
    );
  }
}
