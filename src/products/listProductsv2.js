import React from "react";
import products from "./products";
import { Text, FlatList } from "react-native";

export default () => {
  const renderProduct = (item) => {
    return (
      <Text>
        {item.id} {item.name} tem R$ {item.price}
      </Text>
    );
  };
  return (
    <>
      <Text>Lista</Text>
      <FlatList
        data={products}
        keyExtractor={(i) => `${i.id}`}
        renderItem={renderProduct}
      />
    </>
  );
};
