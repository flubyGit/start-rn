import React from "react";
import { View } from "react-native";

import ExportDefaultComp, { Comp1, Comp2 } from "./components/Multi";

export default () => (
  <View>
    <ExportDefaultComp />
    <Comp1 />
    <Comp2 />
  </View>
);
