import React from "react";
import MyInput from "./MyInput";
import MyDate from "./MyDate";
import MyTime from "./MyTime";
import MyRadio from "./MyRadio";
export default ({ type, ...props }) => {
  switch (type) {
    case "radio":
      return <MyRadio {...props} />;
    case "time":
      return <MyTime {...props} />;
    case "date":
      return <MyDate {...props} />;
    default:
      return <MyInput {...props} />;
  }
};
