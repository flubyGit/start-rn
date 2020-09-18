import React from "react";
import products from "./products";
import { Text } from "react-native";

export default () => {
  const renderProducts = () => {
    return products.map(({ id, name, price }) => (
      <Text key={`${id}`}>
        {id} {name} tem R${price}
      </Text>
    ));
  };
  return <>{renderProducts()}</>;
};
