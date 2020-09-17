import React, { Fragment } from "react";

import { Text } from "react-native";
import style from "./style";

export default (props) => {
  return (
    <>
      <Text style={style.largeTxt}>{props.main}</Text>
      <Text>{props.secondary}</Text>
    </>
    // <Fragment>
    //   <Text style={style.largeTxt}>{props.main}</Text>
    //   <Text>{props.secondary}</Text>
    // </Fragment>
  );
};
